/* NavBar */


const menu = document.querySelector(".open-menu")
const nav = document.querySelector("ul.nav")
const navText = document.querySelectorAll("ul p.nav-text")

const abrirMenu = menu.addEventListener("click", () => {
    if (nav.style.width !== "125px") {
        nav.style.width = "125px"
        navText.forEach(item => item.style.display = "inline")
    } else {
        nav.style.width = "0px"
        navText.forEach(item => item.style.display = "none")
    }
})



/* Modal */

const imgs = document.querySelectorAll(".container img")
const imgModal = document.querySelector(".modal img")
const modal = document.querySelector(".modal")

const abrirModal = (src) => {
    imgModal.src = src
    modal.style.display = "flex"
}

const clickImg = imgs.forEach((img) => {
    img.addEventListener("click", (event) => {
        if (event.target.classList.value === "heart") {
            if (event.target.src === "http://127.0.0.1:5502/assets/like.svg") {
                event.target.src = "http://127.0.0.1:5502/assets/inactive-like.svg"
            } else {
                event.target.src = "http://127.0.0.1:5502/assets/like.svg"
            }
        } else {
            abrirModal(event.target.src)
        }
        console.log(event.target.src)
    })
})

const fecharModal = () => {
    modal.style.display = "none"
}

modal.addEventListener("click", () => {
    fecharModal()
})