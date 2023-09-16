



function changeTheme() {
    // blueTheme.classList += " green-theme";
    // blueTheme.classList.remove("blue-theme");
    var blueTheme = document.querySelectorAll('.blue-theme');
    blueTheme.forEach(function(element) {
        element.classList += " green-theme";
        element.classList.remove("blue-theme");
    })
};