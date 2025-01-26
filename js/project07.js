let display = document.getElementById('calc-display');
let memory = 0;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value) || '';
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'sqrt') {
      try {
        display.value = Math.sqrt(eval(display.value)) || '';
      } catch {
        display.value = 'Error';
      }
    } else if (value === '%') {
      try {
        display.value = eval(display.value) / 100 || '';
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'MR') {
      display.value = memory;
    } else if (value === 'M+') {
      try {
        memory = eval(display.value) || 0;
      } catch {
        memory = 0;
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});
