<template>
    <div>
        <user-profile :info="userInfo">
            <div slot="username">{{ userInfo.id }}</div>
            <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
            <span slot="karma">{{ userInfo.karma }}</span>
        </user-profile>

        <!-- computed 사용해서 바로 데이터 뿌려줌 -->
        <!-- <p>name : {{ userInfo.id}}</p>
        <p>karma : {{ userInfo.karma}}</p>
        <p>created : {{ userInfo.created}}</p> -->
        <!-- <p>{{ this.$store.state.user.about}}</p> -->
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
    components: {
        UserProfile,
    },
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