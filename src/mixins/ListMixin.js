import bus from '../utils/bus.js';
export default {
    // 재사용 할 컴포넌트 옵션
    mounted () {
      bus.$emit('end:spinner');
    }
    // created(){
    //     bus.$emit('start:spinner');
    //       //데이터 호출(dispatch)
    //     this.$store.dispatch("FETCH_LIST", this.$route.name)
    //       .then(() => {
    //         console.log(5);
    //         console.log('fetched');
    //         bus.$emit('end:spinner')
    //       })
    //       .catch((error) =>{
    //         console.log(error);
    //       });
    // }
}