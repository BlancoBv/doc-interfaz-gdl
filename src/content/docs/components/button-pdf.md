---
title: ButtonPDF
---

Componente botón que permite generar documentos PDF y abrirlos en una nueva ventana.

```jsx
import ButtonPDF from "@components/ButtonPDF";
<ButtonPDF doc={<MyDoc />} isPending={isPending} />;
```

## Parametros

| Parametro | Uso                                                                              |
| --------- | -------------------------------------------------------------------------------- |
| doc       | Documento PDF basado en [react-pdf](https://react-pdf.org/).                     |
| isPending | desactiva el botón si la petición de la cual depende el documento esta pendiente |
