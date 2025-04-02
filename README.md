# VUMATE - Animaciones con Vue 3 y Nuxt 3 🚀  

<p >
  <a href="https://paypal.me/almiror?country.x=PE&locale.x=es_XC" target="_blank">
    <img src="https://img.shields.io/badge/☕-Buy%20Me%20a%20Coffee-ffdd00?logo=paypal&style=flat&logoColor=blue&color=0070ba&labelColor=white" 
         alt="Invítame un café" 
         style="border-radius: 10px;">
  </a>  
  <br>
  ⭐ ¡No olvides regalarme una estrellita en mi repo! ⭐
</p>

**VUMATE** es una librería ligera para agregar animaciones basadas en el scroll a proyectos Vue 3 y Nuxt 3 usando **Intersection Observer**.  

## 📦 Instalación  

Instala la librería con npm:  

```sh
npm install vumate
```

## 🚀 Uso Básico

Importa **vumate** en tu componente y define las animaciones:

```js
<script setup>
import vumate from "vumate";

vumate([
  {
    selector: ".fade-in",
    animation: {
      transform: ["translateY(20px)", "translateY(0)"],
    },
  },
  {
    selector: ".slide-left",
    animation: {
      transform: ["translateX(-100px)", "translateX(0)"],
    },
  }
]);
</script>

<template>
  <div>
    <h1 class="fade-in">¡Hola, VUMATE!</h1>
    <p class="slide-left">Este texto se desliza desde la izquierda.</p>
  </div>
</template>
```

## ✨ Atributos de Animación

| Atributo   | Descripción                                                                 | Valor por defecto     |
|------------|-----------------------------------------------------------------------------|-----------------------|
| `transform`| Define el tipo de transformación de la animación                             | **`["none", "none"]`** |
| `opacity`  | Define la opacidad del elemento durante la animación                         | **`["1", "1"]`**       |
| `duration` | Duración de la animación en segundos                                         | **`0.8`**              |
| `easing`   | Tipo de easing para la animación                                             | **`"ease-in-out"`**    |
| `rebounds` | Configuración de los rebotes (cantidad y eje) en la animación                | **`{ reboundCount: 0, axis: "Y" }`** |

### Explicación de los Atributos

- **`transform:`** Se utiliza para aplicar transformaciones como **scale**, **translate**, entre otras. Si no se pasa, se usa **none** por defecto, lo que significa que no se aplica ninguna transformación.
  
- **`opacity:`** Controla la visibilidad del elemento. El valor predeterminado es **1**, lo que significa completamente visible.
  
- **`duration:`** Determina cuánto tiempo tomará la animación en completarse. Si no se especifica, se usa **0.8** segundos.
  
- **`easing:`** Controla el ritmo de la animación. **ease-in-out** es el valor por defecto, lo que da un efecto suave al principio y al final de la animación.
  
- **`rebounds:`** Permite controlar el comportamiento de rebote durante la animación.  
  - **`reboundCount`**: Número de rebotes que la animación debe hacer. El valor por defecto es **0**, lo que significa que no habrá rebotes.  
  - **`axis`**: El eje en el que ocurrirá el rebote. El valor por defecto es **"Y"**, lo que significa que el rebote ocurre a lo largo del eje vertical. También puede establecerse a **"X"** para un rebote horizontal.

## 🎯 Personalización

Puedes ajustar la duración, rebote y el easing en cada animación:

```js
vumate([
  {
    selector: ".zoom-in",
    animation: {
      transform: ["scale(0.5)", "scale(1)"],
      opacity: ["0", "1"],
      duration: 1.2,
      easing: "ease-in-out",
      rebounds:{
        reboundCount: 3,
        axis: "Y",
      }
    },
  }
]);
```

## 🎨 Clases Disponibles

Puedes agregar animaciones a cualquier elemento con las clases definidas:

```html
<h2 class="fade-in">Soy un título animado</h2>
<div class="slide-left">Me deslizo desde la izquierda</div>
<p class="zoom-in">Hago zoom al aparecer</p>
```

## 🛠 Requisitos

- Vue 3 o Nuxt 3
- Soporte para Intersection Observer (compatible con todos los navegadores modernos)

[VUMATE](https://github.com/julioalmirooficial/vumate)  

## 📍 Contribuciones

Si deseas contribuir a **VUMATE**, no dudes en abrir un Pull Request o dejar un Issue en el repositorio.

## 📜 Licencia  

MIT © [Julio Almiro](https://github.com/julioalmirooficial/vumate)  
