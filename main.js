const shareButton = document.getElementById("share-button");
const footerContainer = document.querySelector(".container__footer");

shareButton.addEventListener("click", () => {
  footerContainer.classList.toggle("container__footer--active");
});
