const fs = require('fs');
const { createCanvas } = require('canvas');

const sizes = [16, 48, 128];

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#4CAF50';
  ctx.fillRect(0, 0, size, size);

  // Draw text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${size / 2}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('V', size / 2, size / 2);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`images/icon${size}.png`, buffer);
});

console.log('Icons generated successfully.'); 