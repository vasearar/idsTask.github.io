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
});

let leftSquare = document.querySelector(".leftSquare");
let fishingAstro = document.querySelector(".fishingAstro");
function updateLeftSquareHeight() {
  let fishingAstro = document.querySelector(".fishingAstro").offsetHeight;
  let rightPart = document.querySelector(".rightPart");
  let computedStyle = window.getComputedStyle(rightPart);

  let rightPartTotalHeight = rightPart.offsetHeight +
    parseInt(computedStyle.marginTop) +
    parseInt(computedStyle.marginBottom);

  leftSquare.style.height = `${rightPartTotalHeight - fishingAstro}px`;
  console.log(`${rightPartTotalHeight}px`);
}

fishingAstro.addEventListener('load', updateLeftSquareHeight);
window.addEventListener('resize', updateLeftSquareHeight);

window.addEventListener("resize", function() {
  let astroHeight = image.height;
  document.querySelector(".paddingSquare1").style.height = `${astroHeight}px`;
});

