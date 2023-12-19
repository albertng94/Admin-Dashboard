
//FUNCTION TO RESIZE THE SIDE-BAR ON CLICK
resizeSidebar();


function resizeSidebar() {
    const sidebarHandlerRetract = document.getElementById("sidebar-handler-retract");
    const header = document.getElementById("header");
    const mainContent = document.getElementById("main-content");
    const titleDiv = document.getElementById("title-div");
    const sidebarHandlerExpand = document.getElementById("sidebar-handler-expand");

    sidebarHandlerRetract.addEventListener("click", () => {
        header.classList.add("invadingHeader");
        mainContent.classList.add("invadingMain-content");
        titleDiv.classList.add("repositionLogo");
        sidebarHandlerExpand.classList.add("expandHandler");
    });

    sidebarHandlerExpand.addEventListener("click", () => {
        header.classList.remove("invadingHeader");
        mainContent.classList.remove("invadingMain-content");
        titleDiv.classList.remove("repositionLogo");
        sidebarHandlerExpand.classList.remove("expandHandler");
    });
}

//FUNCTION TO STYLE PROJECT ICONS ON HOVER AND HEART ICON ON CLICK

styleIcons();

function styleIcons() {
    const projectIcons = document.getElementsByClassName("project-icon");
    const eyeImg = "./img/eye-outline-black.svg";
    const greenEyeImg = "./img/eye-outline-green.svg";
    const whiteEyeImg = "./img/eye-outline-white.svg";
    const githubImg = "./img/github.svg";
    const greenGithubImg = "./img/github-green.svg";
    const whiteGithubImg = "./img/github-white.svg";
    const heartImg = "./img/heart-outline-black.svg";
    const heartBorderGreenImg = "./img/heart-outline-green.svg";
    const heartTotalGreenImg = "./img/heart-total-green.svg";
    const heartBorderWhiteImg = "./img/heart-outline-white.svg";

    for (const icon of projectIcons) {

        icon.addEventListener("mouseenter", () => {
            if (icon.className.includes("eye")) {
                icon.src = greenEyeImg;
            } else if (icon.className.includes("github")) {
                icon.src = greenGithubImg;
            } else if (icon.className.includes("clicked")) {
                icon.src = heartTotalGreenImg;
            } else {
                icon.src = heartBorderGreenImg;
            }
        }); 

        icon.addEventListener("mouseleave", () => {
            if (icon.className.includes("eye")) {
                if (document.body.className.includes("dark")) {
                    icon.src = whiteEyeImg;
                } else {
                    icon.src = eyeImg;
                }
            } else if (icon.className.includes("github")) {
                if (document.body.className.includes("dark")) {
                    icon.src = whiteGithubImg;
                } else {
                    icon.src = githubImg;
                }
            } else if (icon.className.includes("clicked")) {
                icon.src = heartTotalGreenImg;
            } else {
                if (icon.id === "heart" && document.body.className.includes("dark")) {
                    icon.src = heartBorderWhiteImg;
                } else {
                    icon.src = heartImg;
                }
            }
        });

        icon.addEventListener("click", () => {
            console.log(icon.classList["add"]);
            console.log(icon.classList);
            console.log(icon.className);
            if (icon.className.includes("clicked")) {
                icon.src = heartImg;
                icon.classList.remove("clicked");
            } else if (icon.id === "heart") {
                icon.src = heartTotalGreenImg;
                icon.classList.add("clicked");
            }
        });
    }
}


//APPLY DARKMODE/LIGHTMODE

let darkMode = localStorage.getItem("darkMode");
const toggle = document.getElementById("toggle");

