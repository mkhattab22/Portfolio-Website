const toggleTheme = document.getElementById("theme_change");
const imageSVG = document.getElementById("about-me_svg");

toggleTheme.onclick = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleTheme.src = "./assets/light.png";
    imageSVG.src = "./assets/to-the-moon.svg";
  } else {
    toggleTheme.src = "./assets/dark.png";
    imageSVG.src = "./assets/augmented-reality.svg";
  }
};
