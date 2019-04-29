const GeolcationSimulation = require('./geolocation-simulator');

// var coordinates = [
//   { latitude: 42.347856, longitude: -71.073668 },
//   { latitude: 42.347872, longitude: -71.068561 },
//   { latitude: 42.347555, longitude: -71.065986 },
// ];

const taoyuanToTaipeiCoordinates = [
  { latitude: 24.923313, longitude: 121.253375 },
  { latitude: 24.95818, longitude: 121.357745 },
  { latitude: 25.017927, longitude: 121.462115 },
  { latitude: 25.052767, longitude: 121.593951 },
  { latitude: 25.137336, longitude: 121.599444 },
];

const taoyuanToTaipeiCoordinates2 = [
  { latitude: 24.903313, longitude: 121.203375 },
  { latitude: 24.95818, longitude: 121.307745 },
  { latitude: 25.017927, longitude: 121.402115 },
  { latitude: 25.052767, longitude: 121.503951 },
  { latitude: 25.137336, longitude: 121.599444 },
];

const taoyuanToTaipeiCoordinates3 = [
  { latitude: 24.953313, longitude: 121.803375 },
  { latitude: 24.99818, longitude: 121.907745 },
  { latitude: 25.027927, longitude: 121.602115 },
  { latitude: 25.052767, longitude: 121.803951 },
  { latitude: 25.237336, longitude: 121.699444 },
];

const taoyuanToTaipeiCoordinates4 = [
  { latitude: 24.753313, longitude: 121.853375 },
  { latitude: 24.79818, longitude: 121.907745 },
  { latitude: 25.227927, longitude: 121.9202115 },
  { latitude: 25.052767, longitude: 121.953951 },
  { latitude: 25.237336, longitude: 121.999444 },
];
const yilanToTaipeiCoordinates = [
  { latitude: 24.798711, longitude: 121.742266 },
  { latitude: 24.903385, longitude: 121.775225 },
  { latitude: 25.007971, longitude: 121.775225 },
  { latitude: 25.077646, longitude: 121.632403 },
  { latitude: 25.112469, longitude: 121.544512 },
];

const yilanToTaipeiCoordinates2 = [
  { latitude: 24.738711, longitude: 121.732266 },
  { latitude: 24.933385, longitude: 121.735225 },
  { latitude: 25.007971, longitude: 121.795225 },
  { latitude: 25.077646, longitude: 121.632403 },
  { latitude: 25.112469, longitude: 121.584512 },
];

const taoyuanSimulator = GeolcationSimulation({
  coords: taoyuanToTaipeiCoordinates,
  speed: 1000,
});

const taoyuanSimulator2 = GeolcationSimulation({
  coords: taoyuanToTaipeiCoordinates2,
  speed: 1000,
});

const taoyuanSimulator3 = GeolcationSimulation({
  coords: taoyuanToTaipeiCoordinates3,
  speed: 1000,
});

const taoyuanSimulator4 = GeolcationSimulation({
  coords: taoyuanToTaipeiCoordinates3,
  speed: 1000,
});

const yilanSimulator = GeolcationSimulation({
  coords: taoyuanToTaipeiCoordinates4,
  speed: 1000,
});

const yilanSimulator2 = GeolcationSimulation({
  coords: yilanToTaipeiCoordinates2,
  speed: 1000,
});

module.exports = {
  taoyuanSimulator,
  taoyuanSimulator2,
  taoyuanSimulator3,
  taoyuanSimulator4,
  yilanSimulator,
  yilanSimulator2,
};
