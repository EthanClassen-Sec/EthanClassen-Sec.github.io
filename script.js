
const text = [
  "booting ethan.system...",
  "loading modules...",
  "initializing network...",
  "access granted"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 30 : 60);
}

type();
