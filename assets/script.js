let topBar = document.querySelector(".topBar");
let bottomBar = document.querySelector(".bottomBar");
document.querySelector(".burger").addEventListener("click", () => {
  topBar.classList.toggle("forTopBar");
  bottomBar.classList.toggle("forBottomBar");
});