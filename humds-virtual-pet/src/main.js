import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const pets = [
  {
    name: "Pichu",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
    images: {
      happy: "/images/pichu_happy.png",
      sad: "/images/pichu_sad.png"
    }
  },
  {
    name: "Wooper",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
    images: {
      happy: "/images/wooper_happy.png",
      sad: "/images/wooper_sad.png"
    }
  },
  {
    name: "Togepi",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
    images: {
      happy: "/images/togepi_happy.png",
      sad: "/images/togepi_sad.png"

    }
  },
  {
    name: "Cleffa",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
    images: {
      happy: "/images/cleffa_happy.png",
      sad: "/images/cleffa_sad.png"
    }
  },
  {
    name: "Azurill",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
    images: {
      happy: "/images/azurill_happy.png",
      sad: "/images/azurill_sad.png"
    }
  },
  {
    name: "Wynaut",
    hunger: 10,
    energy: 10,
    level: 10,
    happiness: 50,
    images: {
      happy: "/images/wynaut_happy.png",
      sad: "/images/wynaut_sad.png"
    }
  },
  {
    name: "Munchlax",
    hunger: 10,
    energy: 10,
    level: 0,
    happiness: 50,
    images: {
      happy: "/images/munchlax_happy.png",
      sad: "/images/munchlax_sad.png"
    }
  },
];

let selectedpet = null;

function startgame() {
  createpopup();
  closebutton();
  loadallpets();
  decreasestats();
  petbutton();
  themebuttons();
  actions();
  saveandreset();
}

startgame();

function createpopup() {
  const popup = document.createElement("div");
  popup.id = "popupbox";
  popup.className = "popup";
  popup.style.display = "none";

  popup.insertAdjacentHTML('beforeend', `
    <div class="petcontent">
      <h2>Select Your Pet</h2>
      <div class="petoptions"></div>
      <button id="closepetpopup">Close</button>
    </div>
  `);
  document.body.appendChild(popup);
}

function closebutton() {
  document.addEventListener("click", (e) => {
    if (e.target.id === "closepetpopup") closepopup();
  });
}

function petbutton() {
  const btn = document.querySelector(".pets button");
  if (btn) btn.addEventListener("click", openpopup);
}

function themebuttons() {
  document.querySelectorAll(".colorselector").forEach(btn =>
    btn.addEventListener("click", () => {
      document.body.className = btn.id;
    })
  );
}

function actions() {
  addaction("feed", () => { selectedpet.hunger = Math.max(0, selectedpet.hunger-10); });
  addaction("play", () => { selectedpet.happiness = Math.min(100, selectedpet.happiness+10); });
  addaction("sleep", () => { selectedpet.energy = Math.min(100, selectedpet.energy+10); });
}

function addaction(id, update) {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.addEventListener("click", () => {
    if(!selectedpet) return;
    update();
    updatepet();
  });
}

function saveandreset() {
  const savebtn = document.getElementById("save");
  const resetbtn = document.getElementById("reset");
  if(savebtn) savebtn.addEventListener("click", saveallpets);
  if(resetbtn) resetbtn.addEventListener("click", resetallpets);
}

function openpopup() {
  const popup = document.getElementById("popupbox");
  const area = popup.querySelector(".petoptions");
  area.innerHTML = "";

  pets.forEach((pet, i) => {
    area.insertAdjacentHTML('beforeend', 
      `<button class="petoption" data-index="${i}">${pet.name}</button>`
    );
  });

  area.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => selectpet(btn.dataset.index));
  });
  popup.style.display = "flex";
}

function closepopup() {
  document.getElementById("popupbox").style.display = "none";
}

function selectpet(index) {
  selectedpet = pets[index];
  closepopup();
  updatepet();
}

function updatepet() {
  if (!selectedpet) return;

  const img = document.querySelector(".petwindow img");

  if (((selectedpet.happiness+(100-selectedpet.hunger)+selectedpet.energy)/3)> 60) {
    img.src = selectedpet.images.happy;
  } else {
    img.src = selectedpet.images.sad;
  }

  img.alt = selectedpet.name;

  document.getElementById("hunger").textContent = Math.round(selectedpet.hunger);
  document.getElementById("happiness").textContent = Math.round(selectedpet.happiness);
  document.getElementById("energy").textContent = Math.round(selectedpet.energy);
}

function saveallpets() {
  localStorage.setItem("savedpets", JSON.stringify(pets));
  alert("all pets saved!");
}

function loadallpets() {
  const saved = JSON.parse(localStorage.getItem("savedpets"));
  if(!saved) return;

  saved.forEach((p, i) => {
    pets[i] = {...pets[i], ...p};
  });

  if(selectedpet) {
    selectedpet = pets.find(p => p.name === selectedpet.name);
    updatepet();
  }
}

function resetallpets() {
  localStorage.removeItem("savedpets");
  pets.forEach(p => { p.hunger=50; p.happiness=50; p.energy=50; });
  selectedpet = null;
  const img = document.querySelector(".petwindow img");
  if(img) img.src = "";
  document.getElementById("hunger").textContent = "";
  document.getElementById("happiness").textContent = "";
  document.getElementById("energy").textContent = "";
}

function decreasestats() {
  setInterval(() => {
    pets.forEach(pet => {
      pet.hunger = Math.min(100, pet.hunger+1);
      pet.energy = Math.max(0, pet.energy-1);
      pet.happiness = Math.max(0, pet.happiness-0.5);
    });
    if(selectedpet) updatepet();
  }, 1500);
}
