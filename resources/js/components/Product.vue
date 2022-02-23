<template lang="">
    <div class="container-lg" v-if="ready">
        <div class="jumbotron">
            <div class="row">
            <div class="col-lg-4">
                <div class="product-view">
                    <img src="/img/steak.jpg" alt="" />
                </div>
            </div>

            <div class="col-lg-8 text-orangered">
                <div class="product mb-2">
                    {{ product.name }}
                </div>
                <div class="review mb-2">
                    <div class="mr-4 star inline-block">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <span class="ml-2 mr-2">|</span>
                        <span>70 ratings</span>
                        <span class="ml-2 mr-2">|</span>
                        <span>2.5k sold</span>
                    </div>
                </div>

              <div class="mb-2">
                  <h3>{{variant.price}}</h3>
              </div>

                <div class="row mb-4">
                    <div class="col-md-3">
                        <span class="font-18">Variant</span>
                    </div>

                    <div class="col-md-9">
                        <div class="inline-block">
                            <template v-if="variant.variant" v-for="(variant, index) in product.variant">
                                <button class="btn btn-sm mr-2" :class="variant.selected ? 'btn-primary' : 'btn-light'" @click="selectVariant($event,variant)">
                                    {{ variant.variant }}
                                </button>
                            </template>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <span class="font-18">Quantity</span>
                    </div>

                    <div class="col-md-5">
                        <b-button-group size="sm">
                            <b-button variant="primary" @click="decreaseQuantity($event)">
                                <i class="fa fa-minus cursor-pointer" @click="$emit('click', decreaseQuantity)"></i>
                            </b-button>

                            <b-form-input class="form-control btn-input"
                                v-model="form.quantity"
                                :type="inputTypes.number"
                                @blur="changeQuantity"
                            />

                            <b-button variant="primary" @click="increaseQuantity($event)">
                                <i class="fa fa-plus cursor-pointer" @click="$emit('click', increaseQuantity)"
                                ></i>
                            </b-button>
                        </b-button-group>

                        <span class="ml-4">{{ variant.stock }} items remaining.</span>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-md-3">
                        <b-button variant="primary" @click="addToCart" :disabled="variant.stock == 0 || sending">
                            <i class="fa fa-shopping-cart" @click="$emit('click', addToCart)"></i>
                            Add to Cart
                        </b-button>
                    </div>
                </div>

                <hr>
                <div class="row">
                    <div class="col-lg-3">
                        <span><i class="fas fa-shield-check mr-2"></i>Delivery Guarantee</span>
                    </div>

                    <div class="col-lg-8">
                        <span>Get the items that you order by time given or get a free delivery fee.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="jumbotron">
        <div class="row">
            <div class="col-lg-1">
                <div class="img-round">
                    <img src="/img/steak.jpg" alt="" width="60" class="rounded-circle" height="75">
                </div>
            </div>

            <div class="col-lg-3 text-orangered">
                <div class="font-18 mb-2">{{product.store.name}}</div>
                <router-link class="btn btn-primary btn-sm" :to="`/store/${product.store.name.replace(/\s/g, '')}/${product.store_id}`">
                    <i class="fa fa-institution mr-2"></i>View Store
                </router-link>
            </div>

            <div class="col-lg-2">
                <span>Ratings: 174</span><br>
                <span>Products: 20</span>
            </div>

            <div class="col-lg-3">
                <span>Response Rate: 75%</span><br>
                <span>Response Time: Within hours</span>
            </div>

            <div class="col-lg-2">
                <span>Joined: 4 years ago</span><br>
                <span>Followers: 383</span>
            </div>

        </div>

        <div class="jumbotron mt-2">
            <div class="block">
                <h5>Product Details</h5>
                <hr>
            </div>

            <div class="block">
                <div class="row">
                    <div class="col-md-2">
                        <span class="font-18">Category</span>
                    </div>

                    <div class="col-md-10">
                        <span>{{product.category}}</span>
                    </div>
                </div>

            <!-- <div class="row">
                <div class="col-md-2">
                    <span class="font-18">Stock</span>
                </div>

                <div class="col-md-10">
                    <span>{{product.stock}}</span>
                </div>
            </div> -->

            <!-- <div class="row">
                <div class="col-md-2">
                    <span class="font-18">Ship from</span>
                </div>

                <div class="col-md-10">
                    <span>Brgy Quirino Panabo City</span>
                </div>
            </div> -->

            <div class="row">
                <div class="col-md-2">
                    <span class="font-18">Description</span>
                </div>

                <div class="col-md-10">
                    <span>{{variant.description}}</span>
                </div>
            </div>
        </div>
    </div>

