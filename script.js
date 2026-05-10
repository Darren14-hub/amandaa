function startSite() {
  document.getElementById("startScreen").style.display = "none";

  startHearts();
  startSlideshow();
}

/* MESSAGE */
function showMessage() {
  document.getElementById("message").innerText =
    "I’m really lucky to be apart of your life 💝";
}

/* SLIDESHOW */
let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
];

let index = 0;

function startSlideshow() {
  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
  }, 2000);
}

/* HEARTS */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💝";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}