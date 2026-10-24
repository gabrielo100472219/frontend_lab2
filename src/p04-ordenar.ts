// P4 · Ordenar por cualquier propiedad
import { coffees, customers } from "./data";

// K extends keyof T: key sólo puede ser una propiedad que exista en T
export const sortBy = <T, K extends keyof T>(items: T[], key: K): T[] =>
  items.toSorted((a, b) => {
    const left = a[key];
    const right = b[key];
    if (typeof left === "string" && typeof right === "string") {
      return left.localeCompare(right);
    }
    if (typeof left === "number" && typeof right === "number") {
      return left - right;
    }
    return 0; // Otros tipos (arrays, objetos, undefined) no tienen un orden natural: se quedan como están
  });

console.log("── P4 · Ordenar por cualquier propiedad ──");

console.log(sortBy(coffees, "price").map((coffee) => coffee.price));
// → [10.5, 12.9, 13.2, 13.9, 14.9, 15.5]
console.log(sortBy(customers, "name").map((customer) => customer.name));
// → ["Ana", "Lucía", "Marcos"]
console.log(coffees.map((coffee) => coffee.price));
// → [14.9, 12.9, 15.5, 10.5, 13.2, 13.9]. El original no se ha ordenado

// @ts-expect-error: "color" no es una clave de Coffee. Si dejara de dar error, tsc avisaría
sortBy(coffees, "color");
// → Argument of type '"color"' is not assignable to parameter of type 'keyof Coffee'.
