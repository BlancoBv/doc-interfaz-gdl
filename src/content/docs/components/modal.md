---
title: Modal
description: Modal
---

Ventana modal.

```jsx
<Modal id="id" title="Modal" sm onClose={() => {}}>
  {children} //componentes hijo aquí
</Modal>
```

## Parametros

| Parametro | Uso                                                      |
| --------- | -------------------------------------------------------- |
| id        | identificador del modal                                  |
| title     | titulo del modal (opcional)                              |
| sm        | indica si el ancho del modal debe ser pequeño (opcional) |
| children  | contenido que ira dentro del modal                       |
| onClose   | función que se ejecutara cada que el modal se cierre     |
