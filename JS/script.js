let firstMainUpMenuButton = document.querySelector("#firstMainUpMenuButton");
let firstMainUpMenuButtonSvg = document.querySelector("#firstMainUpMenuButton svg");
let forMenu = document.querySelector("#forMenu");
let nav = document.querySelector("#forMenu nav");
let navClose = document.querySelector("#navClose i");
let menuUlClikFirstI = document.querySelector("#menuUlClikFirst i");
let menuUlClikFirst = document.querySelector("#menuUlClikFirst");
let menuUlClikFirstUl = document.querySelector("#menuUlClikFirstUl");
let menuUlClickSecondI = document.querySelector("#menuUlClickSecond i");
let menuUlClickSecondUl = document.querySelector("#menuUlClickSecondUl");
let menuUlClickSecond = document.querySelector("#menuUlClickSecond");
let firstMainUpLogo = document.querySelector("#firstMainUpLogo");
let firstMainUpLogoSvg = document.querySelector("#firstMainUpLogoSvg svg");
let firstMainUpLogoHover = document.querySelector("#firstMainUpLogoHover");
let firstMainUpLogoHoverP = document.querySelector("#firstMainUpLogoHover p");
let firstMainUp = document.querySelector("#firstMainUp");
let firstMainBottom = document.querySelector("#firstMainBottom");
let isOpen = true;
firstMainUpMenuButton.addEventListener("click", ()=>{
    forMenu.style.display = "flex";
    nav.style.right = "0";
    firstMainUpMenuButton.style.display = "none";
    nav.setAttribute("class", "animate__animated animate__fadeInRight")
})
navClose.addEventListener("click", ()=>{
    nav.setAttribute("class", "animate__animated animate__fadeOutRight")
    setTimeout(()=>{
        forMenu.style.display = "none";
        firstMainUpMenuButton.style.display = "flex";
    },500)
})
menuUlClikFirstI.addEventListener("click", ()=>{
    if (isOpen){
        menuUlClikFirst.style.height = "253.3169px";
        menuUlClikFirstUl.style.display = "flex";
        menuUlClikFirstI.style.transform = "rotate(180deg)";
        isOpen = false;
    }else{
        menuUlClikFirst.style.height = "41.1px";
        menuUlClikFirstUl.style.display = "none";
        menuUlClikFirstI.style.transform = "rotate(0deg)";
        isOpen = true;
    }
})
menuUlClickSecondI.addEventListener("click", ()=>{
    if (isOpen){
        menuUlClickSecond.style.height = "70px";
        menuUlClickSecondUl.style.display = "flex";
        menuUlClickSecondI.style.transform = "rotate(180deg)";
        isOpen = false;
    }else{
        menuUlClickSecond.style.height = "41.1px";
        menuUlClickSecondUl.style.display = "none";
        menuUlClickSecondI.style.transform = "rotate(0deg)";
        isOpen = true;
    }
})
firstMainUpLogo.addEventListener("mouseenter", ()=>{
    firstMainUpLogoHover.style.display = "flex";
    firstMainUpLogoHoverP.setAttribute("class", "animate__animated animate__fadeInLeft");
    firstMainUpLogoHoverP.style.color = "white";
})
firstMainUpLogo.addEventListener("mouseleave", ()=>{
    firstMainUpLogoHover.style.display = "none";
})
firstMainUpLogoHoverP.addEventListener("mouseenter", ()=>{
    firstMainUpLogoHoverP.style.color = "#00D1FF";
})
firstMainUpLogoHoverP.addEventListener("mouseleave", ()=>{
    firstMainUpLogoHoverP.style.color = "white";
})
window.addEventListener("scroll", ()=>{
    if (window.scrollY > firstMainUp.offsetHeight) {
        firstMainUp.style.height = "80px";
        firstMainUp.style.backgroundColor = "white";
        firstMainUp.style.position = "fixed";
        firstMainUp.style.top = "0";
        firstMainUpLogoSvg.style.color = "black";
        firstMainUpMenuButtonSvg.style.color = "black";
    }else{
        firstMainUp.style.height = "44px";
        firstMainUp.style.backgroundColor = "transparent";
        firstMainUp.style.position = "unset";
        firstMainUpLogoSvg.style.color = "white";
        firstMainUpMenuButtonSvg.style.color = "white";
    }
})
firstMainBottom.addEventListener("click", ()=>{
    window.scrollTo(0, 1200);
})