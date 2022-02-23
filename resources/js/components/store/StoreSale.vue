<template lang="">
    <div v-if="ready">
        <ProductCard :products="products" />
    </div>
</template>

<script>
import ProductCard from '../template/ProductCard.vue'
export default {
    data() {
      return {
          products: '',
          ready: false,
      }
    },
    components: {
        ProductCard
    },
    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/store/${this.$route.params.id}/products/sale`,
            headers: {Authorization: AuthStr}
        }).then(response => {console.log(response.data);
            this.products = response.data;
            this.ready = true;
        }).catch(error => {

        });
    }
}
</script>
<style scoped>

</style>
