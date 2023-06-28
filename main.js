const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.nav_menu')
const bloq = document.querySelector('.us')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('toggle-active')
    menu.classList.toggle('nav_menu-active')
})

menu.addEventListener('click', () =>{
    menu.classList.toggle('nav_menu-active')
    toggle.classList.toggle('toggle-active')
})
