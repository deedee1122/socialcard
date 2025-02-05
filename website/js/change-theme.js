let changingTheme = document.getElementById("changing-theme");
changingTheme.addEventListener("change", bmode)

function bmode() {
    if (changingTheme.value === "dark") {
        document.documentElement.style.colorScheme = "dark";
    } else
        document.documentElement.style.colorScheme = "light";
}




