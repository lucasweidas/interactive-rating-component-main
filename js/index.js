(() => {
  const form = document.querySelector('.rating__form');

  form.addEventListener('submit', evt => {
    evt.preventDefault();
    const ratingRadios = document.querySelectorAll('.rating__radio');

    ratingRadios.forEach(radio => {
      if (radio.checked) {
        const ratingCard = document.querySelector('.rating');
        const thanksCard = document.querySelector('.thanks');
        const rated = document.querySelector('.thanks__rated');
        const label = document.querySelector(`#${radio.id} + .rating__label`);

        rated.innerText = label.textContent;
        ratingCard.classList.add('hidden');
        thanksCard.classList.remove('hidden');
      }
    });
  });
})();
