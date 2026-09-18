// Selección de elementos del DOM - Sliders
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');

// Selección de elementos del DOM - Inputs Numéricos
const redNum = document.getElementById('red-num');
const greenNum = document.getElementById('green-num');
const blueNum = document.getElementById('blue-num');

// Selector de color e interfaces
const colorPicker = document.getElementById('color-picker');
const preview = document.getElementById('preview');
const rgbValue = document.getElementById('rgb-value');
const hexValue = document.getElementById('hex-value');

// Limitar rango numérico entre 0 y 255
function clampValue(val) {
  if (val === '' || isNaN(val)) return 0;
  return Math.min(255, Math.max(0, parseInt(val, 10)));
}

// Convertir canal a Hexadecimal de dos dígitos
function componentToHex(c) {
  const hex = parseInt(c, 10).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

// Actualización Global de la Aplicación
function updateColor(r, g, b) {
  r = clampValue(r);
  g = clampValue(g);
  b = clampValue(b);

  // Sincronizar Sliders
  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  // Sincronizar Cajas Numéricas
  redNum.value = r;
  greenNum.value = g;
  blueNum.value = b;

  // Actualizar la muestra de color
  const rgbText = `rgb(${r}, ${g}, ${b})`;
  preview.style.backgroundColor = rgbText;
  rgbValue.textContent = rgbText;

  // Actualizar HEX y Color Picker
  const hexLower = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  hexValue.textContent = hexLower.toUpperCase();
  colorPicker.value = hexLower;
}

// Controladores de eventos
function handleSliderInput() {
  updateColor(redInput.value, greenInput.value, blueInput.value);
}

function handleNumberInput() {
  updateColor(redNum.value, greenNum.value, blueNum.value);
}

function handleColorPickerInput() {
  const hex = colorPicker.value;
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  updateColor(r, g, b);
}

// Copiar texto al portapapeles
function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text);
}

// Event Listeners
redInput.addEventListener('input', handleSliderInput);
greenInput.addEventListener('input', handleSliderInput);
blueInput.addEventListener('input', handleSliderInput);

redNum.addEventListener('input', handleNumberInput);
greenNum.addEventListener('input', handleNumberInput);
blueNum.addEventListener('input', handleNumberInput);

colorPicker.addEventListener('input', handleColorPickerInput);

// Estado inicial
updateColor(255, 0, 0);