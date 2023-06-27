import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // So styles is an array....map method on the array...argument to tell the map method HOW to map the array.....which is to pull the objects out of the array and use the data from those objects in the html string
    const listItemsArray = styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" />The ${style.style} is priced at ${style.price}
            </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

