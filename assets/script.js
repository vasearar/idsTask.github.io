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

const fishingAstroImage = document.querySelector(".fishingAstro");
const fishingAstroImageMobile = document.querySelector(".fishingAstroMobile");
const leftSquare = document.querySelector(".leftSquare");
const paddingSquare1 = document.querySelector(".paddingSquare1");
const paddingSquare1Mobile = document.querySelector(".paddingSquare1Mobile");
const rightPart = document.querySelector(".rightPart");

// Function to update left square height
function updateLeftSquareHeight() {
  const fishingAstroHeight = fishingAstroImage.offsetHeight;
  const fishingAstroHeightMobile = fishingAstroImageMobile.offsetHeight;
  const computedStyle = window.getComputedStyle(rightPart);
  const rightPartTotalHeight =
    rightPart.offsetHeight +
    parseInt(computedStyle.marginTop) +
    parseInt(computedStyle.marginBottom);
  leftSquare.style.height = `${rightPartTotalHeight - fishingAstroHeight}px`;
  paddingSquare1.style.height = `${fishingAstroHeight}px`;
  paddingSquare1Mobile.style.height = `${fishingAstroHeightMobile}px`;
}

// Event listener for image load and window resize
fishingAstroImage.addEventListener('load', updateLeftSquareHeight);
window.addEventListener('resize', updateLeftSquareHeight);

