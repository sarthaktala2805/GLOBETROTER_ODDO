// scripts/audit_city_images.js
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/data/city_images.js'), 'utf8');

// Parse CITY_IMAGES
const cityImages = {};
const lines = content.split('\n');
let currentCity = null;
lines.forEach(line => {
  const cityMatch = line.match(/"(city-[a-z0-9-]+)":\s*\{/);
  if (cityMatch) {
    currentCity = cityMatch[1];
    cityImages[currentCity] = {};
  }
  const imgMatch = line.match(/image:\s*"([^"]+)"/);
  if (imgMatch && currentCity) {
    cityImages[currentCity].image = imgMatch[1];
  }
  const altMatch = line.match(/imageAlt:\s*"([^"]+)"/);
  if (altMatch && currentCity) {
    cityImages[currentCity].imageAlt = altMatch[1];
  }
});

console.log('Parsed cities count:', Object.keys(cityImages).length);

const urlMap = {};
Object.entries(cityImages).forEach(([id, data]) => {
  if (!data.image) return;
  urlMap[data.image] = urlMap[data.image] || [];
  urlMap[data.image].push(id);
});

console.log('Unique URLs:', Object.keys(urlMap).length);
const duplicates = Object.entries(urlMap).filter(([url, ids]) => ids.length > 1);
console.log('Duplicate URLs count:', duplicates.length);
duplicates.forEach(([url, ids]) => {
  console.log(`[${ids.length} cities] ${ids.join(', ')}`);
});
