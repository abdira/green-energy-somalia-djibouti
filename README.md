# Green Energy Potential Mapping — Somalia & Djibouti 🇸🇴🇩🇯

## Project Overview

This project maps renewable energy potential across Somalia and Djibouti using satellite-derived climate data. Three resource maps — solar radiation, wind speed, and annual rainfall — are combined into a suitability analysis that identifies optimal zones for decentralised green energy investment.

## Why This Matters

Somalia and Djibouti have abundant natural resources: year-round sun, strong coastal winds, and seasonal rainfall. Yet both nations remain almost entirely dependent on imported fossil fuels for electricity generation. Energy poverty is severe — less than 35% of Somalis have access to electricity, and Djibouti imports nearly all its power.

The war in the Middle East has demonstrated with brutal clarity that energy is not a commodity — it is a matter of life and death for our civilisation. Nations that control their energy control their destiny.

This project asks: where should we build first?

## Key Findings

### ☀️ Solar Energy Potential

| Zone | Solar Radiation | Potential |
|------|----------------|-----------|
| Northern Somalia coast (Gulf of Aden) | 6.5–7.5 kWh/m²/day | **Excellent** — among the highest in the world |
| Djibouti | 6.0–7.0 kWh/m²/day | **Excellent** — consistent year-round sun |
| Central Somalia | 5.5–6.5 kWh/m²/day | **Very Good** |
| Southern Somalia | 4.5–5.5 kWh/m²/day | **Good** — slightly reduced by cloud cover |

**Finding:** Djibouti and northern Somalia receive solar radiation comparable to the Sahara Desert — ideal for utility-scale solar farms.

### 💨 Wind Energy Potential

| Zone | Wind Speed (10m) | Potential |
|------|------------------|-----------|
| Puntland coast (Xaafuun to Eyl) | 6–8 m/s | **Excellent** — consistent offshore winds |
| Central coast (Hobyo to Mogadishu) | 5–7 m/s | **Very Good** |
| Inland regions | 2–4 m/s | **Moderate** |
| Djibouti (interior) | 2–4 m/s | **Moderate** |

**Finding:** The northeastern Somali coastline has wind speeds suitable for commercial wind farms. Offshore wind potential (not mapped here) is likely even higher.

### 🌧️ Water Resources & Hydropower Potential

| Zone | Annual Rainfall | Potential |
|------|----------------|-----------|
| Southern Somalia (Jamaame, Baraawe) | 400–700+ mm/year | **Highest** — supports agriculture and water storage |
| Shabelle & Jubba River basins | 300–500 mm/year | **Good** — existing river systems for micro-hydropower |
| Mogadishu & surrounding | 300–450 mm/year | **Moderate** |
| Northern Somalia & Djibouti | 0–200 mm/year | **Low** — arid, requires rainwater harvesting innovation |

**Finding:** Southern Somalia has sufficient rainfall for rainwater capture, storage, and small-scale hydropower. In arid Djibouti, the priority should be solar coupled with battery storage — not water-dependent solutions.

### 🔴 Combined Suitability

When solar, wind, and water potential are combined with weights (Solar: 40%, Wind: 30%, Water: 30%):

| Priority Zone | Region | Best For |
|---------------|--------|----------|
| **Tier 1** | Northern Somalia coast + Djibouti | Solar farms, interconnected grid |
| **Tier 2** | Puntland coast (Xaafuun–Eyl–Hobyo) | Wind farms + solar hybrid |
| **Tier 3** | Southern Somalia (Jamaame–Baraawe) | Micro-hydropower, rainwater storage, agriculture |
| **Tier 4** | Central inland | Off-grid solar for rural communities |

## Policy Recommendations

1. **Decentralised approach:** No single energy source can serve the entire region. Each zone should develop its natural advantage.
2. **Djibouti:** Prioritise utility-scale solar + battery storage. The country's year-round sun and small geographic size make it ideal for a solar-first strategy.
3. **Puntland coast:** Invest in wind energy — the coastline between Xaafuun and Hobyo has commercial-grade wind speeds.
4. **Southern Somalia:** Develop rainwater capture and storage infrastructure to combat drought and support agriculture alongside solar.
5. **Cross-border energy grid:** A connected grid linking Djibouti's solar, Puntland's wind, and southern Somalia's hydropower would create energy security for the entire Horn.

## Personal Connection

I was born in Somalia. I was raised in Djibouti. I watched my mother cook over charcoal and gas because electricity was too expensive and too unreliable. I know what energy poverty feels like — not as a statistic, but as a daily reality.

This project is my answer to a question I have carried my whole life: *If we have sun, wind, and water — why are we still in the dark?*

The answer is governance, not resources. And governance can be changed.

## Methodology

| Data Layer | Source | Time Period |
|------------|--------|-------------|
| Solar Radiation | ERA5-Land (ECMWF) | 2023–2024 |
| Wind Speed (10m) | ERA5-Land (ECMWF) | 2023–2024 |
| Precipitation | CHIRPS (UCSB/CHG) | 2014–2024 |
| Combined Suitability | Weighted overlay (Solar 40%, Wind 30%, Water 30%) | — |

All analysis performed in Google Earth Engine (JavaScript API).

## Tools Used

- Google Earth Engine
- ERA5 Climate Reanalysis (ECMWF)
- CHIRPS Rainfall Data (Climate Hazards Group)
- GIS Spatial Analysis & Weighted Overlay

## Repository Contents

| File | Description |
|------|-------------|
| `green_energy_somalia_djibouti.js` | Earth Engine script — run to generate all maps |
| `solar_potential.png` | Solar radiation map (kWh/m²/day) |
| `wind_speed.png` | Wind speed map (m/s at 10m) |
| `annual_rainfall.png` | Annual precipitation map (mm/year) |
| `combined_suitability.png` | Weighted green energy suitability map |

## Author

**Abdirahman Ali**  
Bachelor of Science in ICT, Rift Valley University (2025)  
CGPA: 3.9/4.0 | Dean's List | Top 1% in Security Disciplines  

📧 abdirahmanali977@gmail.com  
🔗 [github.com/abdira](https://github.com/abdira)  
🔗 [linkedin.com/in/abdirahman-ali](https://linkedin.com/in/abdirahman-ali)  



---

> *"Somalia and Djibouti have sun, wind, and water. What we lack is not resources — it is governance, political will, and the technical knowledge to harness them for our own people."*
