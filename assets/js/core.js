const containerMain = document.querySelector("#main-pages")

containerMain.addEventListener("wheel", (e) => {
    e.preventDefault()
    containerMain.scrollLeft += e.deltaY
})