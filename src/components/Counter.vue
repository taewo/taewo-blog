<template lang="html">
  <div class="">
    Counter
    값: {{ this.$store.state.count}} <br />

    <input type="button" @click="add" name="" value="++">
    <input type="button" name="" @click="del" value="--">
    <input type="button" name="" @click="reset" value="**">
    <input type="button" name="" @click="asyncFunc" value="Async">
    <input type="button" name="" @click="taewoong" value="Async">
    <input type="button" @click="routeHelloWorld" value="<<<<">
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
    routeHelloWorld () {
      this.$router.push('/')
    },
    add () {
      console.log('add add', this);
      this.$store.commit('INCREMENT')
    },
    del () {
      console.log('del');
      this.$store.commit('DECREMENT')

    },
    reset () {
      console.log('reset');
      this.$store.commit('RESET')

    },
    asyncFunc () {
      console.log('asyncFunc');
      this.$store.commit('ASYNC_FUNC')
    },
    taewoong () {
      this.$store.dispatch('actionB')
      .then((a) => {
        console.log('a', a);
      })
    }
  }
}
</script>

<style lang="css">
</style>
