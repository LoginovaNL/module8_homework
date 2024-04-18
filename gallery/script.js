const containerBtn = document.querySelector(".container__btn");
const wrap = document.querySelector(".container__img");
const loader = document.querySelector(".mask_loader");
containerBtn.addEventListener("click", () => {
    startLoader();
});
function startLoader() {
    loader.style.display = "flex";
    fetch("https://dog.ceo/api/breeds/image/random/15")
    .then((res) => res.json())
    .then((res) => insertImages(res))
    .catch((error) => console.error(error.massage));
}
function hideLoader() {
    loader.style.display = "none";
}
function insertImages(imgSize) {
    wrap.innerHTML = "";
    imgSize.message.forEach(img => {
        const elem = `<img src=${img} alt="Красивая собачка"></img>`;
        wrap.innerHTML += elem;
    });
    hideLoader()
}
