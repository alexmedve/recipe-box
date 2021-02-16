<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';

  export default {
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">

  * {

    &,
    &::before,
    &::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }

  html,
  body {
    font-family: 'Work Sans', sans-serif;
  }

  body {
    background-color: $color-primary;
  }
</style>