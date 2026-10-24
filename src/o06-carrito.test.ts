// P1 · Tests de O6 con Vitest
import { describe, expect, it } from "vitest";
import { coffees } from "./data";
import { addToCart, cartTotal, changeQuantity, removeFromCart, type Cart } from "./o06-carrito";

describe("addToCart", () => {
  it("añade un café nuevo con cantidad 1", () => {
    expect(addToCart([], 1)).toEqual([{ coffeeId: 1, quantity: 1 }]);
  });

  it("suma 1 si el café ya está", () => {
    expect(addToCart([{ coffeeId: 1, quantity: 1 }], 1)).toEqual([{ coffeeId: 1, quantity: 2 }]);
  });

  it("no modifica el carrito original", () => {
    const empty: Cart = [];
    addToCart(empty, 1);
    expect(empty).toEqual([]);
  });

  it("no modifica los elementos del carrito original", () => {
    const cart: Cart = [{ coffeeId: 1, quantity: 1 }];
    addToCart(cart, 1);
    expect(cart[0].quantity).toBe(1);
  });

  it("copia sólo el elemento que cambia", () => {
    const before: Cart = [
      { coffeeId: 1, quantity: 1 },
      { coffeeId: 4, quantity: 1 },
    ];
    const after = addToCart(before, 1);
    expect(after).not.toBe(before);
    expect(after[0]).not.toBe(before[0]);
    expect(after[1]).toBe(before[1]);
  });
});

describe("removeFromCart", () => {
  it("quita el café sin tocar el original", () => {
    const cart: Cart = [
      { coffeeId: 1, quantity: 2 },
      { coffeeId: 4, quantity: 3 },
    ];
    expect(removeFromCart(cart, 1)).toEqual([{ coffeeId: 4, quantity: 3 }]);
    expect(cart).toHaveLength(2);
  });
});

describe("changeQuantity", () => {
  const cart: Cart = [{ coffeeId: 4, quantity: 1 }];

  it("pone la cantidad indicada", () => {
    expect(changeQuantity(cart, 4, 3)).toEqual([{ coffeeId: 4, quantity: 3 }]);
  });

  it("quita el café si la cantidad es 0 o menos", () => {
    expect(changeQuantity(cart, 4, 0)).toEqual([]);
    expect(changeQuantity(cart, 4, -2)).toEqual([]);
  });

  it("no modifica el carrito original", () => {
    changeQuantity(cart, 4, 3);
    expect(cart).toEqual([{ coffeeId: 4, quantity: 1 }]);
  });
});

describe("cartTotal", () => {
  it("aplica los descuentos", () => {
    const cart: Cart = [
      { coffeeId: 1, quantity: 2 },
      { coffeeId: 4, quantity: 3 },
    ];
    expect(cartTotal(cart, coffees)).toBeCloseTo(58.32);
  });

  it("cuenta como 0 un café que no existe", () => {
    expect(cartTotal([{ coffeeId: 99, quantity: 1 }], coffees)).toBe(0);
  });
});
