
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
    const eyeImg = "../img/eye-outline-black.svg";
    const greenEyeImg = "../img/eye-outline-green.svg";
    const githubImg = "../img/github.svg";
    const greenGithubImg = "../img/github-green.svg";
    const heartImg = "../img/heart-outline-black.svg";
    const heartBorderGreenImg = "../img/heart-outline-green.svg";
    const heartTotalGreenImg = "../img/heart-total-green.svg";

    for (const icon of projectIcons) {

        icon.addEventListener("mouseenter", () => {
            console.log(icon.className.includes("eye"));
            console.log(icon.className);
            if (icon.className.includes("eye")) {
                console.log(icon);
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
                icon.src = eyeImg;
            } else if (icon.className.includes("github")) {
                icon.src = githubImg;
            } else if (icon.className.includes("clicked")) {
                icon.src = heartTotalGreenImg;
            } else {
                icon.src = heartImg;
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



// add shadows to header and main-content sections
// make the font-sizes responsive
// increase size for TOP div
// tweak toggle and add light-dark mode functionality
// finish interactive elements tweaking