// O10 · Closures (tema 23)

export type PriceRule = (price: number) => number;

export const createDiscount = (rate: number): PriceRule => (price) => price * (1 - rate);

export const createOrderIdGenerator = (prefix: string): (() => string) => {
  let count = 0; // Cada llamada a createOrderIdGenerator crea su propio count
  return () => {
    count += 1;
    return `${prefix}-${count}`;
  };
};

console.log("── O10 · Closures ──");

const blackFriday = createDiscount(0.2);
const members = createDiscount(0.1);

console.log(blackFriday(10)); // → 8
console.log(members(10));     // → 9
// 📝 Sin paréntesis porque no llamamos a blackFriday: se la pasamos a map como valor
// y es map quien la llama con cada precio. blackFriday(...) le pasaría su resultado, un número.
// blackFriday es pura: sólo lee rate, que el closure capturó y nadie puede cambiar,
// así que con el mismo precio siempre da lo mismo.
console.log([10, 20, 15].map(blackFriday)); // → [8, 16, 12]

const nextOrderId = createOrderIdGenerator("TUE");
const nextGiftId = createOrderIdGenerator("REGALO");

// 📝 nextOrderId es impura: no recibe nada y cada vez devuelve algo distinto,
// porque modifica count, un estado que vive fuera de ella (en el closure).
console.log(nextOrderId()); // → "TUE-1"
console.log(nextOrderId()); // → "TUE-2"
console.log(nextGiftId());  // → "REGALO-1"
console.log(nextOrderId()); // → "TUE-3"
