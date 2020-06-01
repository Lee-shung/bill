<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

body,html {
  padding: 0;
  margin: 0;
  height: 100%;
}
ul,li,h1,h2,h3,h4 {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.clearFloat::after {
  content: '';
  display: block;
  clear: both;
}

</style>
