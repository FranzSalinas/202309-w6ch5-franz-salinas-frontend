export const serverUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:2700'
    : 'http://franzsalinas-202309-w6ch5-franz-salinas.onrender.com';

console.log(serverUrl);
