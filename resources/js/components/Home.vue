<template>
    <div v-if="!currentUser">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="200"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >

            <b-carousel-slide
                class="carousel-img"
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="/img/img3.jpg"
            ></b-carousel-slide>


            <b-carousel-slide
                img-src="/img/img1.jpg"
                class="carousel-img"
            >
                <h1>Hello world!</h1>
            </b-carousel-slide>

            <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=58"
                class="carousel-img"
            ></b-carousel-slide>

        </b-carousel>

        <div class="mt-3 container-lg">
            <b-card-group>
                <b-card title="Title" img-src="/img/ede.png" img-alt="Image" img-top>
                <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </b-card-text>
                </b-card>

                <b-card title="Title" img-src="/img/vision.png" img-alt="Image" img-top>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>
                </b-card>

                <b-card title="Title" img-src="/img/vision.png" img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.
                    </b-card-text>
                </b-card>
            </b-card-group>

            <b-row class="mt-2 mb-4">
                <b-col md="5">
                    <img src="/img/delivery.jpg" class="card-img card-delivery-img" alt="..." height="600">
                </b-col>
                <b-col md="7">
                    <b-row>
                        <b-col md="4">
                            <b-card
                            title="Order Food"
                            img-src="/img/food.jpg"
                            img-alt="Image"
                            img-top
                            img-height="160"
                            tag="article"
                            class="mb-2"
                            >
                                <b-card-text>
                                    Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-col>

                        <b-col md="4">
                            <b-card
                            title="Wet Market"
                            img-src="/img/wetmarket.jpg"
                            img-alt="Image"
                            img-height="160"
                            img-top
                            tag="article"
                            class="mb-2"
                            >
                                <b-card-text>
                                    Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.
                                </b-card-text>

                                <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </b-col>

                        <b-col md="4">
                        <div>
                            <b-card
                            title="Grocery"
                            img-src="/img/grocery.jpg"
                            img-alt="Image"
                            img-height="160"
                            img-top
                            tag="article"
                            class="mb-2"
                            >
                            <b-card-text>
                                Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </div>
                        </b-col>

                    </b-row>

                    <b-row>
                        <b-col md="4">
                        <div>
                            <b-card
                            title="Order Food"
                            img-src="/img/food.jpg"
                            img-alt="Image"
                            img-height="160"
                            img-top
                            tag="article"
                            class="mb-2"
                            >
                            <b-card-text>
                                Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </div>
                        </b-col>

                        <b-col md="4">
                        <div>
                            <b-card
                            title="Wet Market"
                            img-src="/img/wetmarket.jpg"
                            img-height="160"
                            img-alt="Image"
                            img-top
                            tag="article"
                            class="mb-2"
                            >
                            <b-card-text>
                                Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </div>
                        </b-col>

                        <b-col md="4">
                        <div>
                            <b-card
                            title="Grocery"
                            img-src="/img/grocery.jpg"
                            img-alt="Image"
                            img-height="160"
                            img-top
                            tag="article"
                            class="mb-2"
                            >
                            <b-card-text>
                                Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                            </b-card>
                        </div>
                        </b-col>
                    </b-row>

                </b-col>
            </b-row>

            <b-card
            header-class="text-center bold"
            header="Frequent Asked Question"
            header-text-variant="dark"
            header-tag="header"
            header-bg-variant="white"
            >
                <b-card-text>
                    <div class="accordion" role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-1 variant="light"  class="text-left">Accordion 1</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1"  accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                            <b-card-text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</b-card-text>
                        </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-2 variant="light" class="text-left">Accordion 2</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</b-card-text>
                        </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-3 variant="light" class="text-left">Accordion 3</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</b-card-text>
                        </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-4 variant="light" class="text-left">Accordion 4</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</b-card-text>
                        </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-5 variant="light" class="text-left">Accordion 5</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</b-card-text>
                        </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-6 variant="light" class="text-left">Accordion 6</b-button>
                        </b-card-header>
                        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</b-card-text>
                        </b-card-body>
                        </b-collapse>
                    </b-card>

                    <div class="text-center">
                        <button class="btn btn-primary">Message Us</button>
                    </div>

                    </div>
                </b-card-text>
            </b-card>
            <Footer />
        </div>

    </div>
    <div v-else>
        <b-container fluid="lg">
            <b-row v-if="ready">
                <b-col md="2">
                    <h5>Category</h5>
                    <b-form>
                        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group
                            v-model="formSearch.check"
                            :aria-describedby="ariaDescribedby"
                            @change="searchProduct"
                            >
                                <b-form-checkbox value="food">Food</b-form-checkbox><br />
                                <b-form-checkbox value="beverage">Beverage</b-form-checkbox><br />
                                <b-form-checkbox value="laundry">Laundry</b-form-checkbox><br />
                                <b-form-checkbox value="transaction">Transaction</b-form-checkbox><br />
                                <b-form-checkbox value="bills">Bills</b-form-checkbox><br />
                            </b-form-checkbox-group>
                        </b-form-group>

                        <hr>
                        <h5>Price range</h5>
                        <b-form class="mb-4" @submit.prevent="searchProduct">
                            <b-input-group class="mb-2 w-100" size="sm">
                                <!-- <b-form-input class="form-control" placeholder="min" :type="inputTypes.number" v-model="formSearch.price_min" />
                                <b-form-input class="form-control" placeholder="max" :type="inputTypes.number" v-model="formSearch.price_max" /> -->
                                <b-form-input class="form-control" placeholder="min" :type="inputTypes.number" v-model="holder.price_min" />
                                <b-form-input class="form-control" placeholder="max" :type="inputTypes.number" v-model="holder.price_max" />
                                <b-input-group-append>
                                    <b-button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form>

                        <b-input-group class="mb-2">
                            <b-form-group v-slot="{ aria }">
                                <b-form-radio @change="searchProduct" v-model="formSearch.sort" :aria-describedby="aria" value="desc">Price: High to Low</b-form-radio>
                                <b-form-radio @change="searchProduct" v-model="formSearch.sort" :aria-describedby="aria"  value="asc">Price: Low to High</b-form-radio>
                            </b-form-group>
                        </b-input-group>

                        <hr>
                        <div class="mb-2">
                            <h5>Rating</h5>
                            <div class="star">
                                <a href="#!" class="text-orangered" @click="searchProduct(0, 5)">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </a>
                            </div>
                            <div class="star">
                                <a href="#!" class="text-orangered" @click="searchProduct(0, 4)">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                </a>
                                <span>up</span>
                            </div>
                            <div class="star">
                                <a href="#!" class="text-orangered" @click="searchProduct(0, 3)">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                </a>
                                <span>up</span>
                            </div>
                            <div class="star">
                                <a href="#!" class="text-orangered" @click="searchProduct(0, 2)">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                </a>
                                <span>up</span>
                            </div>
                            <div class="star">
                                <a href="#!" class="text-orangered" @click="searchProduct(0, 1)">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                </a>
                                <span>up</span>
                            </div>
                        </div>
                    </b-form>
                </b-col>

                <b-col md="10">
                    <b-form class="mb-2" @submit.prevent="searchProduct(1)">
                        <b-input-group>
                            <b-form-input class="form-control" v-model="formSearch.query" />
                            <b-input-group-append>
                                <b-button type="submit" class="btn btn-primary">Search <i class="fa fa-search"></i></b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form>

                    <div class="text-break mb-3" v-if="formSearch.sort || formSearch.check.length || formSearch.price_max || formSearch.price_min || formSearch.star">
                        <a href="#!" class="badge badge-primary" @click="formSearch.check = []; searchProduct()" v-if="formSearch.check.length">Category <i class="fa fa-remove"></i></a>

                        <a href="#!" class="badge badge-primary" @click="formSearch.price_min = null; holder.price_min = null; searchProduct()" v-if="formSearch.price_min">Price Min {{ formSearch.price_min }} <i class="fa fa-remove"></i></a>

                        <a href="#!" class="badge badge-primary" @click="formSearch.price_max = null; holder.price_max = null; searchProduct()" v-if="formSearch.price_max">Price Max {{ formSearch.price_max }} <i class="fa fa-remove"></i></a>

                        <a href="#!" class="badge badge-primary" @click="formSearch.sort = null; searchProduct()" v-if="formSearch.sort">Price Sort <i class="fa fa-remove"></i></a>

                        <a href="#!" class="badge badge-primary" @click="formSearch.star = null; searchProduct()" v-if="formSearch.star">{{ formSearch.star }} Rating <i class="fa fa-remove"></i></a>
                    </div>

                    <ProductCard :products="products">
                        <div class="row">
                            <div class="col-lg-12" v-if="noResult">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h2>No result found</h2>
                                    </div>
                                    <div class="card-body no-result">
                                        <div id="main">
                                            <div class="fof">
                                                <h2>Try Something else</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ProductCard>

                    <div class="mt-4 d-flex justify-content-center">
                        <PaginateButton :paginate_data="paginate_data" />
                    </div>

                </b-col>

            </b-row>
            <Footer v-if="ready" />
        </b-container>
    </div>

