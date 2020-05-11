<template>
  <div id="app">
    <Intro />
  </div>
</template>

<script>
import Intro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    Intro
  }
}
</script>

<style lang="scss">
// https://github.com/sharanda/manrope */
@font-face {
  font-family: "Manrope";
  src: url("assets/fonts/manrope/Manrope-ExtraLight.ttf") format("truetype");
  font-weight: 100;
}
@font-face {
  font-family: "Manrope";
  src: url("assets/fonts/manrope/Manrope-Light.ttf") format("truetype");
  font-weight: 200;
}
@font-face {
  font-family: "Manrope";
  src: url("assets/fonts/manrope/Manrope-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Manrope";
  src: url("assets/fonts/manrope/Manrope-SemiBold.ttf") format("truetype");
  font-weight: 500;
}
@font-face {
  font-family: "Manrope";
  src: url("/fonts/manrope/Manrope-Bold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Manrope";
  src: url("assets/fonts/manrope/Manrope-ExtraBold.ttf") format("truetype");
  font-weight: 900;
}

@font-face {
  font-family: "Manrope";
  src: url("assets/fonts/manrope/Manrope-VariableFont_wght.ttf") format("truetype");
  font-weight: 200 800;
}



body {
  margin: 4rem 10rem 4rem 4rem; 
  padding: 0;
  cursor: pointer;
  font-family: "Manrope", sans-serif;
 
}


</style>
