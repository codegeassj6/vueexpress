<template lang="">
    <div>
        <slot></slot>
        <div class="row">
            <div class="col-lg-2 mb-3" v-for="product in products" :key="product.id">
                <router-link :to="`/product/${product.name.replace(/\s/g, '')}/${product.id}`">
                    <div class="card ">
                        <img src="/img/steak.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="card-title text-center product-name text-orangered">{{product.name}}</div>
                            <div class="card-text text-orangered">
                                <div>₱{{ product.price }}</div>
                            </div>

                            <StarRating :rating="product.average_rating" />
                        </div>
                    </div>
                </router-link>
            </div>
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
    props: ['products'],
    components: {
        StarRating,
    }
}
</script>
<style scoped>
.card {
    height: 260px;
}

.card-body {
    padding: 0.75rem;
    font-size: 0.9rem;
}

.card-title {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    height: 42px;
    overflow-y: hidden;
}

.card-img-top {
    height: 124px;
}

</style>
