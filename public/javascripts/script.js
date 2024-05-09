
dom.querySelector("[status-line='light']").addEventListener("click", () => {
    dom.body.setAttribute("data-bs-theme", "light")
})
dom.querySelector("[status-line='dark']").addEventListener("click", () => {
    dom.body.setAttribute("data-bs-theme", "dark")
})