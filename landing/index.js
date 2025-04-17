/**Cursor original idea from: https://github.com/thecodedose/web-design-tricks/tree/main */
const cursor = document.getElementById("cursor")
const inner = document.getElementById('inner');
const state = document.getElementById('dayOrNight');
const image = document.getElementById('image-container');
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const root = document.documentElement; // Select the :root element
const fontColor = getComputedStyle(root).getPropertyValue('--red').trim(); // Access the --green variable
console.log(fontColor);

if (isDarkMode) {
  image.style.backgroundImage = "url('landing/assets/dark-mode-background2.png')";
} else {
  // User prefers light mode
  image.style.backgroundImage = "url('landing/container-background.png')";
}

/*Customized mouse effect */
let mouseX = 0,
  mouseY = 0

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX
  mouseY = e.pageY
})

let cursorX = 0,
  cursorY = 0

function animate() {
  cursorX += (mouseX - cursorX) * 0.1
  cursorY += (mouseY - cursorY) * 0.1

  cursor.style.left = cursorX + "px"
  cursor.style.top = cursorY + "px"

  requestAnimationFrame(animate)
}

animate()

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'H2') {
        cursor.style.height = "50px";
        cursor.style.width = "50px";
        inner.style.height = "20px";
        inner.style.width = "20px";
    }

    if (e.target.tagName === 'H1') {
        cursor.style.height = "0px";
        cursor.style.width = "0px";
        inner.style.height = "0px";
        inner.style.width = "0px";
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'H2') {
        cursor.style.height = "40px";
        cursor.style.width = "40px";
        inner.style.height = "0px";
        inner.style.width = "0px";
    }
    if (e.target.tagName === 'H1') {
      cursor.style.height = "40px";
      cursor.style.width = "40px";
      inner.style.height = "0px";
      inner.style.width = "0px";
  }
});

state.addEventListener('click', () => {
  // Add your logic here
  console.log("clicked")
});


