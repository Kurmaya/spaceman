var toggleButton =document.querySelector(".toggle-button");
var navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener('click', function()  {
  toggleButton.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});
