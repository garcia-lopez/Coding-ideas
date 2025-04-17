/**Cursor original idea from: https://github.com/thecodedose/web-design-tricks/tree/main */
const cursor = document.getElementById("cursor");
const gitHubIcon = document.getElementById("gitHubIcon");
const inner = document.getElementById('inner');
const state = document.getElementById('dayOrNight');
const image = document.getElementById('image-container');
let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; // Check if the user prefers dark mode
const root = document.documentElement; // Select the :root element

function toggleDarkMode() { 
  if (isDarkMode) {
    image.style.backgroundImage = "url('landing/assets/dark-mode-background2.png')";
    // Set the CSS variables for dark mode
    root.style.setProperty('--red', '#fff9c7');
    root.style.setProperty('--green', '#ffa1ea');
    root.style.setProperty('--description', '#280a33');
    root.style.setProperty('--description-text', '#ffa1ea');
    root.style.setProperty('--projects', '#fff9c7');
    root.style.setProperty('--cursorOut', '#ffc0a7');
    root.style.setProperty('--cursorIn', '#280a33');
    root.style.setProperty('--bodyColor', '#07041e');
    //set the icons src for dark mode 
    gitHubIcon.src = "landing/assets/githubIconNight.png"; 
    state.src = "landing/assets/moon.png";
  } else {
    // User prefers light mode
    image.style.backgroundImage = "url('landing/assets/container-background.png')";
    // Set the CSS variables for light mode
    root.style.setProperty('--red', '#E6F2F4'); 
    root.style.setProperty('--green', '#4ad9db');
    root.style.setProperty('--description', '#D5D3CC');
    root.style.setProperty('--description-text', '#297d97');
    root.style.setProperty('--projects', '#0f91b8');
    root.style.setProperty('--cursorOut', '#406768');
    root.style.setProperty('--cursorIn', '#D5D3CC');
    root.style.setProperty('--bodyColor', 'white');
    //set the icons src for light mode 
    gitHubIcon.src = "landing/assets/githubIconDay.png";
    state.src = "landing/assets/sun.png"; 
  }
  
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
  if(isDarkMode){
    isDarkMode = false;
  } else {
    isDarkMode = true;
  } 
  toggleDarkMode();
  
});

toggleDarkMode(); // Initial call to set the mode based on user preference


