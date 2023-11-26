const navLinks = document.querySelector('.nav-links')
const logo_text = document.querySelector('.logo_text')
const menu_button = document.querySelector('.menu_button')
const main_navbar = document.querySelector('#unhide')
const body= document.querySelector("body")
const hero=document.querySelector(".hero_sec")

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('bg-[#0b1446e2]')
    main_navbar.classList.toggle('hidden')
    $("html").animate({ scrollTop: 0 }, "slow");
    body.classList.toggle("overflow-hidden")
    logo_text.classList.toggle("blur-sm")
    hero.classList.toggle("blur-md")

}
function hide() {
    menu_button.name = menu_button === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')
    navLinks.classList.toggle('md:left-[1%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('lg:shadow-none')
    navLinks.classList.toggle('bg-[#0b1446e2]')
    navLinks.classList.toggle('lg:bg-transparent')
    main_navbar.classList.toggle('hidden')
    body.classList.toggle("overflow-hidden")
    hero.classList.toggle("blur-md")

}