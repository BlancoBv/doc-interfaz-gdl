---
title: usePDFToBlob
---

Hook para generar pdf y abrirlos en una nueva pestaña del navegador como _blob_.

```jsx
import { usePDFToBlob } from "@hooks/usePDFToBlob";
const { pending, getBlob } = usePDFToBlob(myDoc);
```

## Parametros

| Parametro | Uso                                                                   |
| --------- | --------------------------------------------------------------------- |
| doc       | Documento pdf bajo la sintaxis de [react-pdf](https://react-pdf.org/) |
