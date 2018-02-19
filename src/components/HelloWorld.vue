<template>
  <div class="hello">
    <div class="write">
      <h3>Write</h3>
      이름: <input type="text" v-model="name" placeholder="아무말대잔치" @keyup="submit">
      내용: <input type="text" v-model="input" placeholder="아무말대잔치" @keyup="submit">
      <input type="button" name="" value="send" @click="submit">
    </div>

    <div class="list">
      <h3>List</h3>
      <ul v-for="(value, key) in list">
        <li>{{key}} : {{value}}</li>
      </ul>
    </div>
    <input type="button" @click="routeCounter" value=">>>>">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
  },
  watch: {
    list() {
      console.log('list list changed ', this.list);
    }
  },
  methods: {
    routeCounter() {
      this.$router.push('Counter')
    },
    submit(e) {
      if (e.keyCode === 13 || e.type === 'click') {
        this.writeUserData(this.name, this.input)
      }
    },
     writeUserData(name, input) {
      const that = this
      const data = {};
      data[name] = input

      firebase.database().ref(`/user_${name}`).update(data).then((res) => {
        console.log('res', res);
      }).catch((err) => {
        console.log('err', err);
      })

      var starCountRef = firebase.database().ref('/user');
      console.log('starCountRef', starCountRef);
      starCountRef.orderByKey().on('value', function(snapshot) {
        console.log('snapshot.val()', snapshot.val())
        that.list = snapshot.val()
      });
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      input: '',
      list: null,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.write {
  width: 300px;
  border: solid gray 1px;
}
.list {
  width: 300px;
  border: solid green 1px;
}
</style>
