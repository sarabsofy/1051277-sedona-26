var linkForm = document.querySelector(".popup-btn");
var popupForm = document.querySelector(".hotel-search");
var arrival = popupForm.querySelector("[name=arrival]");

if(popupForm) {
  popupForm.classList.remove("modal-show");
}

linkForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupForm.classList.add("modal-show");
  arrival.focus();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupForm.classList.contains("modal-show")) {
      popupForm.classList.remove("modal-show");
    }
  }
});
