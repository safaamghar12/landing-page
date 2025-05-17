const cols = document.querySelectorAll('#myRow .col');
cols.forEach((col, index) => {
  if (index % 2 === 0) {
    col.classList.add('color1');
  } else {
    col.classList.add('color2');
  }
});