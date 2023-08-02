const imgs = document.querySelectorAll("li img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const closeBtn = document.querySelector(".close-button");

function handleClick(event) {
  const url = event.target.src;
  lightboxImage.setAttribute("src", url);
  lightbox.style.display = "flex";
}

function handleClose(event) {
  event.preventDefault();
  lightbox.style.display = "none";
}

imgs.forEach((img) => {
  img.addEventListener("click", handleClick);
});

closeBtn.addEventListener("click", handleClose);
