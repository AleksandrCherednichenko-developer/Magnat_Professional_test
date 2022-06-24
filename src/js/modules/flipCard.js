let flipCards = document.querySelectorAll('.virtual__tour .flip-container')

flipCards.forEach(card => {
   card.addEventListener('click', () => {
      card.classList.toggle('active')
   })
})
