<template>
    <div>
        <div v-for="item in ask" >{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';
export default {
    data() {
        return {
            ask : [],
        }
    },
    // 컴토넌트 생성되자마자 시작하는 로직
    created() {
        var vm = this;
        fetchAskList()
            .then(function(response) {
                vm.ask = response.data;
            })
            .catch(function(error) {
                console.log(error);
            })
    },
}
</script>

<style>

</style>