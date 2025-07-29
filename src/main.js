const sticker = document.querySelectorAll(".container_sticker img");
const reset_btn = document.querySelector("button");
const img_previews = document.querySelector(".img_previews");
const count = document.querySelector(".count");
const textOnCard = document.querySelector(".container_text");

// création d'un positionnement aléatoire
function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// reset de la carte P.
reset_btn.addEventListener("click", () => {
  img_previews.innerHTML = "";
  count.textContent = "0 éléments(s) sur la carte";
  textOnCard.style.zIndex = "10";
});

// ajout des stickers sur la carte P.
sticker.forEach((sticker) => {
  // pour tous les stickers j'ajoute un écouteur d'evenement
  sticker.addEventListener("click", () => {
    // je cache le texte de la carte avec un z-index
    textOnCard.style.zIndex = "-10";
    const imgCard = document.createElement("img");
    // ajoute le style au sticker
    imgCard.classList.add("img_card");
    imgCard.style.backgroundColor = "transparent";
    imgCard.style.border = "none";
    imgCard.style.cursor = "pointer";
    imgCard.style.boxShadow = "none";
    imgCard.style.width = "auto";
    imgCard.style.height = `${randomPosition(50, 100)}px`;
    imgCard.style.position = "absolute";
    imgCard.style.top = `${randomPosition(
      0,
      img_previews.offsetHeight - 50
    )}px`;
    imgCard.style.left = `${randomPosition(
      0,
      img_previews.offsetWidth - 50
    )}px`;
    // j'ajoute le sticker sur la carte avec sa source et son alt
    imgCard.src = sticker.src;
    imgCard.alt = sticker.alt;

    // j'ajoute le sticker sur la carte en utilisant appenchild()
    img_previews.appendChild(imgCard);

    // je concatenne le nombre de stickers sur la carte
    count.textContent =
      img_previews.querySelectorAll(".img_card").length +
      " éléments(s) sur la carte";

    // je créer une boucle for afin d'ajouter un ecouteur d'evenement afin de supprimer les stickers
    for (const img_preview of document.querySelectorAll(".img_card")) {
      img_preview.addEventListener("click", () => {
        img_preview.remove();
        count.textContent =
          img_previews.querySelectorAll(".img_card").length +
          " éléments(s) sur la carte";

        if (img_previews.querySelectorAll(".img_card").length === 0) {
          textOnCard.style.zIndex = "10";
        }
      });
    }
  });
});
