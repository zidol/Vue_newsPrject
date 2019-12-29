<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components:{
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start.spinner', this.startSpinner);
    bus.$off('end.spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin : 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
/* Router Transition*/
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


<!-- <template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items"> {{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {handleExcpetion} from './utils/handler.js';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    loginUser() {
      //promise 문법
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if(response.data.id === 1) {
            console.log('사용자가 인증되었습니다.');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(response => {
                 this.items = response.data;
              })
          }
        })
        .catch(error => console.log(error));
    },
    async loginUser1() {
      //async await
      try {
        //예외 처리는 catch안에서
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if(response.data.id === 1) {
          console.log('사용자가 인증되었습니다.');
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch (error) {
        handleExcpetion(error);
        console.log(error);
      }
    }
  },
}


</script>

<style>

</style> -->