<template>
<body class="landing">

<header id="header" class="alt">
  <h1><strong>COVID-19 Moscow estimations</strong></h1>
  <nav id="nav">
    <ul>
      <li><a href="https://www.flattenthecurve.com/">Flatten the curve</a></li>
    </ul>
  </nav>
</header>

<section id="banner">
  <Graph/>
</section>

<footer id="footer">
  <div class="container">
    <ul class="icons">
      <li>
        Based on: <a href="https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca">Coronavirus: Why You Must Act Now</a>
      </li>
      <li>
        Moscow data source: <a href="https://yandex.com/web-maps/covid19">Yandex.Maps</a>
      </li>
    </ul>
    <ul class="icons">
      <li>2020, Anton Ryzhikov</li>
      <li><a href="https://github.com/selfdeceited/moscow-covid-19-awareness-stats">Fork me on Github</a></li>
    </ul>
  </div>
</footer>

</body>
</template>

<script>
import Graph from './components/Graph.vue';

document.title = 'Moscow COVID-19 prediction data';

export default {
  name: 'App',
  components: {
    Graph,
  },
};
</script>

<style>
@import url('https://rsms.me/inter/inter.css');
/*html {  }

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555;
}*/
</style>
