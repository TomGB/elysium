window.onload = () => {
    const navButton = document.getElementById('nav-button')
    const nav = document.getElementById('nav')
    
    navButton.addEventListener('click', () => {
        if (nav.classList.contains('show')) {
            nav.classList.remove('show')
        } else {
            nav.classList.add('show')
        }
    })
}