</template>

<script>
import Footer from './template/Footer.vue'
import ProductCard from './template/ProductCard.vue'
import PaginateButton from './template/PaginateButton.vue'

export default {
    data() {
        return {
            ready: false,
            slide: 0,
            sliding: null,
            holder: {
              price_min: null,
              price_max: null,
            },
            formSearch: {
                check: [],
                query: '',
                price_min: null,
                price_max: null,
                sort: null,
                star: null,
            },
            inputTypes: {
                number: 'number'
            },
            products: {},
            noResult: false,
            paginate_data: null,
        }
    },
    methods: {
        // boobtstrap vue
        onSlideStart(slide) {
        this.sliding = true
        },
        onSlideEnd(slide) {
        this.sliding = false
        },

        // removeFilter(data){console.log(data);
        //     data = null;
        //     console.log(data);
        // },

        // e = query has a text to remove all formsearch data; n = star
        searchProduct(e, n) {console.log('search run');
            if(n) {
                this.formSearch.star = n;
            }

            if(this.formSearch.query && e == 1) {
                this.formSearch.check = [];
                this.formSearch.price_min = null;
                this.formSearch.price_max = null;
                this.formSearch.sort = null;
                this.formSearch.star = null;
            }

            if(this.holder.price_min) {
                this.formSearch.price_min = this.holder.price_min;
            }

            if(this.holder.price_max) {
                this.formSearch.price_max = this.holder.price_max;
            }

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                params: {
                    query: this.formSearch.query,
                    check: this.formSearch.check,
                    price_min: this.formSearch.price_min,
                    price_max: this.formSearch.price_max,
                    sort: this.formSearch.sort,
                    rating: this.formSearch.star
                },
                headers: {Authorization: AuthStr},
                url: `/api/products/search`,
            }).then(res => {console.log(res.data);
                if(res.data.data.length) {
                    this.noResult = false;
                    this.products = res.data.data;
                    this.paginate_data = res.data;
                } else {
                    this.products = {};
                    this.noResult = true;
                    this.paginate_data = {};
                }
            }).catch(err => {

            });
        },

        goToPage(url, page) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                params: {
                    query: this.formSearch.query,
                    check: this.formSearch.check,
                    price_min: this.formSearch.price_min,
                    price_max: this.formSearch.price_max,
                    sort: this.formSearch.sort,
                    rating: this.formSearch.star,
                    page: page,
                },
                url: `${url}`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.products = res.data.data;
                this.paginate_data = res.data;
            }).catch(err => {

            });
        },

        nextPage(url) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                params: {
                    query: this.formSearch.query,
                    check: this.formSearch.check,
                    price_min: this.formSearch.price_min,
                    price_max: this.formSearch.price_max,
                    sort: this.formSearch.sort,
                    rating: this.formSearch.star,
                },
                url: url,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.products = res.data.data;
                this.paginate_data = res.data;
            }).catch(err => {

            });
        },

        prevPage(url) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                params: {
                    query: this.formSearch.query,
                    check: this.formSearch.check,
                    price_min: this.formSearch.price_min,
                    price_max: this.formSearch.price_max,
                    sort: this.formSearch.sort,
                    rating: this.formSearch.star,
                    page: page,
                },
                url: url,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.products = res.data.data;
                this.paginate_data = res.data;
            }).catch(err => {

            });
        }
    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                // console.log('Home watcher: ',val);
            },
            deep: true
        }
    },

    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        }
    },
    mounted() {
        if(this.currentUser) {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                url: `/api/products?page=1`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.paginate_data = res.data;
                this.products = res.data.data;
                this.ready = true;
            }).catch(err => {

            });

        }

    },
    components: {
        Footer,
        ProductCard,
        PaginateButton,
    }
}
</script>

<style scoped>
.no-result {
    height: 400px;
}

/* .mt-6 {
    margin-top: 96px;
} */

.carousel-img img {
  height: 1000px !important;
}

.product-link:hover {
    cursor: pointer !important;
}

.product-name {
  text-overflow: ellipsis !important;
  font-weight: 700;
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}

/* .width-75 {
    width: 60% !important;
} */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.badge-primary {
    background-color: orangered;
}

</style>
