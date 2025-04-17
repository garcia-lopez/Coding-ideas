document.querySelector(".wrapper").addEventListener("click", function() {
    this.classList.toggle("open");
});

// Falling hearts
//source: https://codepen.io/Hashir-ali-the-bashful/pen/mybJwWd
const heartContainer = document.getElementById('falling-hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('falling-heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 700);

