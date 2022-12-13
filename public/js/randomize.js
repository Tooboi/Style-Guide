

const generateColor = function() {
  // Generate a random color in hexadecimal format
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Create a lighter and darker version of the color by
  // adding or subtracting a small amount from the red, green, and blue components of the color
  const lighterColor = colorLuminance(color, 0.1);
  const darkerColor = colorLuminance(color, -0.1);

  return { color, lighterColor, darkerColor };
}


// Function to change the luminance of a color
function colorLuminance(color, luminance) {
  // Convert the color to RGB format
  let newColor = hexToRgb(color);

  // Modify each RGB component of the color
  newColor.r = Math.max(0, Math.min(255, newColor.r + 255 * luminance));
  newColor.g = Math.max(0, Math.min(255, newColor.g + 255 * luminance));
  newColor.b = Math.max(0, Math.min(255, newColor.b + 255 * luminance));

  // Convert the modified color back to hexadecimal format
  return rgbToHex(newColor);
}

// Function to convert a color from hexadecimal to RGB format
function hexToRgb(color) {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  return { r, g, b };
}

function rgbToHex(color) {
  // convert the color values to hexadecimal strings
  const rHex = color.r.toString(16);
  const gHex = color.g.toString(16);
  const bHex = color.b.toString(16);

  // pad the strings with leading zeros if necessary
  const paddedRHex = rHex.length === 1 ? "0" + rHex : rHex;
  const paddedGHex = gHex.length === 1 ? "0" + gHex : gHex;
  const paddedBHex = bHex.length === 1 ? "0" + bHex : bHex;

  // concatenate the strings to form the final hexadecimal color code
  return "#" + paddedRHex + paddedGHex + paddedBHex;
}


// module.exports = {
//     generateColor,
//     colorLuminance,
//     rgbToHex,
//     hexToRgb
// };