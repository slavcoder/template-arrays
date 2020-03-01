function menuEvents() {
    const menu = document.querySelector('.menu')
    const hamburger = document.querySelector('.hamburger')

    hamburger.addEventListener('click', e => {
        menu.classList.toggle('-active')
    })
}


export default menuEvents