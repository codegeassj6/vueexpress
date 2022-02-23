<template lang="">
    <div class="container-lg">
        <div class="jumbotron">
            <div class="row">
                <div class="col-md-4">
                    <div class="shop-image">
                        <img src="/img/steak.jpg" alt="" height="150">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="block">
                                Products: 488
                            </div>

                            <div class="block">
                                Following: 488
                            </div>

                            <div class="block">
                                Chat Performance: 488
                            </div>


                        </div>
                        <div class="col-md-4">
                            <div class="block">
                                Products: 488
                            </div>

                            <div class="block">
                                Products: 488
                            </div>

                            <div class="block">
                                Products: 488
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="block">
                                Products: 488
                            </div>

                            <div class="block">
                                Products: 488
                            </div>

                            <div class="block">
                                Products: 488
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>

            <nav class="nav nav-pills nav-fill">
                <router-link
                    class="nav-item nav-link text-orangered"
                    :to="`/store/${this.$route.params.name}/${this.$route.params.id}`"
                >
                    Home
                </router-link>
                <router-link class="nav-item nav-link text-orangered"
                    :to="`/store/${this.$route.params.name}/products/${this.$route.params.id}`">
                    Products
                </router-link>
                <router-link class="nav-item nav-link text-orangered"
                    :to="`/store/${this.$route.params.name}/products/sale/${this.$route.params.id}`">
                    Sale
                </router-link>
            </nav>
        </div>

        <router-view :key="$route.path" />

        <div class="jumbotron" v-if="this.$route.name == 'Store'">
            <h6>Shop Voucher</h6>
            <VoucherTemp :vouchers="vouchers" />
        </div>

        <div class="jumbotron" v-if="this.$route.name == 'Store'">
            <h6>About Shop</h6>
            <div class="row">
                <div class="col-md-6">
                    <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="0"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                    >

                    <b-carousel-slide
                        caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
                    ></b-carousel-slide>

                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                        <h1>Hello world!</h1>
                    </b-carousel-slide>


                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                    <b-carousel-slide>
                        <template #img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            src="https://picsum.photos/1024/480/?image=55"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>

                    <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                        </p>
                    </b-carousel-slide>
                    </b-carousel>
                </div>

                <div class="col-md-6">
                    <h6>Address: Brgy St. Nino Panabo City</h6>
                    <h6>Business Time: 8AM-5PM</h6>
                    <div class="intro">
                        <div>✨Warmly welcome to Cristina✨</div>
                        <div>💗Every day has Flash Deal in shop💗</div>
                        <div>💗Free Shipping all these days💗</div>
                        <div>💗New followers can get a special voucher💗</div>
                        <div>✨Will ship out the parcel in 1-2 days✨</div>
                        <div>✨It usually takes 7-15 days to deliver your parcel✨</div>
                        <div>✨Customer Service time is 9:00-18:00 on workdays✨</div>
                        <div>💋Hope you enjoy your time here💋</div>
                    </div>
                </div>

            </div>
        </div>

        <div class="jumbotron">
            <Footer />
        </div>
    </div>

</template>

<script>
import Footer from './template/Footer.vue';
import VoucherTemp from './template/VoucherTemp.vue';

export default {
    components: {
        Footer,
        VoucherTemp,
    },
    data() {
        return {
            // url: {isHome: false, isProducts: false, isSale: false},
            // hasError: false,
            slide: 0,
            sliding: null,
            vouchers: '',
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = true
        },

    },
    updated() {

    },
    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/store/voucher/${this.$route.params.id}`,
            headers: {Authorization: AuthStr}
        }).then(response => {
            this.vouchers = response.data;
        }).catch(error => {

        });

    },
}
</script>

<style scoped>
/* .nav-active {
    border-bottom: 2px solid orangered;
} */

.nav-pills .nav-link {
    border-radius: 0 !important;
}

.border-left {
    border-left: 1px solid orangered !important;
}

a.router-link-exact-active {
    border-bottom: 2px solid orangered;
}

</style>
