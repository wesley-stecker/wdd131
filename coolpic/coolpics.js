let buttonmenu = document.querySelector(".button1");
let menu = document.querySelector("nav");

function menuhide() {
    
    menu.classList.toggle('hide');
}



function handleResize(){
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }

}

buttonmenu.addEventListener("click", menuhide);
window.addEventListener("resize", handleResize);


handleResize();

const pic = "norris-full.jpeg"
const alt = "big image"

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img id="bigimage" src="${pic}" alt="${alt}">
    </div>`;
}


function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
  const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
  const src = clickedElement.getAttribute('src'); 
  const srcParts = src.split('-');
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  const newImageSrc = `${srcParts[0]}-full.jpeg`;
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
  const viewerHTML = viewerTemplate(newImageSrc, clickedElement.getAttribute('alt'));
  document.body.insertAdjacentHTML("afterbegin", viewerHTML);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
  document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}
function closeViewer() {
  const viewerElement = document.querySelector('.viewer');
  if (viewerElement) {
      viewerElement.remove(); 
  }
}
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        // Ensure the clicked target is an image
        viewHandler(event);
    }
});