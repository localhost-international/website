<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
// https://github.com/sharanda/manrope
@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/Manrope-ExtraLight.ttf") format("truetype");
  font-weight: 100;
}
@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/Manrope-Light.ttf") format("truetype");
  font-weight: 200;
}
@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/Manrope-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/Manrope-SemiBold.ttf") format("truetype");
  font-weight: 500;
}
@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/Manrope-Bold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/Manrope-ExtraBold.ttf") format("truetype");
  font-weight: 900;
}

@font-face {
  font-family: "Manrope";
  src: url("./assets/fonts/manrope/Manrope-VariableFont_wght.ttf") format("truetype");
  font-weight: 200 800;
}



$text-fill: 90;

body {
  margin: 4rem 10rem 4rem 4rem; 
  padding: 0;
  cursor: default;
}

h1, h2, h3, h4, h5, h6, p, span, a {
  font-family: "Manrope", sans-serif;
  color: rgb($text-fill,$text-fill,$text-fill);
  font-weight: 475;
  font-size: 72px;
  display: inline-block;
  padding: 0;
  margin: 0; 
  orphans: 0;
  widows: 0;
}

h1 {
  color: rgb(0,0,0);
}

a {
  &, &:visited, &:active, &:hover {
    cursor: pointer;
  }
}.fade-enter-active,
.fade-leave-active {
  transition-duration: 250ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.router-link-active {
  // outline: 1px dashed rgba(0,0,0,.15);
  text-decoration: none;
  padding: 0; 
  margin: 0 1rem 0 0;
}

.tba {
  cursor: not-allowed;
}
</style>
