

if (typeof window !== 'undefined') {
  const backgroundInput = document.getElementById("backgroundInput");
  const surfaceInput = document.getElementById("surfaceInput");
  const borderInput = document.getElementById("borderInput");
  const p200Input = document.getElementById("p200Input");
  const p500Input = document.getElementById("p500Input");
  const p700Input = document.getElementById("p700Input");
  const s200Input = document.getElementById("s200Input");
  const s500Input = document.getElementById("s500Input");
  const s700Input = document.getElementById("s700Input");
  const onBackgroundInput = document.getElementById("onBackgroundInput");
  const onSurfaceInput = document.getElementById("onSurfaceInput");
  const onPrimaryInput = document.getElementById("onPrimaryInput");
  const onSecondaryInput = document.getElementById("onSecondaryInput");
  const rootTheme = document.querySelector(":root");
  


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
var primaryLight = "";
var primaryDark = "";
function generateColor() {
  // Generate a random color in hexadecimal format
  const pColor = tinycolor.random().toHexString()

  primaryCol = tinycolor(pColor)._originalInput;
  primaryLight = tinycolor(primaryCol).lighten(15).toHexString();
  primaryDark = tinycolor(primaryCol).darken(15).toHexString();
  // rootTheme.style.setProperty("--col-bg", background);
  // rootTheme.style.setProperty("--col-surface", surface);
  // rootTheme.style.setProperty("--col-surface2", border);
  rootTheme.style.setProperty("--col-p-200", primaryLight);
  rootTheme.style.setProperty("--col-p-500", primaryCol);
  rootTheme.style.setProperty("--col-p-700", primaryDark);
  // rootTheme.style.setProperty("--col-s-200", s200);
  // rootTheme.style.setProperty("--col-s-500", s500);
  // rootTheme.style.setProperty("--col-s-700", s700);
  // rootTheme.style.setProperty("--col-on-bg", onBackground);
  // rootTheme.style.setProperty("--col-on-surface", onSurface);
  // rootTheme.style.setProperty("--col-on-primary", onPrimary);
  // rootTheme.style.setProperty("--col-on-secondary", onSecondary);

  p200Text.innerText = primaryLight;
  p500Text.innerText = primaryCol;
  p700Text.innerText = primaryDark;
  // s200Text.innerText = s200;
  // s500Text.innerText = s500;
  // s700Text.innerText = s700;
  // backgroundText.innerText = background;
  // surfaceText.innerText = surface;
  // borderText.innerText = border;
  // onBackgroundText.innerText = onBackground;
  // onSurfaceText.innerText = onSurface;
  // onPrimaryText.innerText = onPrimary;
  // onSecondaryText.innerText = onSecondary;

  p200Input.value = primaryLight;
  p500Input.value = primaryCol;
  p700Input.value = primaryDark;
}

formRandom.addEventListener("submit", (event) => {
  event.preventDefault();
  generateColor();
});
}

