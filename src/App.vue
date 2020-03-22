<template>
  <div id="app">
    <h1>Moscow corona prediction data</h1>
    <Graph/>
    <br/>
    <footer>
      <p>Based on the article <a href="https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca">Coronavirus: Why You Must Act Now</a></p>
      <p>Moscow data is fetched from <a href="https://yandex.com/web-maps/covid19">Yandex.Maps</a></p>
    </footer>
  </div>
</template>

<script>
import Graph from './components/Graph.vue';

export default {
  name: 'App',
  components: {
    Graph,
  },
};
</script>

<style>
@import url('https://rsms.me/inter/inter.css');
html {  }

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555;
  margin-top: 60px;
}
</style>
