const cart = require("./cart");

describe("Step3", () => {
  it("Check Empty Shopping Cart", () => {
    expect(cart.cartItems.length).toEqual(0);
  });

  it("Adding 2 Dove Soap to the Shopping Cart", () => {
    cart.addToCart({ id: 1, name: "Dove Soap", price: 39.99, qty: 2 });
    expect(cart.cartItems.length).toEqual(1);
  });

  it("Adding 2 Axe Deo to the Shopping Cart", () => {
    cart.addToCart({ id: 2, name: "Axe Deo", price: 99.99, qty: 2 });
    expect(cart.cartItems.length).toEqual(2);
  });

  it("Shopping Cart should contains 2 Dove Soap", () => {
    expect(cart.cartItems[0].qty).toEqual(2);
  });

  it("Dove Soap with a unit price of 39.99", () => {
    expect(cart.cartItems[0].price).toEqual(39.99);
  });

  it("Shopping Cart should contains 2 Axe Deo", () => {
    expect(cart.cartItems[1].qty).toEqual(2);
  });

  it("Axe Deo with a unit price of 99.99", () => {
    expect(cart.cartItems[1].price).toEqual(99.99);
  });

  it("Shopping Cart sales tax amount to be 35", () => {
    expect(cart.calculateTaxAmount()).toEqual(35);
  });

  it("Shopping Cart total price to be 314.96", () => {
    expect(cart.totalCartPrice()).toEqual(314.96);
  });
});
