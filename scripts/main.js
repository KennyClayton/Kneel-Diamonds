import { KneelDiamonds } from "./KneelDiamonds.js"

// maincontainer is a variable looking for and id of #container on the html page
const mainContainer = document.querySelector("#container")

// the below function then uses the search tool above to say "when you search and find elements with id of container, fill up the "inner" html in the #container element with the KneelDiamonds html data, which is pretty much the entire web page showing the options for jewelry, etc
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

// this calls the function so it can be used.
// I also asked chatGPT which provided this response:
/*
"So, the reason why renderAllHTML is called at the bottom is to trigger the execution of the function and update the HTML content within the mainContainer element. It ensures that the initial rendering of the HTML content happens when the script is run. Without calling renderAllHTML(), the HTML content wouldn't be updated initially, and the KneelDiamonds data wouldn't be displayed on the webpage."
*/
renderAllHTML()

// this module needs to regenerate HTML after changes are made by the user on the webpage (as the user interacts with the options??? ot just after the click to confirm the order?). So below we added an event listener to do that.
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})