const START_POINT = {lat: 57.152985, lng: 65.541227};
const START_ZOOM = 13;
const LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const MARKERS = [{
  location: {
    "lat": 57.155255,
    "lng": 65.443697
  },
  "label": "24/7",
  "id": "avtoremontnaya"
}, {
  location: {
    "lat": 57.146296,
    "lng": 65.55604
  },
  "label": "schedule",
  "id": "gorichy"
}];
const warehouseMap = document.querySelector('.warehouse__map');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const map = new L.map(warehouseMap);

const schedulePin = L.icon({
  iconUrl: './assets/images/svg/schedule-pin.svg'
});

const roundTheClockPin = L.icon({
  iconUrl: './assets/images/svg/round-the-clock-pin.svg'
});

const makePin = (label) => {
  if (label === '24/7') {
    return roundTheClockPin;
  } else if (label ===  'schedule') {
    return schedulePin;
  }
};

const findOpenPopup = () => document.querySelector('.popup--open');

const addMarker = (marker) => {
  const mark = new L.Marker(marker.location, {
    icon: makePin(marker.label)
  });
  mark.addEventListener('click', () => {
    const openPopup = findOpenPopup();
    const target = document.querySelector(`#${marker.id}`);
    if (target !== openPopup) {
      if (openPopup !== null) {
        openPopup.classList.remove('popup--open');
      }
      target.classList.add('popup--open');
    }
  })
  mark.addTo(map);
};

const buttonClickHandler = () => findOpenPopup().classList.remove('popup--open');

const initMap = () => {
  map.on('load', () => {
    map.addLayer(new L.TileLayer(LAYER_URL));
  }).setView(START_POINT, START_ZOOM);
  MARKERS.forEach((marker) => addMarker(marker));
  popupCloseButtons.forEach((button) => button.addEventListener('click', buttonClickHandler));
};

initMap();