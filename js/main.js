const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".category-btn");

let activeCard = null;
let touchStartX = 0;
let touchStartY = 0;
let isScrolling = false;

function renderMovies(list) {
  grid.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <div class="poster-wrapper">
        <img src="${movie.poster}">
      </div>

      <div class="info-panel">
        <div class="info-item">⭐ ${movie.rating}</div>
        <div class="info-item">📅 ${movie.year}</div>
        <div class="info-item">🌐 ${movie.language}</div>
        <div class="info-item">🎥 ${movie.quality}</div>
      </div>

      <div class="movie-title">${movie.title}</div>
    `;

    /* ---------- TOUCH START ---------- */
    card.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      isScrolling = false;
    });

    /* ---------- TOUCH MOVE (SCROLL DETECT) ---------- */
    card.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      const dx = Math.abs(touch.clientX - touchStartX);
      const dy = Math.abs(touch.clientY - touchStartY);

      if (dy > dx && dy > 10) {
        isScrolling = true;
      }
    });

    /* ---------- TOUCH END ---------- */
    card.addEventListener("touchend", (e) => {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile || isScrolling) return;

      e.preventDefault();

      // First tap → open panel
      if (activeCard !== card) {
        if (activeCard) activeCard.classList.remove("active");
        card.classList.add("active");
        activeCard = card;
        return;
      }

      // Second tap → go to detail page
      window.location.href = `movie.html?id=${movie.id}`;
    });

    /* ---------- DESKTOP CLICK ---------- */
    card.addEventListener("click", () => {
      if (window.innerWidth > 768) {
        window.location.href = `movie.html?id=${movie.id}`;
      }
    });

    grid.appendChild(card);
  });
}

/* close panel on outside tap */
document.addEventListener("touchstart", (e) => {
  if (!e.target.closest(".movie-card") && activeCard) {
    activeCard.classList.remove("active");
    activeCard = null;
  }
});

renderMovies(movies);

/* search */
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  renderMovies(movies.filter(m => m.title.toLowerCase().includes(value)));
});

/* category filter */
buttons.forEach(btn => {
  btn.onclick = () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.category;
    renderMovies(cat === "All" ? movies : movies.filter(m => m.category === cat));
  };
});
