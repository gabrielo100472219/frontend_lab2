// O7 · ¿Pura o impura? (tema 22)
import { coffees } from "./data";
import type { Coffee } from "./types";

// 1. IMPURA: lee shippingCost, una variable externa que puede cambiar.
// Misma entrada, distinta salida si alguien reasigna shippingCost.
let shippingCost = 3.5;
const totalWithShipping = (amount: number): number => amount + shippingCost;

// 2. IMPURA: muta el café que recibe (efecto secundario). El catálogo cambia por debajo.
const applyDiscount = (coffee: Coffee, rate: number): Coffee => {
  coffee.price = coffee.price * (1 - rate);
  return coffee;
};

// 3. PURA: sólo depende de su argumento y map devuelve un array nuevo sin tocar el original.
const namesInCapitals = (list: Coffee[]): string[] =>
  list.map((coffee) => coffee.name.toUpperCase());

// 4. IMPURA: sort reordena el array que recibe (efecto secundario).
const sortByPrice = (list: Coffee[]): Coffee[] =>
  list.sort((a, b) => a.price - b.price);

// 5. IMPURA: depende de la hora actual. Cada llamada devuelve algo distinto sin cambiar la entrada.
const createOrderId = (): string => `ORD-${Date.now()}`;

// 6. PURA: el push muta tags, pero tags es un array local que crea la propia función.
// Nadie más lo conoce hasta que sale. La pureza se mide desde fuera ("Mutar dentro es aceptable").
const buildTags = (coffee: Coffee): string[] => {
  const tags: string[] = [];
  for (const note of coffee.notes) {
    tags.push(`#${note}`);
  }
  return tags;
};

// Versiones puras de las impuras

// 1. El gasto de envío entra como argumento
const totalWithShippingPure = (amount: number, shipping: number): number => amount + shipping;

// 2. Devuelve un café nuevo con el precio cambiado
const applyDiscountPure = (coffee: Coffee, rate: number): Coffee => ({
  ...coffee,
  price: coffee.price * (1 - rate),
});

// 4. toSorted devuelve un array nuevo
const sortByPricePure = (list: Coffee[]): Coffee[] =>
  list.toSorted((a, b) => a.price - b.price);

// 5. La fecha entra como argumento: quien llama decide cuándo es "ahora"
const createOrderIdPure = (timestamp: number): string => `ORD-${timestamp}`;

console.log("── O7 · ¿Pura o impura? ──");

console.log(totalWithShipping(10)); // → 13.5
shippingCost = 5;
console.log(totalWithShipping(10)); // → 15. Misma entrada, distinta salida
console.log(totalWithShippingPure(10, 3.5)); // → 13.5. Siempre

// Las impuras se prueban sobre copias para no estropear el catálogo del resto de katas
const ethiopia = structuredClone(coffees[0]);
applyDiscount(ethiopia, 0.5);
console.log(ethiopia.price); // → 7.45. Ha mutado el café que recibió
console.log(applyDiscountPure(coffees[0], 0.5).price, coffees[0].price); // → 7.45 14.9

console.log(namesInCapitals(coffees.slice(0, 2))); // → ["ETIOPÍA YIRGACHEFFE", "COLOMBIA HUILA"]

const catalogCopy = [...coffees];
sortByPrice(catalogCopy);
console.log(catalogCopy[0].name); // → "Brasil Cerrado". Ha reordenado el array que recibió
console.log(sortByPricePure(coffees)[0].name, coffees[0].name); // → "Brasil Cerrado" "Etiopía Yirgacheffe"

console.log(createOrderId()); // → "ORD-<milisegundos actuales>". Cambia en cada ejecución
console.log(createOrderIdPure(1700000000000)); // → "ORD-1700000000000"

console.log(buildTags(coffees[1])); // → ["#caramelo", "#manzana roja"]
