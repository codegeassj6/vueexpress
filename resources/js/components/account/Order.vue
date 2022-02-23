<template>
    <div>
        <div class="jumbotron">
            <nav class="nav nav-pills nav-fill">
                <router-link
                    class="nav-item nav-link text-orangered"
                    :to="`/account/order`"
                >All
                </router-link>
                <router-link class="nav-item nav-link text-orangered"
                    :to="`/account/order/receive`">To Receive
                </router-link>
                <router-link class="nav-item nav-link text-orangered"
                    :to="`/account/order/complete`">Completed
                </router-link>
            </nav>
            <hr>
        </div>

        <div class="input-group mb-3" v-if="this.$route.name == 'Order'">
            <input type="text" class="form-control" placeholder="Search order" aria-label="Username" aria-describedby="basic-addon1">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
            </div>
        </div>

        <OrderTemp :group="group" :total_price="total_price" :fee="fee" :products="products" v-if="this.$route.name == 'Order'" />
        <router-view :key="$router.path" />
    </div>
</template>
<script>
import OrderTemp from '../template/OrderTemp.vue'

export default {
    data() {
        return {
            products: null,
            total_price: null,
            fee: null,
            group: null,
        }
    },

    props: [],
    components: {
        OrderTemp,
    },

    computed: {

    },

    methods: {

    },

    updated() {

    },

    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/order`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.products = res.data[0];
            this.total_price = res.data[1];
            this.fee = res.data[2];
            this.group = res.data[3];
        }).catch(err => {

        });
    },
}
</script>

<style scoped>
a.router-link-exact-active {
    border-bottom: 2px solid orangered;
}

.nav-pills .nav-link {
    border-radius: 0 !important;
}

hr {
    margin-bottom: 0 !important;
}

</style>
