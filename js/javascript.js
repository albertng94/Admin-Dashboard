

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

// add shadows to header and main-content sections
// make the font-sizes responsive
// increase size for TOP div
// tweak toggle and add light-dark mode functionality
// finish interactive elements tweaking