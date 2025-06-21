// FAQ Toggle
document.querySelectorAll('.faq-item h4').forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('open');
  });
});

// Music Toggle
const audio = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
let isPlaying = false;

const startMusicOnce = () => {
  audio.play().then(() => {
    isPlaying = true;
    toggleBtn.textContent = "⏸️ Music Off";
  }).catch(err => console.error("Autoplay blocked:", err));
  document.removeEventListener("click", startMusicOnce);
};

document.addEventListener("click", startMusicOnce);

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isPlaying) {
    audio.pause();
    toggleBtn.textContent = "▶️ Music On";
  } else {
    audio.play();
    toggleBtn.textContent = "⏸️ Music Off";
  }
  isPlaying = !isPlaying;
});

// Search Filter
document.getElementById("mentor-search").addEventListener("input", function () {
  const searchVal = this.value.toLowerCase();
  document.querySelectorAll(".mentor-avatar").forEach(card => {
    const altText = card.getAttribute("data-name").toLowerCase();
    card.style.display = altText.includes(searchVal) ? "block" : "none";
  });
});
