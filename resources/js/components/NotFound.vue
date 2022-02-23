<template>
    <div class="jumbotron">
        <div class="text-center"><h1>Page Not Found!</h1></div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },

    props: [],

    computed: {

    },

    methods: {

    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('watcher: ',val);
            },
            deep: true
        }
    },

    updated() {

    },

    mounted() {

    },
}
</script>

<style scoped>

</style>
