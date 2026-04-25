// =============================================
// GREEN ENERGY POTENTIAL MAPPING
// Somalia & Djibouti — Solar, Wind, Water
// Created by: Abdirahman Ali
// Date: 2026
// Description: Maps renewable energy potential
//              across Somalia and Djibouti to
//              identify optimal zones for green
//              energy investment.
// =============================================

// STEP 1: Define the region — Somalia & Djibouti
var hornOfAfrica = ee.Geometry.Rectangle([
  41.0, -2.0,   // Bottom-left (longitude, latitude)
  52.0, 13.0    // Top-right
]);

// Center the map on the Horn of Africa
Map.centerObject(hornOfAfrica, 6);

// =============================================
// MAP 1: SOLAR ENERGY POTENTIAL
// Using ERA5 solar radiation data
// =============================================

// Load solar radiation data (ERA5 — global climate dataset)
var solarDataset = ee.ImageCollection('ECMWF/ERA5_LAND/HOURLY')
  .filterDate('2023-01-01', '2024-12-31')
  .filterBounds(hornOfAfrica)
  .select('surface_solar_radiation_downwards');

// Calculate mean daily solar radiation
var solarMean = solarDataset.mean();

// Convert from J/m² to kWh/m²/day (standard solar industry unit)
var solarKwh = solarMean.multiply(24).divide(3600000);

// Clip to our region
var solarRegion = solarKwh.clip(hornOfAfrica);

// Visualize — yellow = high solar potential, blue = lower
var solarViz = {
  min: 4.0,
  max: 7.5,
  palette: ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d', '#feb24c', '#f03b20']
};

Map.addLayer(solarRegion, solarViz, 'Solar Potential (kWh/m²/day)', false);

// =============================================
// MAP 2: WIND ENERGY POTENTIAL
// Using ERA5 wind speed data at 100m height
// =============================================

// Load wind data
var windDataset = ee.ImageCollection('ECMWF/ERA5_LAND/HOURLY')
  .filterDate('2023-01-01', '2024-12-31')
  .filterBounds(hornOfAfrica)
  .select(['u_component_of_wind_10m', 'v_component_of_wind_10m']);

// Calculate wind speed from u and v components
function windSpeed(image) {
  var u = image.select('u_component_of_wind_10m');
  var v = image.select('v_component_of_wind_10m');
  return u.multiply(u).add(v.multiply(v)).sqrt().rename('wind_speed');
}

var windSpeedCollection = windDataset.map(windSpeed);
var windMean = windSpeedCollection.mean();
var windRegion = windMean.clip(hornOfAfrica);

// Visualize — green/purple = high wind, white = low wind
var windViz = {
  min: 1,
  max: 8,
  palette: ['#ffffff', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#005a32', '#4a1486']
};

Map.addLayer(windRegion, windViz, 'Wind Speed (m/s at 10m)', false);

// =============================================
// MAP 3: WATER RESOURCES (PRECIPITATION)
// Using CHIRPS rainfall data
// =============================================

// Load CHIRPS precipitation data
var precipDataset = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
  .filterDate('2014-01-01', '2024-12-31')
  .filterBounds(hornOfAfrica);

// Calculate annual average precipitation
var precipMean = precipDataset.mean().multiply(365); // Convert daily to annual mm
var precipRegion = precipMean.clip(hornOfAfrica);

// Visualize — blue = high rainfall, brown = low rainfall
var precipViz = {
  min: 0,
  max: 800,
  palette: ['#8b4513', '#d4a574', '#f5deb3', '#90ee90', '#3cb371', '#006400', '#00008b']
};

Map.addLayer(precipRegion, precipViz, 'Annual Rainfall (mm/year)', false);

// =============================================
// MAP 4: COMBINED GREEN ENERGY SUITABILITY
// Identifies zones good for ALL three resources
// =============================================

// Normalize each layer to 0-1 scale
var solarNorm = solarRegion.unitScale(3.5, 7.5);
var windNorm = windRegion.unitScale(1, 8);
var precipNorm = precipRegion.unitScale(50, 700);

// Combine with weights:
// Solar: 40% | Wind: 30% | Water: 30%
var combinedScore = solarNorm.multiply(0.4)
  .add(windNorm.multiply(0.3))
  .add(precipNorm.multiply(0.3));

var combinedViz = {
  min: 0.1,
  max: 0.8,
  palette: ['#f7f7f7', '#d9d9d9', '#bdbdbd', '#969696', '#feb24c', '#fc4e2a', '#bd0026']
};

Map.addLayer(combinedScore, combinedViz, 'Combined Green Energy Suitability', true);

// =============================================
// ADD LEGENDS
// =============================================

// Solar legend
var solarLegend = ui.Panel({
  style: { position: 'bottom-left', padding: '8px 15px' }
});
solarLegend.add(ui.Label({
  value: 'SOLAR POTENTIAL (kWh/m²/day)',
  style: { fontWeight: 'bold', fontSize: '14px', margin: '0 0 4px 0' }
}));
solarLegend.add(makeLegendRow('#f03b20', 'Excellent: 7.0-7.5'));
solarLegend.add(makeLegendRow('#feb24c', 'Very Good: 6.0-7.0'));
solarLegend.add(makeLegendRow('#045a8d', 'Good: 5.0-6.0'));
solarLegend.add(makeLegendRow('#74a9cf', 'Moderate: 4.5-5.0'));
solarLegend.add(makeLegendRow('#bdc9e1', 'Lower: 4.0-4.5'));
Map.add(solarLegend);

function makeLegendRow(color, label) {
  var colorBox = ui.Label({
    style: {
      backgroundColor: color,
      padding: '7px',
      margin: '0 0 3px 0',
      width: '25px'
    }
  });
  var description = ui.Label({
    value: label,
    style: { margin: '0 0 3px 6px', fontSize: '11px' }
  });
  return ui.Panel({
    widgets: [colorBox, description],
    layout: ui.Panel.Layout.Flow('horizontal')
  });
}

// Print statistics
print('=== GREEN ENERGY POTENTIAL REPORT ===');
print('Region: Somalia & Djibouti');

var solarStats = solarRegion.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: hornOfAfrica,
  scale: 10000
});
print('Average Solar Radiation:', solarStats.get('surface_solar_radiation_downwards'), 'kWh/m²/day');

var windStats = windRegion.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: hornOfAfrica,
  scale: 10000
});
print('Average Wind Speed:', windStats.get('wind_speed'), 'm/s');

var precipStats = precipRegion.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: hornOfAfrica,
  scale: 10000
});
print('Average Annual Rainfall:', precipStats.get('precipitation'), 'mm/year');

print('✅ All maps loaded. Use the Layers panel (top-right of map) to toggle between views.');
print('📸 Screenshot each layer for your GitHub portfolio.');