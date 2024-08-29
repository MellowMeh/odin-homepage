import "../style/index.css";
import favicon from "../image/favicon.ico.png"
import { toggleTheme } from "../module/theme-toggle";

let themeSlider = document.querySelector("#checkbox");
themeSlider.addEventListener("click", toggleTheme);
toggleTheme();