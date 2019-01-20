const cart = require("./cart");

describe("Step2", () => {
  it("Check Empty Shopping Cart", () => {
    expect(cart.cartItems.length).toEqual(0);
  });

  it("Adding Dove Soap to the cart with the quantity of 5", () => {
    cart.addToCart({ id: 1, name: "Dove Soap", price: 39.99, qty: 5 });
    expect(cart.cartItems.length).toEqual(1);
  });

  it("Adding another 3 quantity of Dove Soap to the cart", () => {
    cart.addToCart({ id: 1, name: "Dove Soap", price: 39.99, qty: 3 });
    expect(cart.cartItems.length).toEqual(1);
  });

  it("Shopping Cart should contains 8 Dove Soap", () => {
    expect(cart.getItemQuantity()).toEqual(8);
  });

  it("Dove Soap with a unit price of 39.99", () => {
    expect(cart.getItemPrice()).toEqual(39.99);
  });

  it("Shopping Cart total price to be 319.92", () => {
    expect(cart.calculateCost()).toEqual("319.92");
  });
});
