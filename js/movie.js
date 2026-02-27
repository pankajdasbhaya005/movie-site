const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const movie = movies.find(m => m.id === id);
const container = document.getElementById("movieDetail");

if (!movie) {
  container.innerHTML = "<p>Movie not found</p>";
} else {
  const watchButtons = movie.watch
    .map(
      p => `<a href="${p.url}" target="_blank" class="watch-btn">${p.name}</a>`
    )
    .join("");

  const genreTags = movie.genres
    .map(g => `<span class="genre-tag">${g}</span>`)
    .join("");

  const castNames = movie.cast.join(" · ");

  container.innerHTML = `
    <div class="movie-layout">

      <img 
        src="${movie.poster}" 
        alt="${movie.title}" 
        class="movie-poster"
      />

      <div class="movie-info">
        <h1>${movie.title}</h1>

        <div class="movie-meta">
          <div>⭐ ${movie.rating}</div>
          <div>📅 ${movie.year}</div>
          <div>🌐 ${movie.language}</div>
          <div>🎥 ${movie.quality}</div>
          <div>⏱ ${movie.runtime}</div>
        </div>

        <div class="genre-wrap">
          ${genreTags}
        </div>

        <p class="movie-crew">
          🎬 <strong>Director:</strong> ${movie.director}
        </p>

        <p class="movie-crew">
          🎭 <strong>Cast:</strong> ${castNames}
        </p>

        <p class="movie-summary">
          ${movie.summary}
        </p>

        <div class="watch-section">
          <h3>Watch on</h3>
          <div class="watch-links">
            ${watchButtons}
          </div>
        </div>

      </div>
    </div>
  `;
}
