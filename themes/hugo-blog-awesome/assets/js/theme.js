(() => {
    "use strict";
    const LS_THEME_KEY = "theme";
    const THEMES = {
        LIGHT: "light",
        DARK: "dark",
        AUTO: "auto",
    };

    window.addEventListener("DOMContentLoaded", () => {
        // Theme switch
        const lamp = document.getElementById("mode");

        //lamp.addEventListener("click", () => toggleTheme());

        // Blur the content when the menu is open
        const cbox = document.getElementById("menu-trigger");

        cbox.addEventListener("change", function () {
            const area = document.querySelector(".wrapper");
            if (this.checked) return area.classList.add("blurry");
            area.classList.remove("blurry");
        });
    });
})();
