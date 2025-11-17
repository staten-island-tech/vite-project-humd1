import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const pets = [
  {
    name: "Placeholder",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 10,
    unlocked: true
  }
]

const body = document.body;

document.querySelectorAll(".colorselector").forEach(btn =>
  btn.addEventListener("click", () => body.className = btn.id)
);


document.querySelectorAll(".textselector").forEach(btn =>
  btn.addEventListener("click", () => body.className = btn.id)
);


const petsDiv = document.querySelector(".pets");

function insertpet(pet){
  petsDiv.insertAdjacentHTML
  ("afterbegin")
    `<div class="pet"></div>
    <h2>${pet.name}</h2>
    <p><span>Hunger: ${pet.hunger}</span></p>
    <p><span>Energy: ${pet.energy}</span></p>
    <p><span>Level: ${pet.level}</span></p>
    <p><span>Happiness: ${pet.happiness}</span></p>
    `
}

const viewpets= document.querySelector(".viewpets");

viewpets.addEventListener("click", () => {
  pets.forEach(insertpet);
}
);