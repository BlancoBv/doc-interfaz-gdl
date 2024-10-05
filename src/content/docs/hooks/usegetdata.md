---
title: useGetData
description: Hook para obtener información.
---

Permite realizar peticiones **_get_** a la base de datos.

## Devuelve

```js
data, isPending, isError, refetch().
```

## Parametros

| Parametros | Uso                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| url        | url del endpoint de consulta no es necesarión incluir "/api/" ya que se concatena al final con el texto ingresado |
| key        | identificador de la petición, puede usarse para compartir los datos en cache entre páginas.                       |
| config     | objeto con multiples configuraciones                                                                              |

## Configuraciones

| Configuración    | Tipo       | Uso                                                                                                                                                   |
| ---------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| fetchInUrlChange | boleano    | Indica que se debe realizar una consulta cuando cambie la url.                                                                                        |
| selectFn         | ()=>any    | callback que se usa para realizar un filtro con los datos obtenidos, debe usarse con el hook use callback.                                            |
| fetchTrigger     | any, any[] | si no se quiere que se realize la petición cada que se cambie la url, se puede indicar especificamente la variable a la cual desencadene la petición. |
