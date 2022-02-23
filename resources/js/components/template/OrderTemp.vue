<template>
    <div>
        <div class="jumbotron" v-for="(product, index) in products" :key="index">
        <!-- <div class="jumbotron"> -->
            <div class="d-block mb-2">
                <div class="text-right" v-if="products.status == 0">Pending</div>
                <div class="text-right" v-if="products.status == 1">To Receive</div>
                <hr>
            </div>

            <div class="row mb-2" v-for="prod in product" :key="prod.id">
                <div class="col-md-2">
                    <router-link :to="`/product/${prod.name.replace(/\s/g, '')}/${prod.id}`">
                        <img src="/img/steak.jpg" alt="" width="100%" height="100px">
                    </router-link>
                </div>

                <div class="col-md-8">
                    <router-link :to="`/product/${prod.name.replace(/\s/g, '')}/${prod.id}`">
                        <h6 class="text-orangered">{{prod.name}}</h6>
                    </router-link>
                    <div> asd asd asd asd asd asd asd asd ased asd asd asd as</div>
                    <div class="small">Variant: {{prod.variant}}</div>
                </div>

                <div class="col-md-2 text-right">
                    <div>₱{{prod.price}}
                        <span class="text-muted small">x</span>
                        <span>{{prod.quantity}}</span>
                    </div>
                    <div>₱{{prod.price * prod.quantity}}</div>
                </div>
            </div>
            <hr>

            <div class="text-right mb-3">
                <div class="small"><i class="fa fa-truck"></i>: ₱{{fee}}</div>
                <div class="small d-inline">Order Total:</div> <span>₱{{ computedOverall }}</span>
            </div>

            <div class="row">
                <div class="col-md-5 small text-muted">
                    Confirm receipt of products by 07/08/2001
                </div>

                <div class="col-md-7 text-right">
                    <button type="button" class="btn btn-primary btn-sm">Order Again</button>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {

        }
    },

    props: ['products', 'total_price', 'fee', 'group'],

    computed: {
        computedOverall() {
            return this.total_price + this.fee;
        }
    },

    methods: {

    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                // console.log('watcher: ',val);
            },
            deep: true
        },
        products: function(newVal) {
            console.log('Props: ', newVal);
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
