// P1 · Tests de O5 con Vitest
import { describe, expect, it } from "vitest";
import { coffees } from "./data";
import { availableCoffees, catalogLabels, stockValue } from "./o05-arrays";

describe("availableCoffees", () => {
  it("devuelve sólo los cafés con stock", () => {
    expect(availableCoffees(coffees).map((coffee) => coffee.name)).toEqual([
      "Etiopía Yirgacheffe",
      "Colombia Huila",
      "Brasil Cerrado",
      "Guatemala Antigua",
    ]);
  });
});

describe("catalogLabels", () => {
  it("devuelve los disponibles ordenados por precio y formateados", () => {
    expect(catalogLabels(coffees)).toEqual([
      "Brasil Cerrado (Brasil) · 10.50 €",
      "Colombia Huila (Colombia) · 12.90 €",
      "Guatemala Antigua (Guatemala) · 13.20 €",
      "Etiopía Yirgacheffe (Etiopía) · 14.90 €",
    ]);
  });

  it("no cambia el orden del catálogo", () => {
    const before = coffees.map((coffee) => coffee.id);
    catalogLabels(coffees);
    expect(coffees.map((coffee) => coffee.id)).toEqual(before);
  });
});

describe("stockValue", () => {
  it("suma precio × stock de todo el almacén", () => {
    expect(stockValue(coffees)).toBeCloseTo(585.6);
  });

  it("vale 0 con una lista vacía", () => {
    expect(stockValue([])).toBe(0);
  });
});

describe("some, every y find", () => {
  it("hay algún café agotado", () => {
    expect(coffees.some((coffee) => coffee.stock === 0)).toBe(true);
  });

  it("todos los cafés tienen notas", () => {
    expect(coffees.every((coffee) => coffee.notes.length > 0)).toBe(true);
  });

  it("encuentra el café 4 y no el 99", () => {
    expect(coffees.find((coffee) => coffee.id === 4)?.name ?? "No existe").toBe("Brasil Cerrado");
    expect(coffees.find((coffee) => coffee.id === 99)?.name ?? "No existe").toBe("No existe");
  });
});
