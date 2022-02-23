<template>
    <div>
        <OrderTemp :fee="fee" :total_price="total_price" :products="products" />
    </div>
</template>
<script>
import OrderTemp from '../../template/OrderTemp.vue';

export default {
    data() {
        return {
            products: null,
            total_price: null,
            fee: null,
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

    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/order/complete`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.products = res.data[0];
            this.total_price = res.data[1];
            this.fee = res.data[2];
        }).catch(err => {

        });
    },
}
</script>

<style scoped>

</style>
