let imgs = document.querySelectorAll("header .images img");
let bullet = document.querySelectorAll("header .place span");
let rightArrow = document.querySelector("i.right");
let leftArrow = document.querySelector("i.left");

rightArrow.onclick = function () {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].classList.contains("active")) {
      imgs[i].classList.remove("active");
      i + 1 < imgs.length
        ? imgs[i + 1].classList.add("active")
        : imgs[0].classList.add("active");
      bullet.forEach((e) => {
        e.classList.remove("active");
      });
      i + 1 < imgs.length
        ? bullet[i + 1].classList.add("active")
        : bullet[0].classList.add("active");
      break;
    }
  }
};

leftArrow.onclick = function () {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].classList.contains("active")) {
      imgs[i].classList.remove("active");
      i - 1 >= 0
        ? imgs[i - 1].classList.add("active")
        : imgs[imgs.length - 1].classList.add("active");
      bullet.forEach((e) => {
        e.classList.remove("active");
      });
      i - 1 >= 0
        ? bullet[i - 1].classList.add("active")
        : bullet[imgs.length - 1].classList.add("active");
      break;
    }
  }
};
