const warehouseButtonMap = document.querySelector('.warehouse__button--map');
const warehouseButtonList = document.querySelector('.warehouse__button--list');
const warehouseMap = document.querySelector('.warehouse__map');
const warehouseList = document.querySelector('.warehouse__list');

const openList = () => {
  warehouseMap.classList.remove('warehouse__map--open');
  warehouseList.classList.add('warehouse__list--open');
};

const openMap = () => {
  warehouseList.classList.remove('warehouse__list--open');
  warehouseMap.classList.add('warehouse__map--open');
};

const isActive = (target) => target.classList.contains('warehouse__button--active');

const warehouseButtonMapHandler = ({target}) => {
  if (!isActive(target)) {
      openMap();
      warehouseButtonMap.classList.add('warehouse__button--active');
      warehouseButtonList.classList.remove('warehouse__button--active');
  }
}; 

const warehouseButtonListHandler = ({target}) => {
  if (!isActive(target)) {
      openList();
      warehouseButtonList.classList.add('warehouse__button--active');
      warehouseButtonMap.classList.remove('warehouse__button--active');
  }
}; 

const toggleWarehouseState = () => {
  warehouseButtonMap.addEventListener('click', warehouseButtonMapHandler);
  warehouseButtonList.addEventListener('click', warehouseButtonListHandler);
}

export {toggleWarehouseState};