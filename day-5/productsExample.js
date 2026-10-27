const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
  },
  {
    id: 2,
    name: "Notebook",
    category: "Stationery",
    price: 120,
  },
  {
    id: 3,
    name: "Water Bottle",
    category: "Home & Kitchen",
    price: 499,
  },
  {
    id: 4,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 2499,
  },
  {
    id: 5,
    name: "Running Shoes",
    category: "Fashion",
    price: 1999,
  },
];

function addProductInCart(product) {
  return new Promise((resolve, reject) => {
    console.log("Pending State");

    setTimeout(() => {
      const foundProduct = products.find((item) => item.name === product.name);
      if (foundProduct) {
        resolve("The product found");
      } else {
        reject("Not found");
      }
    }, 1000);
  });
}

addProductInCart({ name: "Wireless Mouse" })
  .then((product) => {
    console.log("Fulfilled", product);
  })
  .catch((error) => {
    console.log("Rejected", error);
  })
  .finally(() => {
    // Stop the please wait message
    console.log("All changes are done");
  });

//Guided practice
// Create `getProject(shouldSucceed)`. On true, resolve an object with `name: 'WorkHub'`.
// On false, reject with an Error. Use then to display the name, catch to display a friendly error,
// and finally to log `Request finished`.

// Student homework
// Explain pending, fulfilled, and rejected in your own words using a real-life example.
// Create `getWelcomeMessage(shouldSucceed)`. Resolve with `Welcome to WorkHub` when true;
// reject with an Error when false. Handle both outcomes.
// Add a finally block that logs `Finished trying to load message`.
// Change the timeout to 2 seconds. Predict what logs immediately and what logs later.
// Write one sentence: Why should an application handle a rejected Promise?
