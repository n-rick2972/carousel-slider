const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll("img");

const indicatorList = document.querySelector(".indicator-list");

let currentImg = 1;
let timeout;

// prev & next button
next.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImage();
});

prev.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImage();
});

// インジケーター

for (let i = 0; i < images.length; i++) {
  indicator = indicatorList.appendChild(document.createElement("a"));
  indicator.href = "#";
  indicator.classList.add("indicator");
}
const indicatorAnchor = document.querySelectorAll(".indicator");
indicatorAnchor[0].classList.add("is-active");

indicatorAnchor.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    imageContainer.style.transform = `translateX(-${index * 500}px)`;
    clearTimeout(timeout);
    currentImg = index + 1;
    indicatorControl();
    updateImage();
  });
});

indicatorControl = () => {
  indicatorAnchor.forEach((e, index) => {
    e.classList.remove("is-active");
    if (index + 1 == currentImg) {
      indicatorAnchor[currentImg - 1].classList.add("is-active");
    }
  });
};

// スライダーコントロール
updateImage = () => {
  if (currentImg > images.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = images.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 100}%)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImage();
    indicatorControl();
  }, 3000);
};

updateImage();
