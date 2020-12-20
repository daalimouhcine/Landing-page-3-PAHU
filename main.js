


//----- Functions
function hoverChair(e) {
    e.classList.add("hover-on");
    
}
function outChair(e) {
    e.classList.remove("hover-on");
}


function unhidenMenu() {
    let menu = document.getElementById("hiden-menu");
    menu.style.right = "0%";
    
}
function hidenMenu() {
    let menu = document.getElementById("hiden-menu");
    menu.style.right = "-100%";
}