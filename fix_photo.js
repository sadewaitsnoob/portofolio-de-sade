const sharp = require('sharp');
const path = require('path');

const input = path.join(__dirname, 'public', 'photo.JPG');
const output = path.join(__dirname, 'public', 'photo_fixed.JPG');

sharp(input)
  .rotate(-90) // Putar 90 derajat berlawanan jarum jam
  .jpeg({ quality: 90 })
  .toFile(output)
  .then(() => {
    console.log('Done! Rotated 90 degrees clockwise.');
  })
  .catch(err => console.error('Error:', err));
