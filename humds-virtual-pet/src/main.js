import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");
const warmBtn = document.getElementById("warm");

const body = document.body;

lightBtn.addEventListener("click", () => {
  body.classList.remove("darkmode");
  body.classList.add("lightmode");
});

darkBtn.addEventListener("click", () => {
  body.classList.remove("lightmode");
  body.classList.add("darkmode");
});

warmBtn.addEventListener("click", () => {
  element.classList.remove(...element.classList);
  body.classList.add("warm");
});
