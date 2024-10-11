let buttonmenu = document.querySelector(".button1");
let menu = document.querySelector("nav");

function menuhide() {
    
    menu.classList.toggle('hide');
}



function hangleResize(){
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }

}

buttonmenu.addEventListener("click", menuhide);
window.addEventListener("resize", handleResize);


handleResize();