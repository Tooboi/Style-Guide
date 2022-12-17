

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
  const onBackgroundInput = document.getElementById("onBackgroundInput");
  const onSurfaceInput = document.getElementById("onSurfaceInput");
  const onPrimaryInput = document.getElementById("onPrimaryInput");
  const onSecondaryInput = document.getElementById("onSecondaryInput");
  const rootTheme = document.querySelector(":root");

  // Color scheme options
  const schAnalogous = document.getElementById('analogous');
  const schComplement = document.getElementById('splitcomplement');
  const schTriad = document.getElementById('triad');
  const schTetrad = document.getElementById('tetrad');

  // Forms
  const formLayout = document.getElementById("formLayout");
  const formRandom = document.getElementById("randomize");
  const formFonts = document.getElementById("formFonts");

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
  const schemes = [schAnalogous, schComplement, schTriad, schTetrad]
  const fonts = [fraunces, montserrat, nunito, poppins, quicksand, roboto];



  formLayout.addEventListener("change", (event) => {
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

    let secondaryCol = splitComp[1].toHexString()
    let surfaceCol = splitComp[2].toHexString();

    console.log("Secondary Color: " + secondaryCol);
    console.log("Surface Color: " + surfaceCol);

    // Make darker and lighter version
    primaryLight = tinycolor(primaryColConfirm).desaturate(20).lighten(15).toHexString();
    primaryDark = tinycolor(primaryColConfirm).desaturate(10).darken(15).toHexString();
    const secondaryLight = tinycolor(secondaryCol).desaturate(20).lighten(15).toHexString();
    const secondaryDark = tinycolor(secondaryCol).desaturate(10).darken(15).toHexString();
    surfaceCol = tinycolor(surfaceCol).desaturate(40).darken(30).toHexString();
    const backgroundCol = tinycolor(surfaceCol).darken(10).toHexString();
    const borderCol = tinycolor(surfaceCol).lighten(15).toHexString();

    rootTheme.style.setProperty("--col-bg", backgroundCol);
    rootTheme.style.setProperty("--col-surface", surfaceCol);
    rootTheme.style.setProperty("--col-surface2", borderCol);
    rootTheme.style.setProperty("--col-p-200", primaryLight);
    rootTheme.style.setProperty("--col-p-500", primaryColConfirm);
    rootTheme.style.setProperty("--col-p-700", primaryDark);
    rootTheme.style.setProperty("--col-s-200", secondaryLight);
    rootTheme.style.setProperty("--col-s-500", secondaryCol);
    rootTheme.style.setProperty("--col-s-700", secondaryDark);
    // rootTheme.style.setProperty("--col-on-bg", onBackground);
    // rootTheme.style.setProperty("--col-on-surface", onSurface);
    // rootTheme.style.setProperty("--col-on-primary", onPrimary);
    // rootTheme.style.setProperty("--col-on-secondary", onSecondary);

    // p200Text.innerText = primaryLight;
    // p500Text.innerText = primaryColConfirm;
    // p700Text.innerText = primaryDark;
    // s200Text.innerText = secondaryLight;
    // s500Text.innerText = secondaryCol;
    // s700Text.innerText = secondaryDark;
    // backgroundText.innerText = backgroundCol;
    // surfaceText.innerText = surfaceCol;
    // borderText.innerText = borderCol;
    // onBackgroundText.innerText = onBackground;
    // onSurfaceText.innerText = onSurface;
    // onPrimaryText.innerText = onPrimary;
    // onSecondaryText.innerText = onSecondary;
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