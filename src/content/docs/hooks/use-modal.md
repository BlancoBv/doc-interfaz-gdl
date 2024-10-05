---
title: useModal
description: Hook para manejar modales.
---

Permite manejar los modales.

```jsx
import { useModal } from "@hooks/useModal";
const modalEjemplo = useModal("modal-ejemplo");
//Mostrar el modal
modalEjemplo.show();
//Cerrar el modal
modalEjemplo.close();
```

## Parametros

| Parametros | Uso                     |
| ---------- | ----------------------- |
| id         | identificador del modal |
