function functio(small) {
  var full = document.getElementById("imagebox");
  full.src = small.src;
}

var navbarSearchButton = document.getElementById("navbar-search-button");
var navbarSearchInput = document.getElementById("navbar-search-input");

navbarSearchInput.addEventListener("keyup", function () {
  const searchValue = navbarSearchInput.value.toLowerCase().trim();

  const url = `/cars.html?search=${searchValue}`;

  navbarSearchButton.setAttribute("href", url);
});
