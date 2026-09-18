// Selección de elementos
const greenSlider = document.getElementById('green-slider');
const redSlider = document.getElementById('red-slider');

const greenBlock = document.getElementById('green-block');
const redBlock = document.getElementById('red-block');

const greenHex = document.getElementById('green-hex');
const redHex = document.getElementById('red-hex');

// Convierte un número a formato Hexadecimal de 2 dígitos
function toHex(value) {
  const hex = parseInt(value, 10).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

// Actualiza solo la intensidad de VERDE (rgb(0, valor, 0))
function updateGreen() {
  const g = greenSlider.value;
  const color = `rgb(0, ${g}, 0)`;
  
  greenBlock.style.backgroundColor = color;
  greenHex.textContent = `#00${toHex(g)}00`.toUpperCase();
}

// Actualiza solo la intensidad de ROJO (rgb(valor, 0, 0))
function updateRed() {
  const r = redSlider.value;
  const color = `rgb(${r}, 0, 0)`;
  
  redBlock.style.backgroundColor = color;
  redHex.textContent = `#${toHex(r)}0000`.toUpperCase();
}

// Escuchadores para actualización continua al mover el slider
greenSlider.addEventListener('input', updateGreen);
redSlider.addEventListener('input', updateRed);

// Inicializar estado inicial
updateGreen();
updateRed();