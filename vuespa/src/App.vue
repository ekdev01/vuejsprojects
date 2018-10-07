<template>
  <div id="app">
    <user-list v-bind:data="users" v-bind:users-coming="usersWhoWillCome"></user-list>
  </div>
  <div v-for="user in usersWhoWillCome">
    {{user.id}} -  {{user.email}}
  </div>
</template>


<script>
  import UserList from './UserList.vue';

  export default {
    name: 'app',
    components: {
      'user-list': UserList
    },
    data () {
      return {
        usersUrl: 'https://jsonplaceholder.typicode.com/users',
        users: [],
        usersWhoWillCome: []
      }
    },
    created: function() { 
      // Requete Ajax 
      axios.get(this.usersUrl)
        .then((response) => {
          this.users = response.data;
          console.log(this.users);
        })
     }
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

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
</style>
