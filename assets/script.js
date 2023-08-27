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

let image = document.querySelector(".fishingAstro");
image.addEventListener('load', function() {
  let astroHeight = image.height;
  document.querySelector(".paddingSquare1").style.height = `${astroHeight}px`;
  console.log(`${astroHeight}px`);
});

window.addEventListener("resize", function() {
  let astroHeight = image.height;
  document.querySelector(".paddingSquare1").style.height = `${astroHeight}px`;
  console.log(`${astroHeight}px`);
});