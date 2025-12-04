import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const pets = [
  {
    name: "Pichu",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,

  },
  {
    name: "Wooper",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
  },
  {
    name: "Togepi",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
  },
  {
    name: "Cleffa",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
  },
  {
    name: "Azurill",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
  },
  {
    name: "Wynaut",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
  },
  {
    name: "Munchlax",
    hunger: 10,
    energy: 10,
    level: 0,
    happiness: 50,
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
const container = document.querySelector("container");

/* THEMES */
document.querySelectorAll(".colorselector").forEach(btn =>
  btn.addEventListener("click", () => body.className = btn.id)
);

document.querySelectorAll(".textselector").forEach(btn =>
  btn.addEventListener("click", () => body.className = btn.id)
);


/*SHOW PETS*/
const interfaceBox = document.querySelector(".interface");
let originalUI = interfaceBox.innerHTML;

backtogame();

function backtogame() {
  const viewPetsBtn = document.querySelector(".pets button");
  viewPetsBtn.addEventListener("click", showPetSelection);

}

function showPetSelection() {
  interfaceBox.innerHTML = `
    <div class="pet-select-screen">
      <h1>Select Your Pet</h1>
      <div class="pet-list">
        ${pets.map((pet, index) => `
          <button class="pet-option" data-index="${index}">
            ${pet.name}
          </button>
        `).join("")}
      </div>
      <button id="backToGame">Back</button>
    </div>
  `;
  attachPetScreenEvents();
}

function attachPetScreenEvents() {
  document.querySelectorAll(".pet-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      selectPet(index);
    });
  });

  document.getElementById("backToGame").addEventListener("click", () => {
    restoreGameUI();
  });
}

function restoreGameUI() {
  interfaceBox.innerHTML = originalUI;
  backtogame(); 
}

function selectPet(index) {
  const chosen = pets[index];
  console.log("Selected:", chosen.name);
  restoreGameUI();
}

/* const petsDiv = document.querySelector(".pets");

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

const actions = document.querySelectorAll(".actions");
actions.forEach(button => {
  button.addEventListener("click", () => {
    updatestats(selectedpet);
  })
})

const maxhunger = pet.hunger; 
const stats = document.querySelector(".stats");
function updatestats(pet){
  if (action ===  "feed"){
    const fullness = pet.hunger + selectedfood.fill;
  }
  insertpet.insertAdjacentHTML(
    ('afterbegin')
    `<div class= stats></div>
    <h3><span>Hunger: ${pet.hunger}</span></h3></h3>
    <h3><span>Hunger: ${pet.energy}</span></h3></h3>
    <h3><span>Hunger: ${pet.level}</span></h3></h3>
    <h3><span>Hunger: ${pet.happiness}</span></h3></h3>`
  )
}


const save = document.querySelector("#save");
save.addEventListener("click", () => {
  localStorage.setItem("pet","mypet")
})

const reset = document.querySelector('#reset')
reset.addEventListener("click", () => {
  localStorage.clear();
})


function updateimage(){
  while (selectedpet.hunger <= selectedpet.hunger * 0.9){
    
  }
  if (selectedpet.hunger <= selectedpet.hunger*0.3 || selectedpet.happiness <= selectedpet.happiness * 0.3){


  }
}

const seomthign= document.querySelector(".viewpets");
viewpets.addEventListener("click", () => {
  if (pets.unlocked === true){
    pets.forEach(pet => {insertpet(pet)});
  }
}); */