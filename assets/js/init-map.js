import {getData} from './api.js';

const URL = 'https://my-json-server.typicode.com/DepreKotik/json-bd';
const START_POINT = {lat: 57.152985, lng: 65.541227};
const START_ZOOM = 13;
const LAYER_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const warehouseMap = document.querySelector('.warehouse__map');
const map = new L.map(warehouseMap);

const initMap = () => {
  map.on('load', () => {
    // getData(URL, onSuccess);
    map.addLayer(new L.TileLayer(LAYER_URL));
  }).setView(START_POINT, START_ZOOM);
};

export {initMap};
