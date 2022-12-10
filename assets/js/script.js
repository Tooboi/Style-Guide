const form = document.getElementById('hexCodeForm');
const backgroundInput = document.getElementById('backgroundInput');
const surfaceInput = document.getElementById('surfaceInput');
const borderInput = document.getElementById('borderInput');
const p200Input = document.getElementById('p200Input');
const p500Input = document.getElementById('p500Input');
const p700Input = document.getElementById('p700Input');
const s200Input = document.getElementById('s200Input');
const s500Input = document.getElementById('s500Input');
const s700Input = document.getElementById('s700Input');
const onBackgroundInput = document.getElementById('onBackgroundInput');
const onSurfaceInput = document.getElementById('onSurfaceInput');
const onPrimaryInput = document.getElementById('onPrimaryInput');
const onSecondaryInput = document.getElementById('onSecondaryInput');
const rootTheme = document.querySelector(':root')


console.log(backgroundInput);

form.addEventListener('submit', (event) => {
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

  rootTheme.style.setProperty('--col-bg', background)
  rootTheme.style.setProperty('--col-surface', surface)
  rootTheme.style.setProperty('--col-surface2', border)
  rootTheme.style.setProperty('--col-p-200', p200)
  rootTheme.style.setProperty('--col-p-500', p500)
  rootTheme.style.setProperty('--col-p-700', p700)
  rootTheme.style.setProperty('--col-s-200', s200)
  rootTheme.style.setProperty('--col-s-500', s500)
  rootTheme.style.setProperty('--col-s-700', s700)
  rootTheme.style.setProperty('--col-on-bg', onBackground)
  rootTheme.style.setProperty('--col-on-surface', onSurface)
  rootTheme.style.setProperty('--col-on-primary', onPrimary)
  rootTheme.style.setProperty('--col-on-secondary', onSecondary)
});