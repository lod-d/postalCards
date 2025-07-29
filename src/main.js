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
  count.textContent = "0 élémen icits(s) sur la carte";
  textOnCard.style.zIndex = "10";
});

// ajout des stickers sur la carte P.
sticker.forEach((sticker) => {
  sticker.addEventListener("click", () => {
    textOnCard.style.zIndex = "-10";

    const imgCard = document.createElement("img");
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
    imgCard.src = sticker.src;
    imgCard.alt = sticker.alt;
    img_previews.appendChild(imgCard);
    count.textContent =
      img_previews.querySelectorAll(".img_card").length +
      " éléments(s) sur la carte";

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
