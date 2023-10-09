const formFiltersWrapper = document.querySelector('.form__filters-wrapper');
const formButtonOpenFilters = document.querySelector('.form__button--open-filters');
const formCloseButton = document.querySelector('.form__close-button');
const formButtonReset = document.querySelector('.form__button--reset');
const form = document.querySelector('.form');
const formFilterItem = document.querySelector('#form__filter-item').content.querySelector('.form__filter-item');
const formFilterList = document.querySelector('.form__filter-list');
const fieldsetLabels = document.querySelectorAll('.fieldset__label');

form.addEventListener('change', () => {
  formButtonReset.classList.remove('visually-hidden');
});

formButtonReset.addEventListener('click', () => {
  formButtonReset.classList.add('visually-hidden');
});

formFiltersWrapper.addEventListener('click', ({target}) => {
  const fieldsetOpen = document.querySelector('.fieldset--open');
  if (target.closest('.fieldset__title') && target !== fieldsetOpen){
    if (fieldsetOpen !== null) {
      fieldsetOpen.classList.remove('fieldset--open');
    }
    target.classList.add('fieldset--open');
  } else {
    target.classList.remove('fieldset--open');
  };
});

formButtonOpenFilters.addEventListener('click', () => {
  formFiltersWrapper.classList.add('form__filters-wrapper--open');
});

formCloseButton.addEventListener('click', () => {
  formFiltersWrapper.classList.remove('form__filters-wrapper--open');
})