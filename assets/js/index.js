// Form Inputs
const backgroundInput = document.getElementById("backgroundInput");
const surfaceInput = document.getElementById("surfaceInput");
const borderInput = document.getElementById("borderInput");

const p200Input = document.getElementById("p200Input");
const p500Input = document.getElementById("p500Input");
const p700Input = document.getElementById("p700Input");

const s200Input = document.getElementById("s200Input");
const s500Input = document.getElementById("s500Input");
const s700Input = document.getElementById("s700Input");

const onSurfaceInput = document.getElementById("onSurfaceInput");
const onPrimaryInput = document.getElementById("onPrimaryInput");
const onSecondaryInput = document.getElementById("onSecondaryInput");
const rootTheme = document.querySelector(":root");

// Color scheme options
const schAnalogous = document.getElementById("analogous");
const schComplement = document.getElementById("splitcomplement");
const schTriad = document.getElementById("triad");
const schTetrad = document.getElementById("tetrad");

// Forms
const formLayout = document.getElementById("formLayout");
const formPrimary = document.getElementById("formPrimary");
const formSecondary = document.getElementById("formSecondary");
const formText = document.getElementById("formText");
const formRandom = document.getElementById("randomize");
const formFonts = document.getElementById("formFonts");

// Color swatches
const p200Text = document.getElementById("p200Text");
const p500Text = document.getElementById("p500Text");
const p700Text = document.getElementById("p700Text");

const s200Text = document.getElementById("s200Text");
const s500Text = document.getElementById("s500Text");
const s700Text = document.getElementById("s700Text");

const backgroundText = document.getElementById("bgText");
const surfaceText = document.getElementById("surfText");
const borderText = document.getElementById("borText");

const onSurfaceText = document.getElementById("onStext");
const onPrimaryText = document.getElementById("onPtext");
const onSecondaryText = document.getElementById("onSecText");

// Contrast Ratio Text
const onSurfLCR = document.getElementById("onSurfLCR");
const onSurfSCR = document.getElementById("onSurfSCR");
const onSurfSRatio = document.getElementById("onSurfSRatio");

const pOnSurfLCR = document.getElementById("pOnSurfLCR");
const pOnSurfSCR = document.getElementById("pOnSurfSCR");
const pOnSurfSRatio = document.getElementById("pOnSurfSRatio");

const sOnSurfLCR = document.getElementById("sOnSurfLCR");
const sOnSurfSCR = document.getElementById("sOnSurfSCR");
const sOnSurfSRatio = document.getElementById("sOnSurfSRatio");

const OnPrimeLCR = document.getElementById("OnPrimeLCR");
const OnPrimeSCR = document.getElementById("OnPrimeSCR");
const OnPrimeSRatio = document.getElementById("OnPrimeSRatio");

const OnSecLCR = document.getElementById("OnSecLCR");
const OnSecSCR = document.getElementById("OnSecSCR");
const OnSecSRatio = document.getElementById("OnSecSRatio");

// Font inputs
// const crimsonPro = document.getElementById("crimsonPro");
const fraunces = document.getElementById("fraunces");
// const grenze = document.getElementById("grenze");
const montserrat = document.getElementById("montserrat");
// const museoModerno = document.getElementById("museoModerno");
const nunito = document.getElementById("nunito");
const poppins = document.getElementById("poppins");
const quicksand = document.getElementById("quicksand");
const roboto = document.getElementById("roboto");

const fontName = document.getElementById("fontType");

// Arrays
const schemes = [schAnalogous, schComplement, schTriad, schTetrad];
const fonts = [fraunces, montserrat, nunito, poppins, quicksand, roboto];

