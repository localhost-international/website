<template>
  <div id="main">
    <nav>
      <h1>localhost&nbsp;<span aria-hidden="true">🌐</span></h1>
      <p>is a boutique research <span aria-hidden="true">📚</span> and development <span aria-hidden="true">🛠</span> studio <span aria-hidden="true">👌</span> based in London that builds useful applications and experiences.</p>
      <p>Currently crafting <a href="">experiments</a> and decentralised web <a href="">projects</a>.</p>
      <p>Funded by commissioned <a href="">work</a>.</p>
    </nav>

    <!-- 
      👍 👈 👏 🌎 
      <span aria-hidden="true"></span>
    -->
      
  </div>
</template>

<script>
export default {
  data: () => ({ count: 0 })
}
</script>

<style lang="scss">
// https://github.com/sharanda/manrope
@font-face {
  font-family: "Manrope";
  src: url("fonts/manrope/Manrope-ExtraLight.ttf") format("truetype");
  font-weight: 100;
}
@font-face {
  font-family: "Manrope";
  src: url("fonts/manrope/Manrope-Light.ttf") format("truetype");
  font-weight: 200;
}
@font-face {
  font-family: "Manrope";
  src: url("fonts/manrope/Manrope-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Manrope";
  src: url("fonts/manrope/Manrope-SemiBold.ttf") format("truetype");
  font-weight: 500;
}
@font-face {
  font-family: "Manrope";
  src: url("/fonts/manrope/Manrope-Bold.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Manrope";
  src: url("fonts/manrope/Manrope-ExtraBold.ttf") format("truetype");
  font-weight: 900;
}

@font-face {
  font-family: "Manrope";
  src: url("fonts/manrope/Manrope-VariableFont_wght.ttf") format("truetype");
  font-weight: 200 800;
}



$text-fill: 90;

body {
  margin: 4rem 10rem 4rem 4rem; 
  padding: 0;
  cursor: pointer;
}

h1, h2, h3, h4, h5, h6, p, span, a {
  font-family: "Manrope", sans-serif;
  color: rgb($text-fill,$text-fill,$text-fill);
  font-weight: 475;
  font-size: 72px;
  display: inline-block;
  padding: 0;
  margin: 0; 

  &:hover {
    // outline: 1px dotted red;
  }
}

h1 {
  color: rgb(0,0,0);
}

a {
  &, &:visited, &:active, &:hover {
  }
}

span[aria-hidden="true"] {
  // display: none;
  // font-size: 50px;
  
}
body:hover {
  span[aria-hidden="true"] {
    display: inline-block;
  }
}
.test1 {
  font-size: 42px;
  font-weight: 300;
}
.test2 {
  opacity: .85;
}
</style>
