const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const menu = document.querySelector(".main_responsive");

/*AGREGAMOS LA SIGUIENTE CLASE*/

menuOpen.addEventListener("click", () => {
    menu.classList.add("main_responsive--active");
});

/*RETIRAMOS LA SIGUIENTE CLASE*/
menuClose.addEventListener("click", () => {
    menu.classList.remove("main_responsive--active");
});