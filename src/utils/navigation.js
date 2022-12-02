const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");


navToggle.addEventListener('click', () => {
    primaryNav.toggleAttribute("data-visible");
    navToggle.toggleAttribute("data-visible");
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute('aria-expanded', true) : navToggle.setAttribute('aria-expanded', false);
    primaryHeader.toggleAttribute("data-overlay");
})

// code obtained from Web Dev Simplified https://www.youtube.com/watch?v=S-VeYcOCFZw
// animating dropdown menu on desktop
document.addEventListener('click', e => {
    const isDropdownLink = e.target.matches("[data-dropdown-link]")

    // if clicking inside the already open dropdown menu, do nothing
    if (!isDropdownLink && e.target.closest("[data-dropdown]") != null) return
    
    let currentDropdown
    if (isDropdownLink) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.toggleAttribute("data-link-active")
    }

    // close all other dropdown menus
    document.querySelectorAll("[data-link-active]").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.toggleAttribute("data-link-active")
    })
})