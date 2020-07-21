<template>
  <div id="intro">
    <nav>
      <h1>localhost&nbsp;<span aria-hidden="true">🌐</span></h1>
      <p>is a boutique research <span aria-hidden="true">📚</span> and development <span aria-hidden="true">🛠</span> studio <span aria-hidden="true">👌</span> based in London that builds useful applications and experiences.</p>
      <p>Currently crafting <a href="">experiments</a> and decentralised <a href="">projects</a>.</p>
      <p>Funded by commissioned <a href="">work</a>.</p>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>

$text-fill: 90;

h1, h2, h3, h4, h5, h6, p, span, a {
  color: rgb($text-fill,$text-fill,$text-fill);
  font-weight: 475;
  font-size: 72px;
  display: inline-block;
  padding: 0;
  margin: 0; 
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
