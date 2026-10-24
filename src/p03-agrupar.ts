// P3 · Agrupar con reduce
import { coffees } from "./data";
import type { Coffee, Roast } from "./types";

// Cada vuelta devuelve un objeto nuevo y un array nuevo para el tueste que crece:
// ni el acumulador ni sus arrays se mutan
export const groupByRoast = (list: Coffee[]): Record<Roast, Coffee[]> =>
  list.reduce<Record<Roast, Coffee[]>>(
    (groups, coffee) => ({ ...groups, [coffee.roast]: [...groups[coffee.roast], coffee] }),
    { light: [], medium: [], dark: [] },
  );

console.log("── P3 · Agrupar con reduce ──");

const byRoast = groupByRoast(coffees);
console.log(byRoast.light.map((coffee) => coffee.name));  // → ["Etiopía Yirgacheffe", "Kenia AA"]
console.log(byRoast.medium.map((coffee) => coffee.name)); // → ["Colombia Huila", "Guatemala Antigua"]
console.log(byRoast.dark.map((coffee) => coffee.name));   // → ["Brasil Cerrado", "Sumatra Mandheling"]
