---
title: Tabs
---

Componente para usar pestañas.

```jsx
<Tabs
  tabs={[
    {
      tabName: "Pestaña 1",
      content: <p>Soy un nodo de react tipo párrafo</p>,
      id: 1,
      show: true,
    },
    /* ... */
  ]}
/>
```

## Parametros

| Parametro | Uso                                                                   |
| --------- | --------------------------------------------------------------------- |
| tabs      | array de objetos que contiene cada una de las pestañas y su contenido |

## Contenido de _tabs_

| Propiedad | Uso                                                    |
| --------- | ------------------------------------------------------ |
| tabName   | nombre de la pestaña                                   |
| content   | nodo de react que se renderizará al activar la pestaña |
| id        | identificador de la pestaña                            |
| show      | muestra la pestaña hasta que se cumpla una condición   |
