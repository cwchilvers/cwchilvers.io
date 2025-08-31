const images = JSON.parse(document.getElementById('images-json').textContent);
const imgEl = document.getElementById('photo');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const counterEl = document.getElementById('counter');
let i = 0;

function render() {
    imgEl.src = images[i];
    prevBtn.disabled = (i === 0);
    nextBtn.disabled = (i === images.length - 1);
    counterEl.textContent = `image ${i + 1} / ${images.length}`;
}

prevBtn.onclick = () => { if (i > 0) { i--; render(); } };
nextBtn.onclick = () => { if (i < images.length - 1) { i++; render(); } };

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && i > 0) {
    i--;
    render();
  }
  if (e.key === 'ArrowRight' && i < images.length - 1) {
    i++;
    render();
  }
});

render();
