var link = document.querySelector(".js-write-us");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

var form = popup.querySelector(".write-us-form");
var fullname = popup.querySelector(".write-us-name");
var email = popup.querySelector(".write-us-email");
var comment = popup.querySelector(".write-us-comment");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  if (storage) {
    fullname.value = storage;
    email.focus();
  } else {
    fullname.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!fullname.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localstorage.setItem("fullname", fullname.value)
      localstorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show") && overlay.classList.contains("overlay-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});

overlay.addEventListener("click", function () {
  if (popup.classList.contains("modal-show") && overlay.classList.contains("overlay-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
  }
});

var mapLink = document.querySelector(".js-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show") && overlay.classList.contains("overlay-show")) {
      mapPopup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

overlay.addEventListener("click", function () {
  if (mapPopup.classList.contains("modal-show") && overlay.classList.contains("overlay-show")) {
    mapPopup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  }
});