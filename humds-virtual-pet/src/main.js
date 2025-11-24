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
  },
  {
    name: "Placeholder",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 10,
    unlocked: true
  },
  {
    name: "Placeholder",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 10,
    unlocked: true
  },
  {
    name: "Placeholder",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 10,
    unlocked: true
  },
  {
    name: "Placeholder",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 10,
    unlocked: true
  },
  {
    name: "Placeholder",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 10,
    unlocked: true
  },
  {
    name: "Placeholder",
    hunger: 10,
    energy: 10,
    level: 0,
    happiness: 10,
    unlocked: true
  }
]


const foodoptions = [
  {
    name: "Placeholder",
    fill: 10, 
  }, 
  {
    name: "Placeholder",
    fill: 20, 
  }, 
  {
    name: "Placeholder",
    fill: 30, 
  }, 
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
  petsDiv.insertAdjacentHTML(
  ("afterbegin")
    `<div class="pet"></div>
    <h2>${pet.name}</h2>
    <p><span>Hunger: ${pet.hunger}</span></p>
    <p><span>Energy: ${pet.energy}</span></p>
    <p><span>Level: ${pet.level}</span></p>
    <p><span>Happiness: ${pet.happiness}</span></p>
    `
  )};

const viewpets= document.querySelector(".viewpets");
viewpets.addEventListener("click", () => {
  if (pets.unlocked === true){
    pets.forEach(pet => {insertpet(pet)});
  }
});

const maxhunger = pet.hunger; 
const stats = document.querySelector(".stats");
function updatestats(pet){
  insertpet.insertAdjacentHTML(=
    ('afterbegin')
    `<div class= stats></div>
    <h3><span>Hunger: ${pet.hunger}</span></h3></h3>
    <h3><span>Hunger: ${pet.energy}</span></h3></h3>
    <h3><span>Hunger: ${pet.level}</span></h3></h3>
    <h3><span>Hunger: ${pet.happiness}</span></h3></h3>`
  )
}

const container = document.querySelector("container");

const actions = document.querySelectorAll(".actions");
actions.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.id;
    updatestats(selectedpet);
    if (action === "feed"); 
  })
})

const save = document.querySelector("#save");
save.addEventListener("click", () => {
  localStorage.setItem("pet","mypet")
})

const reset = document.querySelector('#reset')
reset.addEventListener("click", () => {
  localStorage.clear();
})