</div>

    <div class="jumbotron">
        <h5>Product Ratings</h5>
        <hr>

        <div class="row">
            <div class="col-lg-2 text-orangered">
                <div class="text-center">
                    <div class="block">5 out of 5</div>
                    <div class="block">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
            </div>

            <div class="col-lg-10">
                <div class="mt-2">
                    <b-button @click="getReviewsByRating($event, 5)" variant="primary" class="mb-2" size="sm">5 star</b-button>
                    <b-button @click="getReviewsByRating($event, 4)" variant="primary" class="mb-2" size="sm">4 star</b-button>
                    <b-button @click="getReviewsByRating($event, 3)" variant="primary" class="mb-2" size="sm">3 star</b-button>
                    <b-button @click="getReviewsByRating($event, 2)" variant="primary" class="mb-2" size="sm">2 star</b-button>
                    <b-button @click="getReviewsByRating($event, 1)" variant="primary" class="mb-2" size="sm">1 star</b-button>
                    <b-button variant="primary" class="mb-2" size="sm">With comment</b-button>
                    <b-button variant="primary" class="mb-2" size="sm">With media</b-button>
                </div>
            </div>
        </div>
        <hr>

        <Comment :reviews="reviews" />
    </div>

    <Footer />
  </div>
</template>
<script>
import Footer from './template/Footer.vue'
import Comment from './template/Comment.vue'

export default {
    data() {
      return {
        ready: false,
        product: '',
        variant: '',
        selected: null,
        sending: false,
        form: {
          quantity: 1,
        },
        inputTypes: {
            number: 'number'
        },
        reviews: null,
      }
    },

    methods: {
        getReviewsByRating(e, n) {console.log(n, this.$route.params.id);
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'get',
                params: {rating: n},
                url: `/api/products/review/${this.$route.params.id}`,
                headers: {Authorization: AuthStr}
            }).then(res => {console.log(res.data);
                this.reviews = res.data;
            }).catch(err => {

            });
        },

        addToCart(e) {
            this.sending = true;
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                data: {
                    product_id: this.$route.params.id,
                    quantity: this.form.quantity,
                    variant: this.variant.variant
                    },
                url: `/api/cart/add/item`,
                headers: {Authorization: AuthStr}
            }).then(response => {console.log(this.form.quantity);
                if(response.data.error) {
                    alert(response.data.error);
                } else {
                    this.$root.$emit('cartCount', this.form.quantity);
                    this.toast('b-toaster-bottom-left', true, 'success');
                }

                this.sending = false;
            }).catch(error => {

            });
        },

        selectVariant(e, variant) {
            this.product.variant.forEach(element => {
                element.selected = false;
            });
            variant.selected = true;
            this.variant = variant;
            if(this.form.quantity > variant.stock) {
                this.form.quantity = variant.stock;
            }
            if(this.form.quantity == 0 && variant.stock != 0) {
                this.form.quantity = 1;
            }

        },

        changeQuantity(e) {
            if(this.form.quantity < 1) {
                this.form.quantity = 1;
                return;
            }

            // if input is greater than max quantity return max quantity as value
            if(this.form.quantity > this.variant.stock) {
                this.form.quantity = this.variant.stock;
            }
        },

        increaseQuantity(e) {console.clear();
            if(this.form.quantity >= this.variant.stock) {
                return;
            }
            this.form.quantity ++;
        },

        decreaseQuantity(e) {
            if(this.form.quantity <= 1) {
                return;
            }
            this.form.quantity --;
        },

        toast(toaster, append = false, variant) {
            this.counter++
            this.$bvToast.toast(`Added to Cart`, {
                title: 'Successfully added to cart',
                toaster: toaster,
                solid: true,
                appendToast: append,
                variant: variant
            });
        },
    },
    components: {
        Footer,
        Comment
    },

    $data: {
        handler: function(val, oldVal) {
            console.log(val);
        },
        deep: true
    },

    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios.get(`/api/products/${this.$route.params.id}`, {
            headers: { Authorization: AuthStr },
        })
        .then(res => {
            this.product = res.data.product;
            this.ready = true;
            this.variant = this.product.variant[0];
        }).catch(err => {

        });

        axios({
            method: 'get',
            url: `/api/products/review/${this.$route.params.id}`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.reviews = res.data;
        }).catch(err => {

        });

    },

}
</script>

<style scoped>
.product-view img {
  height: 350px;
}

.product {
  font-weight: 500;
  font-size: 1.25rem;
  width: 100%;
}

.font-18 {
  font-size: 18px;
  font-weight: 500;
}

.attach-image {
  width: 75px;
  height: 75px;
  margin-right: 8px;
  margin-top: 8px;
}

.btn-input {
  width: 60px;
  border-radius: 0;
}





input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  text-align: center;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
  text-align: center;
}
</style>

