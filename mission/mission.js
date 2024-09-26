let themeSelector = document.getElementById("color");// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
themeSelector.addEventListener('change', changeTheme);
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
let selectedTheme = themeSelector.value;
let bodyElement = document.body;
let logo = document.querySelector("img");
// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
if (selectedTheme === "dark"){
    bodyElement.classList.add("dark");
    logo.src = "byui-logo_white.png";
}
if (selectedTheme === "light"){
    bodyElement.classList.remove("dark");
    logo.src = "byui-logo_blue.webp";
}
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
