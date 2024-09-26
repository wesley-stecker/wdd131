const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newphoto = document.createElement("img");
newphoto.setAttribute("src", "https://picsum.photos/200" );
newphoto.setAttribute("alt", "Image");
document.body.appendChild(newphoto);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const tryit = document.createElement("section");
tryit.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(tryit);