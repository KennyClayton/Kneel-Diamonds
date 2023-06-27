import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // So an object comes into your function, and a string gets returned. That string goes into a new array.
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })
    // So this joins all of the objects created by the map method
    html += listItems.join("")
    html += "</ul>"

    return html
}

// it sounds like the .map method is when we take an array of objects (the sizes array, for example) and we "map it" based on each object (size in this exmaple) and it can return the html string with the size id and carets injected. And all of that is stored in a variable called listItems because it lists all the objects/items in a list.
// THEN, DON'T FORGET TO JOIN those elements with listItems.join("")

// Ask yourself, sizes.map(how?)
// This is how: sizes.map(insert an object function here). 
// And in this case, "size" refers to each size object of the sizes array of objects.
// What do we want it to do? We want to return an html string with the size iD and size Carets injected into the string.