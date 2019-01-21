var cartItems = [];
var taxRate = 12.5;

function addToCart(data) {
  return cartItems.push(data);
}

function calculateCost() {
  return cartItems
    .map(product => product.price * product.qty)
    .reduce((total, product) => total + product, 0)
    .toFixed(2);
}

function calculateTaxAmount() {
  return Math.round((taxRate / 100) * calculateCost());
}

function totalCartPrice() {
  return +calculateCost() + +calculateTaxAmount();
}

module.exports = {
  cartItems,
  addToCart,
  calculateCost,
  calculateTaxAmount,
  totalCartPrice
};
