<template>
    <div>
      <list-item></list-item>
    </div>
  <!-- <div>
    <ul class="news-list">
      <li v-for="(item, key) in fetchedAsk" class="post">
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">{{item.title}}</router-link>
          </p>
          <small class="link-text">
            {{item.time_ago}} by {{ item.user }}a
            <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div> -->
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';
// import { mapState, mapGetters } from "vuex";
export default {
  components: {
    ListItem,
  },
  // mounted () {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     //데이터 호출(dispatch)
  //   this.$store.dispatch("FETCH_ASKS")
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner')
  //     })
  //     .catch((error) =>{
  //       console.log(error);
  //     });
  //   }, 3000);
  // }
}
  // computed: {
    //mapHelper
    // ...mapGetters(["fetchedAsk"])
    //#3
    // ...mapGetters({
    //     askItems : 'fetchedAsk'
    // })
    //#2
    // ...mapState({
    //     ask : state => state.asks
    // })
    //#1
    // ask(){
    //     return this.$store.state.asks;
    // }
  // },
  // 컴토넌트 생성되자마자 시작하는 로직
  // created() {
  //   this.$store.dispatch("FETCH_ASKS");
  // }

</script>

