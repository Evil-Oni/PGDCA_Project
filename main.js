const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".range__card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".location__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".location__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".location__content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".location__content .location__btn", {
    ...scrollRevealOption,
    delay: 1500,
});

const banner = document.querySelector(".banner__wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
});