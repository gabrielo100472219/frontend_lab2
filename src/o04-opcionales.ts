// O4 · Datos que pueden faltar (tema 04)
import { coffees, customers } from "./data";
import { formatPrice } from "./o02-funciones";
import type { Coffee, Customer, Grind } from "./types";

export const getCity = (customer: Customer): string =>
  customer.address?.city ?? "Sin dirección";

export const getGrind = (customer: Customer): Grind =>
  customer.preferences?.grind ?? "grano";

export const wantsNewsletter = (customer: Customer): boolean =>
  customer.preferences?.newsletter ?? true;

// 🪤 Con || Lucía sale true aunque ha dicho que no. || usa el valor por defecto cuando
// la izquierda es falsy, y false es falsy. ?? sólo lo usa con null o undefined, así que
// respeta un false explícito.
const wantsNewsletterWithOr = (customer: Customer): boolean =>
  customer.preferences?.newsletter || true;

export const finalPrice = (coffee: Coffee): number =>
  coffee.price * (1 - (coffee.discount ?? 0));

console.log("── O4 · Datos que pueden faltar ──");

for (const customer of customers) {
  console.log(
    `${customer.name} · ${getCity(customer)} · ${getGrind(customer)} · newsletter: ${wantsNewsletter(customer)}`,
  );
}
// → Lucía · Málaga · molido · newsletter: false
// → Marcos · Sin dirección · grano · newsletter: true
// → Ana · Madrid · grano · newsletter: true

console.log(wantsNewsletterWithOr(customers[0])); // → true. Mal: Lucía dijo que no

console.log(formatPrice(finalPrice(coffees[0]))); // → "13.41 €" (10 % de descuento)
console.log(formatPrice(finalPrice(coffees[1]))); // → "12.90 €" (sin descuento)
console.log(formatPrice(finalPrice(coffees[2]))); // → "15.50 €" (descuento 0)
console.log(formatPrice(finalPrice(coffees[4]))); // → "11.22 €" (15 %)
