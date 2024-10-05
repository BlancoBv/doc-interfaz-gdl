---
title: CintaOpciones
---

Es el contenedor de distintos tipos de filtros que se usaran en consultas de datos.

```jsx
import CintaOpciones from "@components/gui/CintaOpciones";
import Button from "@components/Button"; //usar en conjunto
<CintaOpciones
  onSubmit={() => {
    refetch();
  }}
>
  <Button buttonType="submit" text="Filtrar" />
</CintaOpciones>;
```

## Parametros

| Parametro | Uso                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------- |
| children  | nodos de react que se renderizaran dentro del contenedor (opcional)                                 |
| onSubmit  | función a llamar cuando se presione un boton de tipo submit                                         |
| zeroTop   | usado para que el estilo sticky funcione en 0, util para usos fuera del layout principal (opcional) |
