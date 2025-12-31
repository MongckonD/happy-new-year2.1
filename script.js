
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

setInterval(createHeart, 600);

function createFirework() {
  const firework = document.createElement("div");
  firework.className = "firework";

  const colors = ["#ff4d6d", "#ffd166", "#4cc9f0", "#ffffff"];
  firework.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  firework.style.left = Math.random() * 100 + "vw";
  firework.style.top = Math.random() * 60 + "vh";

  document.body.appendChild(firework);

  setTimeout(() => firework.remove(), 1200);
}


setInterval(createFirework, 500);