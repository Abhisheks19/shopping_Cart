const cart = require("./cart");

describe("Step1", () => {
  it("Check Empty Shopping Cart", () => {
    expect(cart.cartItems.length).toEqual(0);
  });

  it("Adding Dove Soap to the cart", () => {
    cart.addToCart({ id: 1, name: "Dove Soap", price: 39.99, qty: 5 });
    expect(cart.cartItems.length).toEqual(1);
  });

  it("Shopping Cart should contains 5 Dove Soap", () => {
    expect(cart.getItemQuantity()).toEqual(5);
  });

  it("Dove Soap with a unit price of 39.99", () => {
    expect(cart.getItemPrice()).toEqual(39.99);
  });

  it("Shopping Cart total price to be 199.95", () => {
    expect(cart.calculateCost()).toEqual("199.95");
  });
});
