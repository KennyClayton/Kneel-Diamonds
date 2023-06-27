/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693
        }
    ],
    // below we will store user input in this data storage unit (key) called orderBuilder
    // i'm gussing we store as an object because the data WILL change and we don't need an array to store changing data. We use arrays for static data?
    orderBuilder: {

    },

}

// below we are passing the "id" as a parameter and using it to equal the metal's Id from the oderBuilder's array. Remember that the orderBuilder array is created by the user's input.
// so these functions, in short, do what? 
    // They use data received from user input and store that data as object sets....so each new object will have a metal, size and style property chosen by the user and stored with a new unique id (i'm guessing). 
export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

// again, what does this function below do? It gives a user-selected id to the setSize variable
// when the user clicks size radio button for "1.5", JS will grab the id associated with the user's click on 1.5 and insert that number into the "id" parameter below. 
// Then JS will look at the database called orderBuilder and create a sizeId property and assign it a value of "1" or whichever id number was clicked
export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}
 
// below does the same thing except it generates an orderBuilder object for the style clicked by the user. It's setting the style in the order for the user (once clicked).
export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}




export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}



// the below function will take all the currently selected options from the user and store those choices, in newOrder variable, create an order number, etc.
// Basically this changes the data to a permanent state once the creat custom order button is clicked.
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1 // I'm guessing the minus one is to take away this order itself from the tally. so if this order was 256, then we want to only start at 255 when creating our order number below.
    newOrder.id = database.customOrders[lastIndex].id + 1 // this will create the new order id using the next custom order number in line plus 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}