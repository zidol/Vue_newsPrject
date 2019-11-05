<template>
    <div>
        <p>name : {{ userInfo.id}}</p>
        <p>karma : {{ userInfo.karma}}</p>
        <p>created : {{ userInfo.created}}</p>
        <!-- <p>{{ this.$store.state.user.about}}</p> -->
    </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user
        }
    },
    created() {
        const userName = this.$route.params.id;
                                            //여러 데이터일 때는 객체로 넘기면됨
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style>

</style>