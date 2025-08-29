// script part
// hart button click
const hartButtons = document.querySelectorAll('#btn-heart');
for (let i = 0; i < hartButtons.length; i++) {
  hartButtons[i].addEventListener('click', function() {
    let hartCounter = document.getElementById('heart-count');
    hartCounter.innerText = parseInt(hartCounter.innerText) + 1;
  });
}