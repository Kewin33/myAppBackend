import CryptoJS from 'crypto-js';
import process from 'node:process';

const secretKey = "topSecretKeyWallah"; // Leerzeichen entfernt


async function test() {
  let date = Date.now().toString();
  date = CryptoJS.AES.encrypt(date, secretKey);
  let response = await fetch("http://localhost:3000/chess-map/getFriendsLocation",{
    method: 'POST',
    headers: {authorization: date},
    body: "idk"
  })

  response = await response.json();
  console.log(response);
}

console.log(secretKey);
test();