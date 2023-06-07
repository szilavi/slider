import { images } from "./img.js";

const imgPlace = document.querySelector(".container__slide__img");
const counter = document.querySelector(".img__counter");
const newPicture = document.querySelector(".img__arrows--right");
const previousPicture = document.querySelector(".img__arrows--left");
const caption = document.querySelector(".img__caption");
const buttonsContainer = document.querySelector(".container__slide__buttons");
let i = 0;
const autoRefresh = 10000;

for (let i = 0; i < images.length; i++) {
  if (i === 0) {
    buttonsContainer.innerHTML += `<i class="fa-solid fa-circle"></i>`;
  } else {
    buttonsContainer.innerHTML += `<i class="fa-regular fa-circle"></i>`;
  }
}

const buttons = document.querySelectorAll(".fa-circle");

let createdImg = `<img class= "actualImg" src="./assets/${images[i].source}" alt="picture"></img>`;

let createdDivToImg = document.createElement("div");

imgPlace.appendChild(createdDivToImg);

createdDivToImg.innerHTML = createdImg;

let actualImg = document.querySelector(".actualImg");

newPicture.addEventListener("click", nextPage);

function nextPage() {
  i = i === images.length - 1 ? 0 : i + 1;
  //  console.log(i);
  /*
    if (i === images.length - 1) {
        i = 0;
    } else i++;
*/
  effect();
  updateAll();
}

previousPicture.addEventListener("click", prevPage);

function prevPage() {
  i = i === 0 ? images.length - 1 : i - 1;
  /*if (i === 0) {
        i = images.length - 1;
    } else i--;
    */
  effect();
  updateAll();
}

function updateAll() {
  actualImg.setAttribute("src", `./assets/${images[i].source}`);
  counter.innerHTML = `${i + 1} / ${images.length}`;
  caption.innerHTML = `${images[i].caption}`;
  buttons.forEach((element) => {
    element.classList.remove("fa-solid");
    element.classList.add("fa-regular");
  });
  buttons[i].classList.add("fa-solid");
  buttons[i].classList.remove("fa-regular");
}

function goToPage(page) {
  i = page;
  updateAll();
}

buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    goToPage(index);
  });
});

setInterval(nextPage, autoRefresh);

function effect() {
  actualImg.classList.add("picAnimation");
  caption.classList.add("picAnimation");
  counter.classList.add("picAnimation");
  setTimeout(() => {
    actualImg.classList.remove("picAnimation");
    caption.classList.remove("picAnimation");
    counter.classList.remove("picAnimation");
  }, 500);
}

updateAll();
