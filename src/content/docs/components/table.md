---
title: Table
description: Componente de tabla
---

Componente de tabla

```jsx
<Table
  data={[{} /* Array de objetos */]}
  columns={[
    { name: "Columna", selector: (el /* relativo a data */) => el.nombre },
  ]}
  setRelativeData= setRelativeData /* guarda los datos relativos a la fila de la tabla */
  hoverable
  noDataMsg="Sin datos"
  onClick={(data)=>{/* acción al realizar click */ }}
/>
```

## Parametros

| Parametro           | uso                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| data                | arreglo de objetos de a mapear                                                                                                            |
| columns             | arreglo de objetos a traves de los cuales se extraeran los cnoombre de la scolumnas y las propiedades a las que se referencian (opcional) |
| setRelativeData     | setter de la variable de estado donde se guardaran los datos al abrir el menu contextual                                                  |
| contextualMenuItems | arreglo de objetos que contienen los elementos del menu contextual (opcional)                                                             |
| hoverable           | indica que se muestre el efecto hover al pasar el mouse sobre las filas (opcional)                                                        |
| noDataMsg           | mensaje que aparecera cuando no data no tenga elementos                                                                                   |
| onClick             | funcion a llamar al hacer click sobre una fila (opcional)                                                                                 |
