---
title: Line
---

Grafico de lineas.

```jsx
<Line
  data={{
    datasets: [
      {
        data: [
          { x: "Enero", y: 20 },
          { x: "Febrero", y: 20 },
        ],
        label: "Meses y valores",
      },
    ],
  }}
  title="Grafica de meses"
  legend
  etiquetaX="Meses"
  etiquetaY="Puntos"
  onClick={() => {
    navigate("/");
  }}
  ticksYCallback={(value) => "$" + value}
  logaritmic
/>
```

## Parametros

| Pametro        | Uso                                                                         |
| -------------- | --------------------------------------------------------------------------- |
| data           | contiene los datos a graficar                                               |
| title          | titulo de la grafica                                                        |
| legend         | muestra las leyendas de la grafica, por defecto esta desactivado (opcional) |
| etiquetaX      | nombre de la etiqueta en el eje x                                           |
| etiquetaY      | nombre de la etiqueta en el eje y                                           |
| onClick        | acción a realizar al dar click en un elemento graficado en la grafica       |
| ticksYCallback | callback para formatear los ticks en el eje Y                               |
