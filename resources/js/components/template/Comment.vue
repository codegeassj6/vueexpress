<template>
    <div>
        <div class="row mb-3" v-for="(review, index) in reviews" :key="index">
            <div class="col-sm-1 text-center">
                <img src="/img/steak.jpg" alt="" class="product-img">
            </div>
            <div class="col-sm-7 no-padding">
                <div class="block">
                    {{ review.userFirstName + ' ' + review.userLastName }}
                </div>
                <div class="block">
                    <span>Variant: {{review.variant}}</span>
                </div>
                <StarRating :rating="review.rating" />
                <div class="block">
                    <span>{{review.comment}}</span>
                </div>
            </div>

            <!-- <div class="col-1">
                <img src="/img/steak.jpg" alt="" class="">
            </div>

            <div class="col-7">
                <div class="block">
                    {{ review.userFirstName + ' ' + review.userLastName }}
                </div>
                <div class="block">
                    <span>Variant: {{review.variant}}</span>
                </div>
                <StarRating :rating="review.rating" />
                <div class="block">
                    <span>{{review.comment}}</span>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import StarRating from './StarRating.vue'

export default {
    data() {
        return {

        }
    },

    props: ['reviews'],

    computed: {

    },

    components: {
        StarRating,
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
.no-padding {
    padding: 0 !important;
}

.product-img {
    width: 50px;
    height: 50px;
}
</style>
