<template lang="">
    <div class="mb-4" v-if="ready">
        <div class="row justify-content-end mb-2">
            <div class="col-md-3">
                <b-form @submit.prevent="searchQuery">
                    <b-input-group>
                        <b-form-input v-model="form.search" @change="defaultProducts"></b-form-input>
                        <b-input-group-append>
                            <b-button type="submit" variant="primary"><i class="fa fa-search"></i></b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>
            </div>
        </div>

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
            form: {
                search: '',
            }
        }
    },

    components: {
        ProductCard,
    },

    methods: {
        defaultProducts() {
            if(this.form.search == '') {
                const id = this.$route.params.id;
                const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
                axios({
                    method: 'get',
                    data: {id: id},
                    url: `/api/store/products/${id}`,
                    headers: {Authorization: AuthStr}
                }).then(response => {
                    this.products = response.data;
                    this.ready = true;
                }).catch(error => {

                });
            }
        },

        searchQuery() {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                params: {query: this.form.search},
                url: `/api/store/${this.$route.params.id}/products/name`,
                headers: {Authorization: AuthStr}
            }).then(response => {
                this.products = response.data;
            }).catch(error => {

            });
        }


    },

    mounted() {
        const id = this.$route.params.id;
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            data: {id: id},
            url: `/api/store/products/${id}`,
            headers: {Authorization: AuthStr}
        }).then(response => {
            this.products = response.data;
            this.ready = true;
        }).catch(error => {

        });
    }
}
</script>
<style scoped>

.card {
    height: 400px;
}

</style>
