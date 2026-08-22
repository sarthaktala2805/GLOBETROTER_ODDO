// scripts/analyze_images.js
const fs = require('fs');
const path = require('path');

function readDataFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const jsonStr = content.replace(/^[\s\S]*?=\s*/, '').replace(/;\s*export default[\s\S]*$/, '').trim();
  return JSON.parse(jsonStr);
}

const cities = readDataFile(path.join(__dirname, '../src/data/cities.js'));
const destinations = readDataFile(path.join(__dirname, '../src/data/destinations.js'));
const activities = readDataFile(path.join(__dirname, '../src/data/activities.js'));
const hotels = readDataFile(path.join(__dirname, '../src/data/hotels.js'));

console.log('Dataset Counts:', {
  cities: cities.length,
  destinations: destinations.length,
  activities: activities.length,
  hotels: hotels.length
});

function analyzeImages(name, list) {
  const map = {};
  list.forEach(item => {
    const img = item.image;
    if (!img) return;
    map[img] = (map[img] || 0) + 1;
  });
  const dups = Object.entries(map).filter(([url, count]) => count > 1);
  console.log(`\n=== ${name} ===`);
  console.log(`Total items: ${list.length}`);
  console.log(`Unique URLs: ${Object.keys(map).length}`);
  console.log(`Duplicate URLs used >1 time: ${dups.length}`);
  if (dups.length > 0) {
    console.log('Sample duplicates:', dups.slice(0, 3));
  }
}

analyzeImages('Cities', cities);
analyzeImages('Destinations', destinations);
analyzeImages('Activities', activities);
analyzeImages('Hotels', hotels);

// Check cross-entity duplicates (e.g. food activity using hotel/fort image, or hotel using city image)
const allMap = {};
const checkCross = (name, list) => {
  list.forEach(item => {
    if (!item.image) return;
    allMap[item.image] = allMap[item.image] || [];
    allMap[item.image].push({ type: name, id: item.id, name: item.name || item.title });
  });
};
checkCross('City', cities);
checkCross('Destination', destinations);
checkCross('Activity', activities);
checkCross('Hotel', hotels);

const crossDups = Object.entries(allMap).filter(([url, entries]) => {
  const types = new Set(entries.map(e => e.type));
  return types.size > 1;
});

console.log(`\n=== CROSS-ENTITY DUPLICATES ===`);
console.log(`Images shared across different entity types: ${crossDups.length}`);
if (crossDups.length > 0) {
  console.log('Sample cross-entity duplicate:', crossDups[0][0]);
  console.log('Used in:', crossDups[0][1].slice(0, 5));
}