const enableDarkMode = () => {
    document.body.classList.add("dark");

    localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {
    document.body.classList.remove("dark");

    localStorage.setItem("darkMode", null)
}

if (darkMode === "enabled") {
    enableDarkMode();
    swapImgOnDarkMode();
}

toggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


//CHANGE IMAGES ON DARKMODE/LIGHTMODE

toggle.addEventListener("click", () => {
    if (document.body.className.includes("dark")) {
        swapImgOnDarkMode();
    } else {
        swapImgOnLightMode();
    }
});


function swapImgOnDarkMode() {
    const images = document.querySelectorAll("img");

    const heartBorderWhiteImg = "./img/heart-outline-white.svg";
    const whiteEyeImg = "./img/eye-outline-white.svg";
    const whiteGithubImg = "./img/github-white.svg";
    const rocket = "./img/rocket-black.svg";
    const home = "./img/home-black.svg"; 
    const profile = "./img/profile-black.svg"; 
    const messages = "./img/messages-black.svg"; 
    const history = "./img/history-black.svg"; 
    const tasks = "./img/tasks-black.svg"; 
    const communities = "./img/communities-black.svg"; 
    const settings = "./img/settings-black.svg"; 
    const support = "./img/support-black.svg"; 
    const privacy = "./img/privacy-black.svg"; 
    const loupe = "./img/loupe-grey.svg"; 
    const sun = "./img/sun.svg"; 
    const moon = "./img/moon-white.svg";
    const githubBig = "./img/github-white.svg";
    const handlerRetract = "./img/minimize-black.svg";
    const handlerExpand = "./img/minimize-flipped-black.svg";    
    
    for (const image of images) {
        if (document.body.className.includes("dark")) {
            if (image.className.includes("eye")) {
                image.src = whiteEyeImg;
            } else if (image.className.includes("github")) {
                image.src = whiteGithubImg;
            } else if (image.id === "heart") {
                image.src = heartBorderWhiteImg;
            } else if (image.id === "rocket") {
                image.src = rocket;
            } else if (image.id === "home") {
                image.src = home;
            } else if (image.id === "profile") {
                image.src = profile;
            } else if (image.id === "messages") {
                image.src = messages;
            } else if (image.id === "history") {
                image.src = history;
            } else if (image.id === "tasks") {
                image.src = tasks;
            } else if (image.id === "communities") {
                image.src = communities;
            } else if (image.id === "settings") {
                image.src = settings;
            } else if (image.id === "support") {
                image.src = support;
            } else if (image.id === "privacy") {
                image.src = privacy;
            } else if (image.id === "loupe") {
                image.src = loupe;
            } else if (image.id === "sun") {
                image.src = sun;
            } else if (image.id === "moon") {
                image.src = moon;
            } else if (image.id === "github-big") {
                image.src = githubBig;
            } else if (image.id === "sidebar-handler-retract") {
                image.src = handlerRetract;
            } else if (image.id === "sidebar-handler-expand") {
                image.src = handlerExpand;
            } 
        }
    }
}


function swapImgOnLightMode() {
    const images = document.querySelectorAll("img");

    const heartBorderWhiteImg = "./img/heart-outline-black.svg";
    const whiteEyeImg = "./img/eye-outline-black.svg";
    const whiteGithubImg = "./img/github.svg";
    const rocket = "./img/rocket.svg";
    const home = "./img/home.svg"; 
    const profile = "./img/profile.svg"; 
    const messages = "./img/messages.svg"; 
    const history = "./img/history.svg"; 
    const tasks = "./img/tasks.svg"; 
    const communities = "../img/communities.svg"; 
    const settings = "./img/settings.svg"; 
    const support = "./img/support.svg"; 
    const privacy = "./img/privacy.svg"; 
    const loupe = "./img/loupe.svg"; 
    const sun = "./img/sun-yellow.svg"; 
    const moon = "./img/moon.svg";
    const githubBig = "./img/github.svg";
    const handlerRetract = "./img/minimize.svg";
    const handlerExpand = "./img/minimize-flipped.svg";    
    
    for (const image of images) {
        if (!document.body.className.includes("dark")) {
            if (image.className.includes("eye")) {
                image.src = whiteEyeImg;
            } else if (image.className.includes("github")) {
                image.src = whiteGithubImg;
            } else if (image.id === "heart") {
                image.src = heartBorderWhiteImg;
            } else if (image.id === "rocket") {
                image.src = rocket;
            } else if (image.id === "home") {
                image.src = home;
            } else if (image.id === "profile") {
                image.src = profile;
            } else if (image.id === "messages") {
                image.src = messages;
            } else if (image.id === "history") {
                image.src = history;
            } else if (image.id === "tasks") {
                image.src = tasks;
            } else if (image.id === "communities") {
                image.src = communities;
            } else if (image.id === "settings") {
                image.src = settings;
            } else if (image.id === "support") {
                image.src = support;
            } else if (image.id === "privacy") {
                image.src = privacy;
            } else if (image.id === "loupe") {
                image.src = loupe;
            } else if (image.id === "sun") {
                image.src = sun;
            } else if (image.id === "moon") {
                image.src = moon;
            } else if (image.id === "github-big") {
                image.src = githubBig;
            } else if (image.id === "sidebar-handler-retract") {
                image.src = handlerRetract;
            } else if (image.id === "sidebar-handler-expand") {
                image.src = handlerExpand;
            } 
        }
    }
}
    





// add shadows to header and main-content sections
// make the font-sizes responsive
// increase size for TOP div
// fix toggle inner button position when user is on dark mode and reloads the page.
// use local storage to keep likes after reloding?