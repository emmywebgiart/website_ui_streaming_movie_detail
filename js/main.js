let buttonMenuOpen = document.getElementById("button_menu_open")
let buttonMenuClose = document.getElementById("button_menu_close")
let nav = document.getElementById("nav_ui")
let header = document.querySelector(".header")
let posterMovieContent = document.querySelector(".poster_movie_content")

buttonMenuOpen.onclick = () => {
    nav.classList.add("show_nav_ui")
}

buttonMenuClose.onclick = () => {
    nav.classList.remove("show_nav_ui")
}

const changeColorsHeader = (scrollDocument) => {
    if(scrollDocument > 72) {
        header.style.setProperty("--color-secondary-header", "#171716")
        header.style.backdropFilter = "blur(20px)"
    } else {
        header.style.setProperty("--color-secondary-header", "transparent")
        header.style.backdropFilter = "blur(0px)"
    }
}

const changeOpacityPoster = (contentOpacity) => {
    if(contentOpacity === 0) {
        posterMovieContent.style.opacity = 1
    }
    if(contentOpacity > 0) {
        posterMovieContent.style.opacity = 1 - contentOpacity
    }
    if(contentOpacity >= 0.8) {
        posterMovieContent.style.opacity = 0.2
    }
}

document.addEventListener("scroll", () => {
    changeColorsHeader(window.scrollY)
    changeOpacityPoster(window.scrollY / 1000)
})