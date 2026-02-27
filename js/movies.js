const movies = [
  {
    id: 1,
    title: "Inception",
    poster: "images/posters/inception.png",
    category: "Sci-Fi",
    rating: "8.8",
    year: "2010",
    language: "English",
    quality: "BluRay",
    runtime: "2h 28m",
    genres: ["Sci-Fi", "Thriller", "Mind-Bending"],
    director: "Christopher Nolan",
    cast: [
    "Leonardo DiCaprio",
    "Joseph Gordon-Levitt",
    "Elliot Page",
    "Tom Hardy"
  ],
    summary: "A skilled thief is given a chance to erase his criminal past by planting an idea into the mind of a powerful CEO through shared dreaming.",
    
    watch: [
      { name: "Netflix", url: "https://www.netflix.com" },
      { name: "Prime Video", url: "https://www.primevideo.com" },
      { name: "Apple TV", url: "https://tv.apple.com" }
    ]
  },
  {
  id: 2,
  title: "Interstellar",
  poster: "images/posters/interstellar.webp",
  category: "Sci-Fi",
  rating: "8.6",
  year: "2014",
  language: "English",
  quality: "BluRay",
  runtime: "2h 49m",
  genres: ["Sci-Fi", "Adventure", "Drama"],
  director: "Christopher Nolan",
  cast: [
    "Matthew McConaughey",
    "Anne Hathaway",
    "Jessica Chastain",
    "Michael Caine"
  ],
  summary: "As Earth becomes uninhabitable, a group of astronauts travel through a wormhole in search of a new home for humanity, pushing the limits of time, space, and human connection.",
  
  watch: [
    { name: "Prime Video", url: "https://www.primevideo.com" },
    { name: "Apple TV", url: "https://tv.apple.com" }
  ]
  },

   
  {
  id: 3,
  title: "The Dark Knight",
  poster: "images/posters/the_dark_knight.jpg",
  category: "Action",
  rating: "9.0",
  year: "2008",
  language: "English",
  quality: "BluRay",
  runtime: "2h 32m",
  genres: ["Action", "Crime", "Drama"],
  director: "Christopher Nolan",
  cast: [
    "Christian Bale",
    "Heath Ledger",
    "Aaron Eckhart",
    "Michael Caine"
  ],
  summary: "Batman faces his greatest psychological and moral challenge when the Joker emerges as a chaotic criminal mastermind, pushing Gotham City to the edge and testing what it truly means to be a hero.",
  
  watch: [
    { name: "Apple TV", url: "https://tv.apple.com" },
    { name: "Prime Video", url: "https://www.primevideo.com" }
  ]
},
{
  id: 5,
  title: "Joker",
  poster: "images/posters/joker.jpg",
  category: "Drama",
  rating: "8.4",
  year: "2019",
  language: "English",
  quality: "BluRay",
  runtime: "2h 2m",
  genres: ["Drama", "Crime", "Psychological Thriller"],
  director: "Todd Phillips",
  cast: [
    "Joaquin Phoenix",
    "Robert De Niro",
    "Zazie Beetz",
    "Frances Conroy"
  ],
  summary: "A failed comedian spirals into madness as society’s neglect and cruelty push him toward a dark transformation, giving birth to one of Gotham’s most infamous villains.",
  
  watch: [
    { name: "Prime Video", url: "https://www.primevideo.com" },
    { name: "Apple TV", url: "https://tv.apple.com" }
  ]
},

{
  id: 4,
  title: "Avengers: Endgame",
  poster: "images/posters/avengers_endgame.jpg",
  category: "Action",
  rating: "8.4",
  year: "2019",
  language: "English",
  quality: "4K",
  runtime: "3h 1m",
  genres: ["Action", "Adventure", "Sci-Fi"],
  director: "Anthony Russo, Joe Russo",
  cast: [
    "Robert Downey Jr.",
    "Chris Evans",
    "Chris Hemsworth",
    "Scarlett Johansson"
  ],
  summary: "After the devastating events of Infinity War, the remaining Avengers assemble one last time to undo Thanos’ actions and restore balance to the universe, leading to an emotional and epic conclusion.",
  
  watch: [
    { name: "Disney+", url: "https://www.disneyplus.com" },
    { name: "Apple TV", url: "https://tv.apple.com" }
  ]
},
{
  id: 6,
  title: "Tenet",
  poster: "images/posters/tenet.jpg",
  category: "Sci-Fi",
  rating: "7.8",
  year: "2020",
  language: "English",
  quality: "BluRay",
  runtime: "2h 30m",
  genres: ["Sci-Fi", "Action", "Thriller"],
  director: "Christopher Nolan",
  cast: [
    "John David Washington",
    "Robert Pattinson",
    "Elizabeth Debicki",
    "Kenneth Branagh"
  ],
  summary: "Armed with only one word—Tenet—a CIA operative navigates a world of inverted time to prevent a global catastrophe, blurring the line between cause and effect in a high-stakes battle for the future.",
  
  watch: [
    { name: "Prime Video", url: "https://www.primevideo.com" },
    { name: "Apple TV", url: "https://tv.apple.com" }
  ]
},
{
  id: 7,
  title: "Dune",
  poster: "images/posters/dune.jpg",
  category: "Sci-Fi",
  rating: "8.0",
  year: "2021",
  language: "English",
  quality: "4K",
  runtime: "2h 35m",
  genres: ["Sci-Fi", "Adventure", "Epic"],
  director: "Denis Villeneuve",
  cast: [
    "Timothée Chalamet",
    "Zendaya",
    "Rebecca Ferguson",
    "Oscar Isaac"
  ],
  summary: "Paul Atreides, a gifted young man born into a great destiny, must travel to the most dangerous planet in the universe to ensure the future of his family and his people, as powerful forces clash over a precious resource.",
  
  watch: [
    { name: "Prime Video", url: "https://www.primevideo.com" },
    { name: "Apple TV", url: "https://tv.apple.com" }
  ]
},
{
  id: 8,
  title: "The Matrix",
  poster: "images/posters/the_matrix.webp",
  category: "Sci-Fi",
  rating: "8.7",
  year: "1999",
  language: "English",
  quality: "BluRay",
  runtime: "2h 16m",
  genres: ["Sci-Fi", "Action", "Cyberpunk"],
  director: "Lana Wachowski, Lilly Wachowski",
  cast: [
    "Keanu Reeves",
    "Laurence Fishburne",
    "Carrie-Anne Moss",
    "Hugo Weaving"
  ],
  summary: "A computer hacker discovers that reality as he knows it is a simulated illusion created by machines, and he joins a rebellion to free humanity and uncover the truth about the Matrix.",
  trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  watch: [
    { name: "Prime Video", url: "https://www.primevideo.com" },
    { name: "Apple TV", url: "https://tv.apple.com" }
  ]
},







]