formLayout.addEventListener("input", () => {
  const background = backgroundInput.value;
  const surface = surfaceInput.value;
  const border = borderInput.value;
  const p500 = p500Input.value;
  const s500 = s500Input.value;
  const onSurface = onSurfaceInput.value;

  rootTheme.style.setProperty("--col-bg", background);
  rootTheme.style.setProperty("--col-surface", surface);
  rootTheme.style.setProperty("--col-surface2", border);

  backgroundText.innerText = background;
  surfaceText.innerText = surface;
  borderText.innerText = border;
  
  const p500vsSurface = tinycolor.readability(surface, p500).toFixed(2);
  console.log("Primary 500 v Surface Contrast Ratio: ", p500vsSurface);
  pOnSurfSRatio.innerText = p500vsSurface + " : 1";
  if (tinycolor.isReadable(surface, p500, { level: "AA", size: "large" })) {
    pOnSurfLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    pOnSurfLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(surface, p500, { level: "AA", size: "small" })) {
    pOnSurfSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    pOnSurfSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const s500vsSurface = tinycolor.readability(surface, s500).toFixed(2);
  console.log("Secondary 500 v Surface Contrast Ratio: ", s500vsSurface);
  sOnSurfSRatio.innerText = s500vsSurface + " : 1";
  if (tinycolor.isReadable(surface, s500, { level: "AA", size: "large" })) {
    sOnSurfLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    sOnSurfLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(surface, s500, { level: "AA", size: "small" })) {
    sOnSurfSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    sOnSurfSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const surfvsSurface = tinycolor.readability(surface, onSurface).toFixed(2);
  console.log("Surface v Surface Contrast Ratio: ", surfvsSurface);
  onSurfSRatio.innerText = surfvsSurface + " : 1";
  if (tinycolor.isReadable(surface, onSurface, { level: "AA", size: "large" })) {
    onSurfLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    onSurfLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(surface, onSurface, { level: "AA", size: "small" })) {
    onSurfSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    onSurfSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
});

formPrimary.addEventListener("input", () => {
  const p200 = p200Input.value;
  const p500 = p500Input.value;
  const p700 = p700Input.value;
  const surface = surfaceInput.value;
  const onPrimary = onPrimaryInput.value;
  rootTheme.style.setProperty("--col-p-200", p200);
  rootTheme.style.setProperty("--col-p-500", p500);
  rootTheme.style.setProperty("--col-p-700", p700);

  p200Text.innerText = p200;
  p500Text.innerText = p500;
  p700Text.innerText = p700;
  
  const p500vsSurface = tinycolor.readability(surface, p500).toFixed(2);
  console.log("Primary 500 v Surface Contrast Ratio: ", p500vsSurface);
  pOnSurfSRatio.innerText = p500vsSurface + " : 1";
  if (tinycolor.isReadable(surface, p500, { level: "AA", size: "large" })) {
    pOnSurfLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    pOnSurfLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(surface, p500, { level: "AA", size: "small" })) {
    pOnSurfSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    pOnSurfSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const primvsOnPrime = tinycolor.readability(p500, onPrimary).toFixed(2);
  console.log("Text on Primary v Primary Contrast Ratio: ", primvsOnPrime);
  OnPrimeSRatio.innerText = primvsOnPrime + " : 1";
  if (tinycolor.isReadable(p500, onPrimary, { level: "AA", size: "large" })) {
    OnPrimeLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnPrimeLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(p500, onPrimary, { level: "AA", size: "small" })) {
    OnPrimeSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnPrimeSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

});

formSecondary.addEventListener("input", () => {
  const s200 = s200Input.value;
  const s500 = s500Input.value;
  const s700 = s700Input.value;
  const surface = surfaceInput.value;
  const onSecTxt = onSecondaryInput.value;
  rootTheme.style.setProperty("--col-s-200", s200);
  rootTheme.style.setProperty("--col-s-500", s500);
  rootTheme.style.setProperty("--col-s-700", s700);

  s200Text.innerText = s200;
  s500Text.innerText = s500;
  s700Text.innerText = s700;

  const s500vsSurface = tinycolor.readability(surface, s500).toFixed(2);
  console.log("Secondary 500 v Surface Contrast Ratio: ", s500vsSurface);
  sOnSurfSRatio.innerText = s500vsSurface + " : 1";
  if (tinycolor.isReadable(surface, s500, { level: "AA", size: "large" })) {
    sOnSurfLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    sOnSurfLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(surface, s500, { level: "AA", size: "small" })) {
    sOnSurfSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    sOnSurfSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const secvsOnPrime = tinycolor.readability(s500, onSecTxt).toFixed(2);
  console.log("Text on Secondary v Secondary Contrast Ratio: ", secvsOnPrime);
  OnSecSRatio.innerText = secvsOnPrime + " : 1";
  if (tinycolor.isReadable(s500, onSecTxt, { level: "AA", size: "large" })) {
    OnSecLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnSecLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(s500, onSecTxt, { level: "AA", size: "small" })) {
    OnSecSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnSecSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

});

formText.addEventListener("input", () => {
  const onSurface = onSurfaceInput.value;
  const onPrimary = onPrimaryInput.value;
  const onSecondary = onSecondaryInput.value;
  const s500 = s500Input.value;
  const p500 = p500Input.value;
  
  rootTheme.style.setProperty("--col-on-surface", onSurface);
  rootTheme.style.setProperty("--col-on-primary", onPrimary);
  rootTheme.style.setProperty("--col-on-secondary", onSecondary);

  onSurfaceText.innerText = onSurface;
  onPrimaryText.innerText = onPrimary;
  onSecondaryText.innerText = onSecondary;

  const secvsOnPrime = tinycolor.readability(s500, onSecondary).toFixed(2);
  console.log("Text on Secondary v Secondary Contrast Ratio: ", secvsOnPrime);
  OnSecSRatio.innerText = secvsOnPrime + " : 1";
  if (tinycolor.isReadable(s500, onSecondary, { level: "AA", size: "large" })) {
    OnSecLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnSecLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(s500, onSecondary, { level: "AA", size: "small" })) {
    OnSecSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnSecSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const primvsOnPrime = tinycolor.readability(p500, onPrimary).toFixed(2);
  console.log("Text on Primary v Primary Contrast Ratio: ", primvsOnPrime);
  OnPrimeSRatio.innerText = primvsOnPrime + " : 1";
  if (tinycolor.isReadable(p500, onPrimary, { level: "AA", size: "large" })) {
    OnPrimeLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnPrimeLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(p500, onPrimary, { level: "AA", size: "small" })) {
    OnPrimeSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnPrimeSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
});

var primaryCol = "";
var primaryLight = "";
var primaryDark = "";

function generateColor(colorSchemeConfirm) {
  // Generate a random color in hexadecimal format
  var pColor = tinycolor.random().toHexString();
  // Get luminance
  let pLuminance = tinycolor(pColor).getLuminance();
  // DOM Traverse
  primaryCol = tinycolor(pColor)._originalInput;
  console.log("Original Color: " + primaryCol);
  // Declare empty primary confirm color
  var primaryColConfirm = "";

  console.log("Luminance: " + pLuminance);
  // Adjust Brightness
  if (pLuminance < 0.15) {
    console.log("Wayy Too Dark!");
    primaryColConfirm = tinycolor(primaryCol).lighten(25).toHexString();
    console.log("Lightened Color: " + primaryColConfirm);
  }
  if (pLuminance > 0.15 && pLuminance < 0.25) {
    console.log("Much Too Dark!");
    primaryColConfirm = tinycolor(primaryCol).lighten(20).toHexString();
    console.log("Lightened Color: " + primaryColConfirm);
  }
  if (pLuminance > 0.25 && pLuminance < 0.5) {
    console.log("Too Dark!");
    primaryColConfirm = tinycolor(primaryCol).lighten(10).toHexString();
    console.log("Lightened Color: " + primaryColConfirm);
  }
  if (pLuminance > 0.5 && pLuminance < 0.7) {
    console.log("Mid-tone!");
    primaryColConfirm = primaryCol;
    console.log("Mid-Tone Color: " + primaryColConfirm);
  }
  if (pLuminance > 0.7 && pLuminance < 0.85) {
    console.log("Too Light!");
    primaryColConfirm = tinycolor(primaryCol).darken(15).toHexString();
    console.log("Darkened Color: " + primaryColConfirm);
  }
  if (pLuminance > 0.85) {
    console.log("Much Too Light!");
    primaryColConfirm = tinycolor(primaryCol).darken(25).toHexString();
    console.log("Darkened Color: " + primaryColConfirm);
  }

  // Split complementary color scheme maker
  var splitComp = tinycolor(primaryColConfirm).splitcomplement();

  console.log("splitComp: " + splitComp);
  if (colorSchemeConfirm === "analogous") {
    splitComp = tinycolor(primaryColConfirm).analogous();
  }
  if (colorSchemeConfirm === "splitcomplement") {
    splitComp = tinycolor(primaryColConfirm).splitcomplement();
  }
  if (colorSchemeConfirm === "triad") {
    splitComp = tinycolor(primaryColConfirm).triad();
  }
  if (colorSchemeConfirm === "tetrad") {
    splitComp = tinycolor(primaryColConfirm).tetrad();
  }

  let secondaryCol = splitComp[1].toHexString();
  let surfaceCol = splitComp[2].toHexString();

  console.log("Secondary Color: " + secondaryCol);
  console.log("Surface Color: " + surfaceCol);

  // Make darker and lighter version
  primaryLight = tinycolor(primaryColConfirm).spin(-8).desaturate(20).lighten(15).toHexString();
  primaryDark = tinycolor(primaryColConfirm).spin(8).desaturate(2).darken(18).toHexString();
  const secondaryLight = tinycolor(secondaryCol).spin(-8).desaturate(20).lighten(15).toHexString();
  const secondaryDark = tinycolor(secondaryCol).spin(8).desaturate(2).darken(18).toHexString();
  surfaceCol = tinycolor(surfaceCol).desaturate(40).darken(30).toHexString();
  let backgroundCol = tinycolor(surfaceCol).darken(10).toHexString();

  if (backgroundCol === "#000000") {
    backgroundCol = "#1c1c1c";
  }
  const borderCol = tinycolor(surfaceCol).lighten(15).toHexString();

  let onSurface = tinycolor(primaryColConfirm).spin(-16).desaturate(50).lighten(30).toHexString();
  let onPrimary = tinycolor(surfaceCol).spin(16).desaturate(30).darken(30).toHexString();
  if (onPrimary === "#000000") {
    onPrimary = "#1a1a1a";
  }
  if (onSurface === "#ffffff") {
    onSurface = "#f0f0f0";
  }

  // Contrast Ratio
  const p500vsSurface = tinycolor.readability(surfaceCol, primaryColConfirm).toFixed(2);
  console.log("Primary 500 v Surface Contrast Ratio: ", p500vsSurface);
  pOnSurfSRatio.innerText = p500vsSurface + " : 1";
  if (tinycolor.isReadable(surfaceCol, primaryColConfirm, { level: "AA", size: "large" })) {
    pOnSurfLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    pOnSurfLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(surfaceCol, primaryColConfirm, { level: "AA", size: "small" })) {
    pOnSurfSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    pOnSurfSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const s500vsSurface = tinycolor.readability(surfaceCol, secondaryCol).toFixed(2);
  console.log("Secondary 500 v Surface Contrast Ratio: ", s500vsSurface);
  sOnSurfSRatio.innerText = s500vsSurface + " : 1";
  if (tinycolor.isReadable(surfaceCol, secondaryCol, { level: "AA", size: "large" })) {
    sOnSurfLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    sOnSurfLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(surfaceCol, secondaryCol, { level: "AA", size: "small" })) {
    sOnSurfSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    sOnSurfSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const surfvsSurface = tinycolor.readability(surfaceCol, onSurface).toFixed(2);
  console.log("Surface v Surface Contrast Ratio: ", surfvsSurface);
  onSurfSRatio.innerText = surfvsSurface + " : 1";
  if (tinycolor.isReadable(surfaceCol, onSurface, { level: "AA", size: "large" })) {
    onSurfLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    onSurfLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(surfaceCol, onSurface, { level: "AA", size: "small" })) {
    onSurfSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    onSurfSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const primvsOnPrime = tinycolor.readability(primaryColConfirm, onPrimary).toFixed(2);
  console.log("Text on Primary v Primary Contrast Ratio: ", primvsOnPrime);
  OnPrimeSRatio.innerText = primvsOnPrime + " : 1";
  if (tinycolor.isReadable(primaryColConfirm, onPrimary, { level: "AA", size: "large" })) {
    OnPrimeLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnPrimeLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(primaryColConfirm, onPrimary, { level: "AA", size: "small" })) {
    OnPrimeSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnPrimeSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  const secvsOnPrime = tinycolor.readability(secondaryCol, onPrimary).toFixed(2);
  console.log("Text on Secondary v Secondary Contrast Ratio: ", secvsOnPrime);
  OnSecSRatio.innerText = secvsOnPrime + " : 1";
  if (tinycolor.isReadable(secondaryCol, onPrimary, { level: "AA", size: "large" })) {
    OnSecLCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnSecLCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }
  if (tinycolor.isReadable(secondaryCol, onPrimary, { level: "AA", size: "small" })) {
    OnSecSCR.classList = "pass text-success px-1 fa-regular fa-circle-check";
  } else {
    OnSecSCR.classList = "fail px-1 text-danger fa-regular fa-circle-xmark";
  }

  rootTheme.style.setProperty("--col-bg", backgroundCol);
  rootTheme.style.setProperty("--col-surface", surfaceCol);
  rootTheme.style.setProperty("--col-surface2", borderCol);
  rootTheme.style.setProperty("--col-p-200", primaryLight);
  rootTheme.style.setProperty("--col-p-500", primaryColConfirm);
  rootTheme.style.setProperty("--col-p-700", primaryDark);
  rootTheme.style.setProperty("--col-s-200", secondaryLight);
  rootTheme.style.setProperty("--col-s-500", secondaryCol);
  rootTheme.style.setProperty("--col-s-700", secondaryDark);

  rootTheme.style.setProperty("--col-on-surface", onSurface);
  rootTheme.style.setProperty("--col-on-primary", onPrimary);
  rootTheme.style.setProperty("--col-on-secondary", onPrimary);

  p200Text.innerText = primaryLight;
  p500Text.innerText = primaryColConfirm;
  p700Text.innerText = primaryDark;
  s200Text.innerText = secondaryLight;
  s500Text.innerText = secondaryCol;
  s700Text.innerText = secondaryDark;
  backgroundText.innerText = backgroundCol;
  surfaceText.innerText = surfaceCol;
  borderText.innerText = borderCol;

  onSurfaceText.innerText = onSurface;
  onPrimaryText.innerText = onPrimary;
  onSecondaryText.innerText = onPrimary;
  backgroundInput.value = backgroundCol;
  borderInput.value = borderCol;
  p200Input.value = primaryLight;
  p500Input.value = primaryColConfirm;
  p700Input.value = primaryDark;
  surfaceInput.value = surfaceCol;
  s200Input.value = secondaryLight;
  s500Input.value = secondaryCol;
  s700Input.value = secondaryDark;
}

formRandom.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("\u001b[34;1m -------\u001b[35;1mNEW-RANDOM\u001b[34;1m-------");

  for (let i = 0; i < schemes.length; i++) {
    const colScheme = schemes[i];
    console.log(schemes[i]);

    if (colScheme.checked === true) {
      var colorSchemeConfirm = colScheme.value;
      console.log("colorSchemeConfirm: " + colorSchemeConfirm);
      generateColor(colorSchemeConfirm);
    }
  }
});

formFonts.addEventListener("change", (event) => {
  event.preventDefault();
  for (let i = 0; i < fonts.length; i++) {
    const current = fonts[i];
    if (current.checked === true) {
      let fontFamily = current.value;
      console.log(fontFamily.charAt(0).toUpperCase() + fontFamily.slice(1));
      rootTheme.style.setProperty("--ff", fontFamily);
      fontName.innerText = fontFamily.charAt(0).toUpperCase() + fontFamily.slice(1).replace(/['"]+/g, "");
    }
  }
});
