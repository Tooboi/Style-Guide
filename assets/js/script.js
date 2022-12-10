const form = document.getElementById('color-form');
const colorInput = document.getElementById('color-input');
const body = document.body;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const color = colorInput.value;

  // Update the CSS variable
  body.style.setProperty('--bg-color', color);
});