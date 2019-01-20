var cartItems = [];
var itemQuantity = 0;
var itemPrice = 0;

function addToCart(data) {
  return cartItems.push(data);
}

function calculateCost() {
  return cartItems
    .map(product => product.price * product.qty)
    .reduce((total, product) => total + product, 0)
    .toFixed(2);
}

function getItemQuantity() {
  cartItems.forEach(value => (itemQuantity = value.qty));
  return itemQuantity;
}

function getItemPrice() {
  cartItems.forEach(value => (itemPrice = value.price));
  return itemPrice;
}

module.exports = {
  addToCart,
  calculateCost,
  cartItems,
  getItemQuantity,
  getItemPrice
};
