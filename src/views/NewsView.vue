<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
import bus from '../utils/bus.js';

export default {
  components : {
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
  //   this.$store.dispatch("FETCH_NEWS")
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
</script>

