<template lang="html">
  <div class="">
    <h3>Counter</h3>

    값: {{ this.$store.state.count }}<br />
    값: {{ this.$store.state.text }}<br />

    <input type="button" @click="increment" name="" value="+">
    <input type="button" name="" @click="decrement" value="-">
    <input type="button" name="" @click="reset" value="reset">
    <input type="button" name="" @click="asycFunc" value="async">
    <input type="button" name="" @click="taewoong" value="text">

    <br /><br /><br />
    <input type="button" @click="routeHelloWorld" name="" value="<<<<">
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
    routeHelloWorld () {
      this.$router.push('/')
    },
    increment () {
      this.$store.commit('increment')
      console.log('increment');
    },
    decrement () {
      this.$store.commit('decrement')
      console.log('decrement');
    },
    reset () {
      this.$store.commit('reset')
      console.log('reset');
    },
    asycFunc () {
      this.$store.commit('asycFunc')
      console.log('async');
    },
    taewoong () {
      this.$store.dispatch('callMyName', 222)
    }
  }
}
</script>

<style lang="css">
</style>
