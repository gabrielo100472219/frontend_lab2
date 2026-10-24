// O5 · Métodos de arrays (tema 25)
import { coffees } from "./data";
import { formatPrice } from "./o02-funciones";
import { coffeeCard } from "./o03-destructuring";
import type { Coffee } from "./types";

export const availableCoffees = (list: Coffee[]): Coffee[] =>
  list.filter((coffee) => coffee.stock > 0);

export const catalogLabels = (list: Coffee[]): string[] =>
    availableCoffees(list)
    .toSorted((a, b) => a.price - b.price)
    .map(coffeeCard);

export const stockValue = (list: Coffee[]): number =>
  list.reduce((total, coffee) => total + coffee.price * coffee.stock, 0);

console.log("── O5 · Métodos de arrays ──");

console.log(availableCoffees(coffees).map((coffee) => coffee.name));
// → ["Etiopía Yirgacheffe", "Colombia Huila", "Brasil Cerrado", "Guatemala Antigua"]

console.log(catalogLabels(coffees));
// → ["Brasil Cerrado (Brasil) · 10.50 €",
//    "Colombia Huila (Colombia) · 12.90 €",
//    "Guatemala Antigua (Guatemala) · 13.20 €",
//    "Etiopía Yirgacheffe (Etiopía) · 14.90 €"]

console.log(formatPrice(stockValue(coffees))); // → "585.60 €"

console.log(coffees.some((coffee) => coffee.stock === 0));                       // → true
console.log(coffees.every((coffee) => coffee.notes.length > 0));                 // → true
console.log(coffees.find((coffee) => coffee.id === 4)?.name ?? "No existe");     // → "Brasil Cerrado"
console.log(coffees.find((coffee) => coffee.id === 99)?.name ?? "No existe");    // → "No existe"

// 🔍 Al cambiar toSorted por sort en catalogLabels, el catálogo sigue en su orden original.
// No es que sort no mute: muta el array sobre el que se llama, pero aquí ese array es el
// que acaba de crear filter, una copia que no conoce nadie más. Si quitamos el filter y
// llamamos list.sort(...) directamente, entonces sí se reordena coffees y esta última línea
// sale ordenada por precio. Por eso usamos toSorted: no depende de que haya una copia antes.
console.log(coffees.map((coffee) => coffee.name));
// → ["Etiopía Yirgacheffe", "Colombia Huila", "Kenia AA",
//    "Brasil Cerrado", "Guatemala Antigua", "Sumatra Mandheling"]
