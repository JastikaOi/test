// toggle clas active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di clik
document.querySelector("#hamburger-menu").oneclick = () => {
  navbarNav.classList.toggle("active");
};
