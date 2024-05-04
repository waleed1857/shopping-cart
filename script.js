let myCatalog = document.getElementById("catalog");
let myContent = document.getElementById("content");
let itemName = document.getElementById("i-name");
let itemPrice = document.getElementById("i-price");
let itemDes = document.getElementById("i-des");
let bTn = document.getElementById("btn");

// Function to display item data
function displayItem(items) {
    myContent.innerHTML = ""; // Clear previous content
    items.forEach(item => {
        myContent.innerHTML += `
        <div>
        <h2>Details:-</h2>
        <p>Name: ${item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Description: ${item.description}</p>
    </div>`
    });
}

// Load existing data from local storage on page load
window.addEventListener('load', function() {
    let storedData = localStorage.getItem("itemStored");
    if (storedData) {
        let items = JSON.parse(storedData);
        displayItem(items);
    }
});

// Event listener for the button click
bTn.addEventListener("click", function() {
    // Create new student object
    let newItem = {
        name: itemName.value,
        price: itemPrice.value,
        description: itemDes.value
    };

    // Retrieve existing item data from local storage
    let items = JSON.parse(localStorage.getItem("itemStored")) || [];

    // Push new item object into the array
    items.push(newItem);

    // Save updated item data to local storage
    localStorage.setItem("itemStored", JSON.stringify(items));

    // Display all item data
    displayItem(items);
});