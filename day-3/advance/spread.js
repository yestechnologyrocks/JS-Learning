// ... Spread operator with Array
const task = ["Review PR", "Update profile"];

const newTask = [...task, "Delete unwanted file"]; // Length 3

console.log(newTask);

// ... Spread operator with object

const product = {
  id: 1,
  productName: "Portronics",
  numberOfKeys: 104,
  price: 500,
};

const productWithImages = {
  ...product,
  imagesURL: "https://amazon.in/images",
};

console.log(productWithImages);
