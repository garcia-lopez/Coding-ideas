let isDarkMode = false;

function darkMode() {
    const moon = document.getElementById('celestialBody');
    const body_background = document.getElementById('container');
    const centro = document.getElementById('centro');

    if (isDarkMode) {
        moon.style.animation = 'DarkNight 1s linear';
        centro.style.display = 'block';
        centro.style.animation = 'DarkNightCenter 0.5s linear';
        body_background.style.backgroundImage = 'radial-gradient(circle at center, #2B124C 60%, #010119)';
        moon.style.backgroundColor= 'white';
        moon.style.boxShadow = '-10px 0 15px 5px rgba(255, 255, 255, 0.7), inset 10px 0 50px 40px rgb(160, 147, 147, 0.5)';
        hideClouds();
        isDarkMode = false;
    } else {
        moon.style.animation = 'SunnyDay 0.5s linear';
        centro.style.animation = 'SunnyDayCenter 0.5s linear';
        body_background.style.backgroundImage = 'radial-gradient(circle at center, #f7f5bc 20%, #48CAE4)';
        moon.style.backgroundColor= '#f7f5bc';
        moon.style.boxShadow = 'inset 0px 0px 25px 5px #ece75f';
        centro.style.display = 'none'
        showClouds();
        isDarkMode = true;
    }
}

function showClouds() {
    const clouds = document.querySelectorAll('.clouds');
    clouds.forEach((cloud, index) => {
        const cloudI = document.getElementById(`cloud${index + 1}`);
        if (cloudI) {
            cloudI.src = 'assets/nubes.webp';
        }
    });
}

function hideClouds() {
    const clouds = document.querySelectorAll('.clouds');
    clouds.forEach((c, index) => {
        const cloudI = document.getElementById(`cloud${index + 1}`);
        if (cloudI) {
            cloudI.src = 'assets/nubesNight.png';
            console.log('holaaaaaaa');
        }
    });
  }