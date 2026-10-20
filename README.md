# Laboratorio · Módulo 02 · JavaScript y TypeScript

Katas sobre el catálogo de **Tueste** ☕: tipos, funciones, destructuring, `?.` y `??`, TypeScript e inmutabilidad.

## Cómo arrancarlo

```bash
npm install
npm run dev
```

Abrid la página en el navegador y la consola de DevTools (F12 → Console): ahí sale la salida de las katas.

También se puede ver en la terminal, sin navegador:

```bash
npx tsx src/main.ts
```

### Comprobar tipos

Vite no comprueba los tipos, así que:

```bash
npx tsc
```

<!-- TODO: confirmar que sale limpio -->

## Estructura

```
src/
├── types.ts                 ← O1
├── data.ts                  ← datos de partida
├── o01-tipos.ts … o11-immer.ts
└── main.ts                  ← importa todas las katas
```

## Captura de la consola

<!-- TODO -->

## Respuestas a 📝 y 🔍

<!-- TODO -->

## Checklist

### Obligatorios

- [ ] O1 · Tipar el catálogo
- [ ] O2 · Funciones básicas
- [ ] O3 · Destructuring y rest
- [ ] O4 · Datos que pueden faltar
- [ ] O5 · Métodos de arrays
- [ ] O6 · El carrito inmutable
- [ ] O7 · ¿Pura o impura?
- [ ] O8 · Uniones, Record y genéricos
- [ ] O9 · Tipos de utilidad
- [ ] O10 · Closures
- [ ] O11 · Immer
- [ ] O12 · README + bitácora de IA

### Opcionales

- [ ] P1 · Tests con Vitest
- [ ] P2 · Deshacer en el carrito
- [ ] P3 · Agrupar con reduce
- [ ] P4 · Ordenar por cualquier propiedad
- [ ] P5 · Datos desconocidos con `unknown`
- [ ] P6 · Vuestros propios `map` y `filter`
- [ ] P7 · Modelad los datos de vuestro TFM

### Desafíos

- [ ] D1 · Pintar el catálogo en la landing del módulo 1
- [ ] D2 · Uniones discriminadas
- [ ] D3 · Medir el coste de la inmutabilidad
- [ ] D4 · Un pedido como en React (reducer con Immer)
- [ ] D5 · Vuestro propio `reduce`

## 🤖 Bitácora de IA

<!-- TODO: herramientas usadas y al menos 3 ejemplos (Prompt / Qué me dio / Qué corregí y por qué) -->
