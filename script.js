const mobileBtn = document.getElementById("mobile-btn");
const cancelBtn = document.getElementById("cancel");


mobileBtn.addEventListener("click", () => {
   let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.add("show-menu");
});
cancelBtn.addEventListener("click", () => {
   let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.remove("show-menu");
});
