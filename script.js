window.onload = function () {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        var bodyElement = document.getElementsByClassName(".content-container");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        bodyElement.classList.toggle()
    })
};



