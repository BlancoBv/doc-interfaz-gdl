---
title: Select
---

Incluye diferentes tipos de selects listos para usarse en formularios.

## Parametros en común

| Parametro   | Uso                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disabled    | deshabilita el input (opcional)                                                                                                                         |
| required    | hace que input sea llenado para enviar el formulario                                                                                                    |
| variable    | variable de estado donde se guardará el contenido del formulario, es necesario que la propiedad _name_ coincida con la propiedad del objeto en cuestion |
| name        | nombre de la propiedad a la cual apunta el input                                                                                                        |
| options     | array de objetos que contiene las opciones a elegir dentro del select                                                                                   |
| placeholder | el mensaje que aparece cuando no se ha elegido ninguna opción (opcional o no necesitado)                                                                |

## ¿Cómo indicar las opciones?

Las opciones se indican en el parametro _options_.

| Propiedad | uso                                                  |
| --------- | ---------------------------------------------------- |
| label     | es el texto que se mostrara en la lista de opciones  |
| value     | es el valor que se guardara en la variable de estado |
