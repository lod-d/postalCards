const sticker = document.querySelectorAll(".container_sticker img");
const reset_btn = document.querySelector("button");
const img_cards = document.querySelector(".carte_postale");
const count = document.querySelector(".count");
// console.log(sticker);

// création d'un positionnement aléatoire

function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

sticker.forEach((sticker) => {
  sticker.addEventListener("click", () => {
    const imgCard = document.createElement("img");
    imgCard.classList.add("img_card");
    imgCard.style.backgroundColor = "transparent";
    imgCard.style.border = "none";
    imgCard.style.cursor = "pointer";
    imgCard.style.boxShadow = "none";
    imgCard.style.width = "auto";
    imgCard.style.height = `${randomPosition(50, 100)}px`;
    imgCard.style.position = "absolute";
    imgCard.style.top = `${randomPosition(0, img_cards.offsetHeight - 50)}px`;
    imgCard.style.left = `${randomPosition(0, img_cards.offsetWidth - 50)}px`;
    imgCard.src = sticker.src;
    imgCard.alt = sticker.alt;
    img_cards.appendChild(imgCard);
    count.textContent =
      img_cards.querySelectorAll(".img_card").length +
      " éléments(s) sur la carte";
  });
});
reset_btn.addEventListener("click", () => {
  img_cards.innerHTML = `<img
            class="bg_img_card"
            src="./src/images/image-bg.png"
            alt="image de fond de mes fausse vacances"
          />`;
  count.textContent = "0 éléments(s) sur la carte";
});
