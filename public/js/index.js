// const randomize = require("./assets/js/randomize.js");
// const tinycolor = require("./tinycolor");


let backgroundInput;
let surfaceInput;
let borderInput;
let p200Input;
let p500Input;
let p700Input;
let s200Input;
let s500Input;
let s700Input;
let onBackgroundInput;
let onSurfaceInput;
let onPrimaryInput;
let onSecondaryInput;
let rootTheme;


if (typeof window !== 'undefined') {
  backgroundInput = document.getElementById("backgroundInput");
  surfaceInput = document.getElementById("surfaceInput");
  borderInput = document.getElementById("borderInput");
  p200Input = document.getElementById("p200Input");
  p500Input = document.getElementById("p500Input");
  p700Input = document.getElementById("p700Input");
  s200Input = document.getElementById("s200Input");
  s500Input = document.getElementById("s500Input");
  s700Input = document.getElementById("s700Input");
  onBackgroundInput = document.getElementById("onBackgroundInput");
  onSurfaceInput = document.getElementById("onSurfaceInput");
  onPrimaryInput = document.getElementById("onPrimaryInput");
  onSecondaryInput = document.getElementById("onSecondaryInput");
  rootTheme = document.querySelector(":root");
  


  const form = document.getElementById("hexCodeForm");
  const formRandom = document.getElementById("randomize");

  // Text field inputs
  

  // Color swatches
  const p200Text = document.getElementById("swatch1T");
  const p500Text = document.getElementById("swatch2T");
  const p700Text = document.getElementById("swatch3T");
  const s200Text = document.getElementById("swatch4T");
  const s500Text = document.getElementById("swatch5T");
  const s700Text = document.getElementById("swatch6T");
  const backgroundText = document.getElementById("swatch11T");
  const surfaceText = document.getElementById("swatch12T");
  const borderText = document.getElementById("swatch13T");
  const onBackgroundText = document.getElementById("swatch7T");
  const onSurfaceText = document.getElementById("swatch8T");
  const onPrimaryText = document.getElementById("swatch9T");
  const onSecondaryText = document.getElementById("swatch10T");

  // Font inputs
  const crimsonPro = document.getElementById("crimsonPro");
  const fraunces = document.getElementById("fraunces");
  const grenze = document.getElementById("grenze");
  const montserrat = document.getElementById("montserrat");
  const museoModerno = document.getElementById("museoModerno");
  const nunito = document.getElementById("nunito");
  const poppins = document.getElementById("poppins");
  const quicksand = document.getElementById("quicksand");
  const roboto = document.getElementById("roboto");

  const fontName = document.getElementById("fontName");

// Forms

const fonts = [crimsonPro, fraunces, grenze, montserrat, museoModerno, nunito, poppins, quicksand, roboto];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const background = backgroundInput.value;
  const surface = surfaceInput.value;
  const border = borderInput.value;
  const p200 = p200Input.value;
  const p500 = p500Input.value;
  const p700 = p700Input.value;
  const s200 = s200Input.value;
  const s500 = s500Input.value;
  const s700 = s700Input.value;
  const onBackground = onBackgroundInput.value;
  const onSurface = onSurfaceInput.value;
  const onPrimary = onPrimaryInput.value;
  const onSecondary = onSecondaryInput.value;

  rootTheme.style.setProperty("--col-bg", background);
  rootTheme.style.setProperty("--col-surface", surface);
  rootTheme.style.setProperty("--col-surface2", border);
  rootTheme.style.setProperty("--col-p-200", p200);
  rootTheme.style.setProperty("--col-p-500", p500);
  rootTheme.style.setProperty("--col-p-700", p700);
  rootTheme.style.setProperty("--col-s-200", s200);
  rootTheme.style.setProperty("--col-s-500", s500);
  rootTheme.style.setProperty("--col-s-700", s700);
  rootTheme.style.setProperty("--col-on-bg", onBackground);
  rootTheme.style.setProperty("--col-on-surface", onSurface);
  rootTheme.style.setProperty("--col-on-primary", onPrimary);
  rootTheme.style.setProperty("--col-on-secondary", onSecondary);

  p200Text.innerText = p200;
  p500Text.innerText = p500;
  p700Text.innerText = p700;
  s200Text.innerText = s200;
  s500Text.innerText = s500;
  s700Text.innerText = s700;
  backgroundText.innerText = background;
  surfaceText.innerText = surface;
  borderText.innerText = border;
  onBackgroundText.innerText = onBackground;
  onSurfaceText.innerText = onSurface;
  onPrimaryText.innerText = onPrimary;
  onSecondaryText.innerText = onSecondary;

  for (let i = 0; i < fonts.length; i++) {
    const current = fonts[i];
    if (current.checked === true) {
      let fontFamily = current.value;
      console.log(fontFamily.replace(/['"]+/g, ""));
      rootTheme.style.setProperty("--ff", fontFamily);
      fontName.innerText = fontFamily.replace(/['"]+/g, "");
    }
  }
});
var primaryCol = "";
function generateColor() {
  // Generate a random color in hexadecimal format
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  primaryCol = color;
}
// const primaryLight = tinycolor(primaryCol).lighten(20).toHexString();

// function colorLuminance(color, luminance) {
//   // Convert the color to RGB format
//   let newColor = hexToRgb(color);

//   // Modify each RGB component of the color
//   newColor.r = Math.max(0, Math.min(255, newColor.r + 255 * luminance));
//   newColor.g = Math.max(0, Math.min(255, newColor.g + 255 * luminance));
//   newColor.b = Math.max(0, Math.min(255, newColor.b + 255 * luminance));

//   // Convert the modified color back to hexadecimal format
//   return rgbToHex(newColor);
// }

// function rgbToHex(color) {
//   // convert the color values to hexadecimal strings
//   const rHex = color.r.toString(16);
//   const gHex = color.g.toString(16);
//   const bHex = color.b.toString(16);

//   // pad the strings with leading zeros if necessary
//   const paddedRHex = rHex.length === 1 ? "0" + rHex : rHex;
//   const paddedGHex = gHex.length === 1 ? "0" + gHex : gHex;
//   const paddedBHex = bHex.length === 1 ? "0" + bHex : bHex;

//   // concatenate the strings to form the final hexadecimal color code
//   return "#" + paddedRHex + paddedGHex + paddedBHex;
// }

formRandom.addEventListener("submit", (event) => {
  event.preventDefault();
  generateColor();
  
  console.log(primaryCol);
});
}
