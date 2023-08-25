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


// let viewportHeight = window.innerHeight;
// let navHeight = document.querySelector("nav").offsetHeight;
// document.querySelector(".firstSection").style.height = `${100*(viewportHeight-navHeight)/viewportHeight}vh`;

// window.addEventListener("resize", () => {
//   viewportHeight = window.innerHeight;
//   navHeight = document.querySelector("nav").offsetHeight;

//   document.querySelector(".topBar").classList.remove("forTopBar");
//   document.querySelector(".bottomBar").classList.remove("forBottomBar");
//   document.querySelector(".overlay").classList.remove("opacityToOverlay");
//   document.querySelector(".mobileMenu").classList.remove("toScreenFromRight");
//   document.querySelector("body").classList.remove("noScroll");
// });

