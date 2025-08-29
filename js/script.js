// script part
// hart button click
const hartButtons = document.querySelectorAll('#btn-heart');
for (let i = 0; i < hartButtons.length; i++) {
  hartButtons[i].addEventListener('click', function() {
    let hartCounter = document.getElementById('heart-count');
    hartCounter.innerText = parseInt(hartCounter.innerText) + 1;
  });
}
// copy button click

const copyButton = document.querySelectorAll('#btn-copy');
for(let i = 0; i<copyButton.length; i++){
    copyButton[i].addEventListener('click', function(){
        let copyCount = document.getElementById('copy-count');
        copyCount.innerText = parseInt(copyCount.innerText) + 1;
        const cart = this.closest('#card');
        const numberText = cart.querySelector('#number').innerText.trim();
        // now copy to the clip board
        navigator.clipboard.writeText(numberText).then(()=>{
            console.log('Copied: ' + numberText);
        })

    })
}
