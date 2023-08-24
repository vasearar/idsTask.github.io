document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".topBar").classList.toggle("forTopBar");
  document.querySelector(".bottomBar").classList.toggle("forBottomBar");
  document.querySelector(".overlay").classList.toggle("opacityToOverlay");
  document.querySelector(".mobileMenu").classList.toggle("toScreenFromRight");
  document.querySelector("body").classList.toggle("noScroll");
});

document.querySelector("nav img").addEventListener("click", () => {
  location.reload();
});

