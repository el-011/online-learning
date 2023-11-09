import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

const navBar = document.getElementById("topnav");
const closeMenu = document.getElementById("close");
const menuBox = document.getElementById("menu");

navBar.addEventListener("click", function () {
  menuBox.classList.add("responsive");
});
closeMenu.addEventListener("click", function () {
  menuBox.classList.remove("responsive");
});
