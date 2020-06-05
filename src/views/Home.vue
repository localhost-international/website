<template>
  <div id="main">
    <nav>
      <h1>localhost&nbsp;<span aria-hidden="true">🌐</span></h1>
      <p>is a boutique research <span aria-hidden="true">📚</span> and development <span aria-hidden="true">🛠</span> studio based in London, that builds applications and experiences.</p>
      <p>Currently crafting <router-link to="/experiments">experiments</router-link> and decentralised web <router-link to="/projects">projects</router-link>.</p><br />
      <p>Funded by paid <router-link to="/work">work</router-link>.</p><br />
      <p>Get in <a href="mailto:leslie@localhost.international">contact</a><!--router-link to="/contact">contact</router-link-->.</p>
      <p><span aria-hidden="true">✌️</span></p>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>


<style lang="scss">
// span[aria-hidden="true"] {
//   display: none;
// }
body:hover {
  span[aria-hidden="true"] {
    display: inline-block;
  }
}
</style>
