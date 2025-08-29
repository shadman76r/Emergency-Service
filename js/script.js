// script part
// hart button click
const hartButtons = document.querySelectorAll('#btn-heart');
for (let i = 0; i < hartButtons.length; i++) {
  hartButtons[i].addEventListener('click', function(event) {
    event.preventDefault();
    const hartCounter = document.getElementById('heart-count');
    hartCounter.innerText = parseInt(hartCounter.innerText) + 1;
  });
}
// copy button click
const copyButton = document.querySelectorAll('#btn-copy');
for(let i = 0; i< copyButton.length; i++){
    copyButton[i].addEventListener('click', function(event){
      event.preventDefault();
        const copyCount = document.getElementById('copy-count');
        copyCount.innerText = parseInt(copyCount.innerText) + 1;
        const cart = this.closest('#card');
        const numberText = cart.querySelector('#number').innerText.trim();
        // now copy to the clip board
        navigator.clipboard.writeText(numberText).then(()=>{
            console.log('Copied: ' + numberText);
        })

    })
}
// call part 

const callButtons = document.querySelectorAll('#btn-call');
callButtons.forEach((button) => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const card = this.closest('#card');
    const title = card.querySelector('#title').innerText;
    const number = card.querySelector('#number').innerText;

    const coin = document.getElementById('coin').innerText;

    if (coin == 0) {
      alert(" You don't have enough coin if you want to call you must have 20 coins ");
    } 
    else {
      document.getElementById('coin').innerText = document.getElementById('coin').innerText - 20;
      const historyContainer = document.getElementById('call-history-container');
      const card = document.createElement('div');
      card.className =
        "bg-[#FAFAFA] mt-5 p-4 rounded-md flex justify-between items-center";

      card.innerHTML = `
        <div>
          <h1 class="text-[0.875rem] font-bold">${title}</h1>
          <p class="text-[0.875rem] text-[#5C5C5C] font-normal">${number}</p>
        </div>
        <p class="text-[0.875rem]">${new Date().toLocaleTimeString("en-US", {
          our12: true,
        })}
        </p>`;
      historyContainer.appendChild(card);
      alert(` Calling ${title}  ${number}`);
    }
  });
});

// clear part
const clearButton = document.getElementById('btn-clear');
clearButton.addEventListener('click', function () {
  const historyContainer = document.getElementById('call-history-container');
  historyContainer.innerHTML = '';
});
