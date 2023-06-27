import { getMetals, getOrders, getSizes, getStyles } from "./database.js"

// 
const buildOrderListItem = (order) => {
    // commented out the below becuase that was all the project wanted at first: to list the sentence "order 1 was place on 12/30/2022"
    //     return `<li>
    //         Order #${order.id} was placed on ${order.timestamp}
    //     </li>`
    // }

    // now we are going to make the buildOrderListItem display "Order#1 cost $100" or whatever the total would be
    const metals = getMetals()

    // Remember that the function you pass to find() must return true/false
    // foundMetal will find the price of the metal the user clicked on.
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    
    const styles = getStyles()
// this will match the clicked style Id to the 
    const foundStyle = styles.find(
        // (style) below is a parameter. But what is coming in place of that parameter? As chatGPT explained:
            // "The find method takes a callback function as an argument. 
            // The callback function is executed for each element in the styles array.
                // What is a callback function? It's when another function is used when called in the current function.
                // So the styles function (or getStyles function really) is used here....which brings in the array of style objects from the database
                    // Recall that these are the three style objects in our database:
                    // styles: [
                    //     { id: 1, style: "Classic", price: 500 },
                    //     { id: 2, style: "Modern", price: 710 },
                    //     { id: 3, style: "Vintage", price: 965 }
            // The current element is represented by the parameter "style". So the 3 objects above will be looked at. 
            // Inside the callback function, there is a condition that checks if the id property of the style object is equal to the styleId property of the order object that was clicked by the user
            // If the condition is true for any element in the styles array, the find method will return that element.
            // If no element satisfies the condition, the find method will return undefined.
            //* Overall, this code is attempting to find an element in the styles array that has a matching id with the styleId property of the order object that the user clicked. The result is stored in the foundStyle constant.
        (style) => {
            return style.id === order.styleId
        }
    )
    
    const sizes = getSizes()
// this will match the clicked size Id to the 
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    // do i just add the prices for each of the other two functions, like this?
    const totalCost = (foundMetal.price + foundSize.price + foundStyle.price)

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

        
    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

