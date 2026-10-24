// O8 · Uniones, Record y genéricos (temas 13, 14 y 15)
import { coffees, customers } from "./data";

export type OrderStatus = "pending" | "roasting" | "shipped" | "delivered";

// 🔍 Si borramos delivered:
// Property 'delivered' is missing in type '{ pending: string; roasting: string; shipped: string; }'
// but required in type 'Record<OrderStatus, string>'.
const statusLabel: Record<OrderStatus, string> = {
  pending: "Pendiente",
  roasting: "Tostando",
  shipped: "Enviado",
  delivered: "Entregado",
};

export const statusMessage = (status: OrderStatus): string =>
  `Tu pedido está: ${statusLabel[status]}`;

export const normalizeId = (id: string | number): number =>
  typeof id === "string" ? Number(id) : id;

export const findById = <T extends { id: number }>(items: T[], id: number): T | null =>
  items.find((item) => item.id === id) ?? null;

console.log("── O8 · Uniones, Record y genéricos ──");

console.log(statusMessage("roasting")); // → "Tu pedido está: Tostando"

console.log(normalizeId("4")); // → 4
console.log(normalizeId(4));   // → 4

// 🔍 Pasando el ratón por encima:
// findById(coffees, 4)   → Coffee | null    (T se infiere como Coffee)
// findById(customers, 3) → Customer | null  (T se infiere como Customer)
// Es la misma función, pero el tipo de retorno sigue al de la lista que recibe.
console.log(findById(coffees, normalizeId("4"))?.name ?? "No encontrado"); // → "Brasil Cerrado"
console.log(findById(customers, 3)?.email ?? "No encontrado");            // → "ana@mail.com"
console.log(findById(coffees, 99)?.name ?? "No encontrado");              // → "No encontrado"
