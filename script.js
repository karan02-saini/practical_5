const greetText = document.getElementById("greetText");
const hour = new Date().getHours();
let greeting = "Welcome!";
if (hour < 12) greeting = "Good Morning";
else if (hour < 18) greeting = "Good Afternoon";
else greeting = "Good Evening";
greetText.textContent = greeting;

// Button actions
document.getElementById("likeBtn").addEventListener("click", () => {
  alert("Thanks for liking this project!");
});

document.getElementById("infoBtn").addEventListener("click", () => {
  alert("This mini project was made to practice Git, HTML, CSS, and JS together.");
});

const body = document.body;
const colors = [
  "linear-gradient(135deg, #0078d7, #00b4db)",
  "linear-gradient(135deg, #ff8c00, #ff5f6d)",
  "linear-gradient(135deg, #8e2de2, #4a00e0)",
  "linear-gradient(135deg, #11998e, #38ef7d)"
];
let index = 0;

document.getElementById("colorBtn").addEventListener("click", () => {
  index = (index + 1) % colors.length;
  body.style.background = colors[index];
});
