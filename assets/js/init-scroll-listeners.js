const header = document.querySelector('.header');
const upButton = document.querySelector('.up-button');
let oldValue;

const upButtonClickHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const setHeaderState = (value) => {
  header.style.transform = `translateY(${value})`;
};

const setUpButtonState = (value) => {
  upButton.style.display = value;
};

const initScrollListeners = () => {
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
  upButton.addEventListener('click', upButtonClickHandler)
};

initScrollListeners();

