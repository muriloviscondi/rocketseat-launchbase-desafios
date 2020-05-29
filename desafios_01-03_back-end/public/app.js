const modalOverlay = document.querySelector('.modal-overlay');
const cardPrices = document.querySelectorAll('.card__price');

for (let cardPrice of cardPrices) {
  const pageId = cardPrice.getAttribute('id')
  cardPrice.addEventListener("click", function(){
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`;
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
})