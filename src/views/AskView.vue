<template>
    <div>
        <p v-for="item in fetchedAsk">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{item.time_ago}} by {{ item.user }}</small>
    </p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {

        //mapHelper
        ...mapGetters([
            'fetchedAsk'
        ])
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
    },
    // 컴토넌트 생성되자마자 시작하는 로직
    created() {
        this.$store.dispatch('FETCH_ASKS');
    },
}
</script>

<style>

</style>