let themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleTheme);
function toggleTheme () {
    if (themeToggle.value == "OFF") {
        themeToggle.value = "ON";
      } else {
        themeToggle.value = "OFF";
      }
}