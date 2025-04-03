# VUMATE - Animations with Vue 3 and Nuxt 3 🚀  

<p >
  <a href="https://paypal.me/almiror?country.x=PE&locale.x=es_XC" target="_blank">
    <img src="https://img.shields.io/badge/☕-Buy%20Me%20a%20Coffee-ffdd00?logo=paypal&style=flat&logoColor=blue&color=0070ba&labelColor=white"
         alt="Buy Me a Coffee"
         style="border-radius: 10px;">
  </a>  
  <br>
  ⭐ Don't forget to star this repo! ⭐
</p>

**VUMATE** is a lightweight library for adding scroll-based animations to Vue 3 and Nuxt 3 projects using **Intersection Observer**.  

## 📦 Installation  

Install the library using npm:  

```sh
npm install vumate
```

## 🚀 Basic Usage

Import **vumate** into your component and define animations:

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
    <h1 class="fade-in">Hello, VUMATE!</h1>
    <p class="slide-left">This text slides in from the left.</p>
  </div>
</template>
```

## ✨ Animation Attributes

| Attribute   | Description                                                                | Default Value          |
|------------|----------------------------------------------------------------------------|------------------------|
| `transform`| Defines the type of animation transformation                              | **`["none", "none"]`** |
| `opacity`  | Defines the element's opacity during the animation                        | **`["1", "1"]`**       |
| `duration` | Duration of the animation in seconds                                     | **`0.8`**              |
| `easing`   | Type of easing for the animation                                        | **`"ease-in-out"`**    |
| `rebounds` | Bounce configuration (count and axis) for the animation                  | **`{ reboundCount: 0, axis: "Y" }`** |

### Attribute Explanation

- **`transform:`** Used to apply transformations such as **scale**, **translate**, and others. If not provided, **none** is used by default, meaning no transformation is applied.
  
- **`opacity:`** Controls the visibility of the element. The default value is **1**, meaning fully visible.
  
- **`duration:`** Determines how long the animation takes to complete. If not specified, **0.8** seconds is used.
  
- **`easing:`** Controls the animation speed curve. The default **ease-in-out** creates a smooth start and end.
  
- **`rebounds:`** Controls the bounce behavior of the animation.
  - **`reboundCount`**: Number of bounces the animation should have. The default is **0**, meaning no bounce.
  - **`axis`**: The axis on which the bounce occurs. The default is **"Y"**, meaning vertical bounce. It can also be set to **"X"** for a horizontal bounce.

## 🎯 Customization

You can adjust duration, bounce, and easing for each animation:

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

## 🎨 Available Classes

You can add animations to any element using predefined classes:

```html
<h2 class="fade-in">I'm an animated title</h2>
<div class="slide-left">I slide in from the left</div>
<p class="zoom-in">I zoom in on appearance</p>
```

## 🛠 Requirements

- Vue 3 or Nuxt 3
- Intersection Observer support (compatible with all modern browsers)

[VUMATE](https://github.com/julioalmirooficial/vumate)  

## 📍 Contributions

If you want to contribute to **VUMATE**, feel free to open a Pull Request or submit an Issue in the repository.

## 📜 License  

MIT © [Julio Almiro](https://github.com/julioalmirooficial/vumate)  
