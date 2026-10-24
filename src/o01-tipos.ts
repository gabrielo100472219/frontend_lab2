// O1 · Errores provocados a propósito (temas 10, 11, 12 y 13)
// Están comentados para que `npx tsc` salga limpio. Al descomentarlos, TypeScript da estos errores.

// import type { Coffee } from "./types";
// import { coffees } from "./data";

// 1. Un café con un tueste que no existe
// const extraRoast: Coffee = {
//   id: 7,
//   name: "Café raro",
//   origin: "Ninguno",
//   notes: [],
//   roast: "extra",
//   price: 10,
//   stock: 1,
// };
// → Type '"extra"' is not assignable to type 'Roast'.

// 2. Un café sin precio
// const withoutPrice: Coffee = {
//   id: 8,
//   name: "Café gratis",
//   origin: "Ninguno",
//   notes: [],
//   roast: "light",
//   stock: 1,
// };
// → Property 'price' is missing in type '{ id: number; name: string; origin: string; notes: never[]; roast: "light"; stock: number; }' but required in type 'Coffee'.

// 3. Cambiar el id de un café
// coffees[0].id = 99;
// → Cannot assign to 'id' because it is a read-only property.
