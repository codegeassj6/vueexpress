<template>
    <div v-if="paginate_data.data">
        <template v-if="paginate_data.prev_page_url">
            <button type="button" class="btn btn-outline-primary mr-1" @click="prev(paginate_data.prev_page_url)"><i class="fa fa-angle-left"></i></button>
        </template>

        <!-- <button type="button" class="btn btn-primary mr-1" @click="redirect(paginate_data.path+`?page=`+index)" v-for="(index) in paginate_data.last_page" :key="index">{{index}}</button> -->

        <button type="button" :class="index == paginate_data.current_page ? 'btn-primary' : 'btn-outline-primary'" class="btn mr-1" @click="redirect(paginate_data.path, index)" v-for="(index) in paginate_data.last_page" :key="index">{{index}}</button>

        <template v-if="paginate_data.next_page_url">
            <button type="button" class="btn btn-outline-primary" @click="next(paginate_data.next_page_url)"><i class="fa fa-angle-right"></i></button>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },

    props: ['paginate_data'],

    computed: {

    },

    methods: {
        redirect(url, page) {
            this.$parent.goToPage(url, page);
        },

        next(url) {
            this.$parent.nextPage(url);
        },

        prev(url) {
            this.$parent.nextPage(url);
        }
    },

    // watch: {
    //     $data: {
    //         handler: function(val, oldVal) {
    //             console.log('watcher: ',val);
    //         },
    //         deep: true
    //     }
    // },

    updated() {

    },

    mounted() {
        // this.paginate_data.data.forEach(element => {
        //     return element != null;
        // });
        // console.log(this.paginate_data.data);
    },
}
</script>

<style scoped>

</style>
