const menuEl = document.querySelector(".bi-list");
const menu1El = document.querySelector(".tudelest");
const xEl = document.querySelector(".bi-x-lg");
const shaffofEl = document.querySelector(".shaffof");   

menuEl.addEventListener("click", () => {
    menu1El.style.left = "0";
    shaffofEl.style.display = "block";
})
shaffofEl.addEventListener("click", () => {
    shaffofEl.style.display = "none";
    menu1El.style.left = "-50%";


})
xEl.addEventListener("click", () => {
    shaffofEl.style.display = "none";
    menu1El.style.left = "-50%";
})