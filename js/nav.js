const navLinks = document.querySelector('.nav-links')
const logo_text = document.querySelector('.logo_text')
const menu_button = document.querySelector('.menu_button')
const main_navbar = document.querySelector('#unhide')
const hero= document.querySelector(".hero_sec")
const banner_img= document.querySelector(".banner_image")

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('bg-[#0b1446]')
    main_navbar.classList.toggle('hidden')
    hero.classList.toggle("blur-sm")
    logo_text.classList.toggle("blur-sm")

}
function hide() {
    menu_button.name = menu_button === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')
    navLinks.classList.toggle('md:left-[1%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('lg:shadow-none')
    navLinks.classList.toggle('bg-[#0b1446]')
    navLinks.classList.toggle('lg:bg-transparent')
    main_navbar.classList.toggle('hidden')
}