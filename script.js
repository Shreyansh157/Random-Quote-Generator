// Predefined list of quotes
const QUOTES = [
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Little by little becomes a lot.", author: "Proverb" },
  { text: "Dreams don't work unless you do.", author: "John C. Maxwell" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
];

// Elements
const quoteEl = document.getElementById("quoteText");
const authorEl = document.getElementById("quoteAuthor");
const newBtn = document.getElementById("newBtn");
const copyBtn = document.getElementById("copyBtn");
let lastIndex = -1;

// Generate a new random index (no immediate repeats)
function randomIndex() {
  if (QUOTES.length === 1) return 0;
  let i;
  do {
    i = Math.floor(Math.random() * QUOTES.length);
  } while (i === lastIndex);
  lastIndex = i;
  return i;
}

// Show a random quote
function showRandomQuote() {
  const { text, author } = QUOTES[randomIndex()];
  quoteEl.classList.remove("fade-in"); // restart animation
  void quoteEl.offsetWidth; // trigger reflow
  quoteEl.textContent = text;
  authorEl.textContent = `— ${author}`;
  quoteEl.classList.add("fade-in");
}

// Copy current quote to clipboard
async function copyToClipboard() {
  const payload = `${quoteEl.textContent} ${authorEl.textContent}`;
  try {
    await navigator.clipboard.writeText(payload);
    copyBtn.textContent = "Copied";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
  } catch (err) {
    alert("Copy failed.");
  }
}

// Change quote with space or enter
function handleKeyPress(e) {
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault(); // prevent page scroll on space
    showRandomQuote();
  }
}

// Event listeners
newBtn.addEventListener("click", showRandomQuote);
copyBtn.addEventListener("click", copyToClipboard);
document.addEventListener("keydown", handleKeyPress);

// Initial load
showRandomQuote();
