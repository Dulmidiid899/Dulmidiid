// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Fariintaada waa la diray, mahadsanid!");
  this.reset();
});

// Mobile menu
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
