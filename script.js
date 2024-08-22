var typed = new Typed(".typing", {
  strings: ["Graphics Designer", "Web Developer"],
  typeSpeed: 90,
  backSpeed: 60,
  loop: true,
});

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
    im1.src = "images/logo.png";
  } else {
    icon.src = "images/moon.png";
    im1.src = "images/logo2.png";
  }
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
