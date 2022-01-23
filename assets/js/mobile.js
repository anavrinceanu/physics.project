const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const menuCloseIst = doc.querySelector(".closeistorie");
const menuCloseCar = doc.querySelector(".closescarnot");
const menuCloseDvo = doc.querySelector(".closedvo");
const menuCloseSva = doc.querySelector(".closesva");
const menuCloseGrf = doc.querySelector(".closegrafice");
const menuCloseBib = doc.querySelector(".closebib");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseIst.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseCar.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseDvo.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseSva.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseGrf.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseBib.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
  });