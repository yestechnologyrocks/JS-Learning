// Shopping Cart

const order = {
  orderId: "ORD-001",
  customerName: "Neha Sharma",
  totalAmount: 2499,
  deliveryAddress: {
    city: "Pune",
    pincode: "400013",
  },
};

const updatedOrder = { ...order };

updatedOrder.deliveryAddress.city = "Mumbai";

// console.log(order);

// Safely updated nested data

const orderForNextCustomer = {
  orderId: "ORD-002",
  customerName: "Ankit Sharma",
  totalAmount: 2499,
  deliveryAddress: {
    city: "Pune",
    pincode: "400013",
  },
};

const copiedOrderForNextCustomer = {
  ...orderForNextCustomer, // copy the Top level object
  deliveryAddress: {
    // Copy the Nested object
    ...orderForNextCustomer.deliveryAddress,
  },
};

copiedOrderForNextCustomer.deliveryAddress.city = "Mumbai";
console.log(orderForNextCustomer);
