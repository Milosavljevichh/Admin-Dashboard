



function changeTheme() {
    var all = document.querySelectorAll('*');

    all.forEach(function(element) {
        //changing from blue to green
        if (element.classList.contains("blue-theme") === true) {
            element.classList += " green-theme";
            element.classList.remove("blue-theme");
        } else if (element.classList.contains("profile-pic-blue")) {
            element.classList += " profile-pic-green ";
            element.classList.remove("profile-pic-blue");
        } else if (element.classList.contains("feed-user-pic-blue-theme")) {
            element.classList += " feed-user-pic-green-theme";
            element.classList.remove("feed-user-pic-blue-theme");
        } else if (element.classList.contains("blue-theme-card")) {
            element.classList += " green-theme-card";
            element.classList.remove("blue-theme-card");
        }

        //from green to blue
        else if (element.classList.contains("green-theme") === true) {
            element.classList += " blue-theme";
            element.classList.remove("green-theme");
        } else if (element.classList.contains("profile-pic-green")) {
            element.classList += " profile-pic-blue ";
            element.classList.remove("profile-pic-green");
        } else if (element.classList.contains("feed-user-pic-green-theme")) {
            element.classList += " feed-user-pic-blue-theme";
            element.classList.remove("feed-user-pic-green-theme");
        } else if (element.classList.contains("green-theme-card")) {
            element.classList += " blue-theme-card";
            element.classList.remove("green-theme-card");
        }
    }) 
};