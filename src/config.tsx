export const serverUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:2700'
    : 'https://franzsalinas-202309-w8ch2-franz-salinas.onrender.com';

console.log(serverUrl);
