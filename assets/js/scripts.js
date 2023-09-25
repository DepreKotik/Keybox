const questionsItems = document.querySelectorAll('.questions__item');
const header = document.querySelector('.header');
const upButton = document.querySelector('.up-button');
let oldValue;

questionsItems.forEach((element) => {
  element.addEventListener('click', (event) => {
    if(event.target.classList.contains('questions__button')) {
      element.querySelector('.questions__answer').classList.toggle('questions__item--open');
      element.querySelector('.questions__button').classList.toggle('questions__button--open');
    }
  })
});

upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
})

const setHeaderState = (value) => {
  header.style.transform = `translateY(${value})`;
};

const setUpButtonState = (value) => {
  upButton.style.display = value;
};

window.addEventListener('scroll', () => {
  let newValue = window.pageYOffset;
  if (oldValue > newValue || newValue === 0) {
    setHeaderState('0')
  } else {
    setHeaderState('-100%')
  }
  if (newValue >= 2100) {
    setUpButtonState('block')
  } else {
    setUpButtonState('none')
  }
  oldValue = newValue;
});