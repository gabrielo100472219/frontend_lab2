// O2 · Funciones básicas (temas 00 y 01)
import { coffees } from "./data";
import type { Roast } from "./types";

export const formatPrice = (price: number, currency = "€"): string =>
  `${price.toFixed(2)} ${currency}`;

export const stockStatus = (stock: number): string => {
  if (stock === 0) {
    return "Agotado";
  } else if (stock < 5) {
    return "Últimas unidades";
  } else {
    return "Disponible";
  }
};

// 🔍 Si quitamos un case, TypeScript dice:
// "Function lacks ending return statement and return type does not include 'undefined'."
// Con los tres case cubre todos los valores de Roast. Si falta uno, para ese tueste
// la función llegaría al final sin return y devolvería undefined, que no es un string.
export const roastLabel = (roast: Roast): string => {
  switch (roast) {
    case "light":
      return "Tueste claro";
    case "medium":
      return "Tueste medio";
    case "dark":
      return "Tueste oscuro";
  }
};

console.log("── O2 · Funciones básicas ──");

console.log(formatPrice(14.9));      // → "14.90 €"
console.log(formatPrice(14.9, "$")); // → "14.90 $"
console.log(formatPrice(10));        // → "10.00 €"

for (const coffee of coffees) {
  console.log(`${coffee.name} · ${roastLabel(coffee.roast)} · ${stockStatus(coffee.stock)}`);
}
// → Etiopía Yirgacheffe · Tueste claro · Disponible
// → Colombia Huila · Tueste medio · Últimas unidades
// → Kenia AA · Tueste claro · Agotado
// → Brasil Cerrado · Tueste oscuro · Disponible
// → Guatemala Antigua · Tueste medio · Disponible
// → Sumatra Mandheling · Tueste oscuro · Agotado
