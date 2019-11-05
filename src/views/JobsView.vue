<template>
    <div>
        <!-- <div v-for="job in this.$store.state.jobs" > 
            {{ job.title }}
        </div> -->
        <p v-for="job in this.$store.state.jobs">
            <a v-bind:href="job.url">{{ job.title }}</a>
            <small>{{job.time_ago}}, {{ job.domain }}</small>
        </p>
    </div>
</template>

<script>
export default {
   
    created() {
        // var vm = this;
        // fetchJobsList()
        // .then(response => this.jobs = response.data)
        // .catch(error => console.log(error));
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>