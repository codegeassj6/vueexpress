<template lang="">
    <div class="container-lg">
        <div class="row" v-if="ready">
            <div class="col-lg-8 mb-4">
                <div class="card mb-3">
                    <div class="card-body small-card-body" id="parent-items">
                        <div class="float-right">
                            <a href="#!" @click="deleteItem($event)" class="text-orangered"><i class="fa fa-trash-o fa-lg" @click="$emit('click', deleteItem)"></i> Delete</a>
                        </div>
                        <input class="mr-2" id="selectall" type="checkbox" @change="selectAll($event)">
                        <label class="form-check-label" for="selectall">
                            Select All Items
                        </label>
                    </div>
                </div>

                <div class="card cart-card">
                    <div class="card-body small-card-body" id="card-body">
                        <div id="main" v-if="!items">
                            <div class="fof">
                                <h2>No Items in your Cart </h2>
                            </div>
                        </div>

                        <div class="jumbotron" v-if="item.length" v-for="(item, index) in items" :key="index">
                            <div class="d-block mb-2">
                                <input type="checkbox"
                                v-model="check_stores"
                                :id="stores[index]"
                                :value="stores[index]"
                                @change="selectStore($event, item)"
                                >
                                <label :for="stores[index]">
                                    {{ stores[index] }}
                                </label>
                            </div>

                            <div class="row mb-2" :class="detail.variantDetails.stock ? '' : 'blur-opac'" v-for="(detail, ind) in item" :key="item.id">
                                <div class="col-sm-7">

                                    <div class="col-4 text-truncate">
                                        <div class="inline-block ">
                                            <input type="checkbox" v-model="orders" :value="detail.cart_id" :id="detail.cart_id">
                                            <label class="product-name" :for="detail.cart_id">
                                                {{ detail.name }}
                                            </label>

                                        </div>
                                        <div class="block ml-3">
                                            <router-link class="text-orangered" :to="`/product/${detail.name.replace(/\s/g, '')}/${detail.id}`">
                                                <img src="/img/steak.jpg" alt="" class="product-img">
                                            </router-link>
                                        </div>
                                    <div>

                                </div>
                            </div>


                                    <!-- <div class="ml-2 row">
                                        <div class="col-sm-3">
                                            <div class="block">
                                                <label :for="detail.cart_id">
                                                    <img src="/img/steak.jpg" alt="">
                                                </label>
                                                <div class="text-center block">
                                                    <input type="checkbox" v-model="orders" :value="detail.cart_id" :id="detail.cart_id">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-9">
                                            <h6>
                                                <router-link class="text-orangered" :to="`/product/${detail.name.replace(/\s/g, '')}/${detail.id}`">
                                                {{ detail.name }}
                                                </router-link>
                                            </h6>
                                            <div class="small">{{detail.description}}</div>
                                            <div>Variant: <span class="fade-text">{{detail.variant}}</span></div>
                                            <StarRating :rating="detail.average_rating" />
                                        </div>
                                    </div> -->
                                </div>

                                <div class="col-sm-3">
                                    <div v-if="detail.variantDetails.stock">Price: {{ detail.variantDetails.price }}</div>
                                    <div class="mb-1">
                                        <b-button-group size="sm" class="mt-2" v-if="detail.variantDetails.stock">
                                            <b-button
                                                variant="primary"
                                                @click="decreaseQuantity($event, detail)"
                                            >
                                            <i
                                                class="fa fa-minus cursor-pointer"
                                                @click="$emit('click', decreaseQuantity)"
                                            >
                                            </i>
                                            </b-button>

                                            <b-form-input
                                                class="form-control btn-input"
                                                :type="inputTypes.number"
                                                :value="detail.quantity"
                                                @blur="changeQuantity($event,detail)"
                                            />

                                            <b-button variant="primary" @click="increaseQuantity($event, detail)">
                                                <i class="fa fa-plus cursor-pointer" @click="$emit('click', increaseQuantity)">
                                                </i>
                                            </b-button>
                                        </b-button-group>
                                    </div>
                                    <div class="small text-danger">{{ detail.variantDetails.stock }} items left</div>
                                </div>

                                <div class="col-sm-2">
                                    <div v-if="detail.variantDetails.stock">
                                        <span><b>Total Price</b></span><br />
                                        <span>P{{detail.variantDetails.price * detail.quantity}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <h5>Order Summary</h5>

                                <div>
                                    <!-- <div class="float-right" v-if="subtotal"><span>{{subtotal}}</span></div>
                                    <h6>Subtotal</h6> -->
                                    <div class="float-right" v-if="computeSubTotal"><span>{{computeSubTotal}}</span></div>
                                    <h6>Subtotal</h6>
                                </div>

                                <div>
                                    <div class="float-right" v-if="computeFee"><span>₱{{computeFee}}</span></div>
                                    <h6>Shipping Fee</h6>
                                </div>

                                <div>
                                    <div class="float-right"><span>₱100</span></div>
                                    <h6>Discount</h6>
                                </div>

                                <div class="mt-4 position-relative">
                                    <div class="float-right"><button class="btn btn-primary btn-sm">Apply</button></div>

                                    <input type="text" v-model="voucher" class="borderless-input text-muted mb-2" placeholder="Select voucher">

                                    <!-- <div class="card position-absolute">
                                        <div class="card-body">
                                            <div class="voucher-link">Get a free delivery fee</div>
                                            <div class="voucher-link">Get a free item minumum spend of 500php asd ad ad ad asd ad ada ad </div>
                                        </div>
                                    </div> -->

                                </div>
                                <hr>

                                <div class="mb-4">
                                    <div class="float-right" v-if="computeTotal"><span>₱<span>{{computeTotal}}</span></span></div>
                                    <h6>Total</h6>
                                </div>

                                <button class="btn btn-group-justified btn-primary" @click="checkOut($event)" :disabled="!this.orders.length || sending">Checkout</button>

                            </div>
                        </div>
			        </div>
		        </div>
	        </div>
        </div>
    </div>
</template>
<script>
import StarRating from './template/StarRating.vue'

export default {
    data() {
      return {
        ready: false,
        items: null,
        orders: [],
        inputTypes: {
            number: 'number'
        },
        subtotal: null,
        total: null,
        fee: 0,
        stores: null,
        check_stores: [],
        sending: false,
        voucher: null,
      }
    },

    computed: {
        computeTotal() {
            if(this.orders.length && this.subtotal) {
                return this.subtotal + this.fee;
            }
        },

        computeSubTotal() {
            this.subtotal = null;
            this.orders.forEach((elem, index) => {
                this.items.forEach(item => {
                   for (let i = 0; i < item.length; i++) {
                       if(item[i].cart_id == elem) {
                           this.subtotal = this.subtotal += item[i].variantDetails.price * item[i].quantity;
                       }
                   }
                });
            });
            return this.subtotal;

        },


        computeFee() {
            var stores = [];

            if(this.orders.length == 0) {
                this.fee = 0;
            } else {
                this.orders.forEach((elem, index) => {
                    this.items.forEach(item => {
                    for (let i = 0; i < item.length; i++) {
                        if(item[i].cart_id == elem && !stores.includes(item[i].store.name)) {
                            stores.push(item[i].store.name);
                            if(stores.length == 1) {
                                this.fee = 60;
                            } else {
                                this.fee = 50 * stores.length;
                            }
                        }
                    }
                    });
                });
            }

            return this.fee;
        }
    },

    components: {
        StarRating,
    },

    methods: {
        // this one
        selectStore(e, item) {
            // check if uncheck
            if(e.target.checked) {
                item.forEach(elem => {
                    if(!this.orders.includes(elem.cart_id) && elem.variantDetails.stock > 0) {
                        this.orders.push(elem.cart_id);
                    }
                });
            } else {
                item.forEach((elem, index) => {
                    // console.log(elem);
                    if(this.orders.includes(elem.cart_id)) {console.log('if');
                        for (let i = 0; i < this.orders.length; i++) {
                            if(this.orders[i] == elem.cart_id) {
                                this.orders.splice(i, 1);
                            }
                        }
                    }
                });
            }
        },

        selectAll(e) {
            this.orders = [];
            this.check_stores = [];

            if(e.target.checked) {
                this.items.forEach(elem => {
                    for(let i = 0; i < elem.length; i++) {
                        if(elem[i].variantDetails.stock > 0) {
                            this.orders.push(elem[i].cart_id);
                        }
                    }
                });

                this.stores.forEach(elem => {
                   this.check_stores.push(elem);
                });

            }

        },

        changeQuantity(e, detail) {

            // delete item and orders if quantity is below 0
            if(e.target.value <= 0) {
                this.items.forEach((elem, index) => {
                    for (let i = 0; i < elem.length; i++) {
                        if(elem[i].cart_id == detail.cart_id) {
                            this.items[index].splice([i], 1);
                            this.orders.forEach((id, ind) => {
                                if(id == detail.cart_id) {
                                    this.orders.splice(ind, 1);
                                }
                            })
                        }
                    }
                });
            }
            // if value is higher than stock make it the value = stock
            if(e.target.value > detail.variantDetails.stock) {
                this.items.forEach((elem, index) => {
                    for (let i = 0; i < elem.length; i++) {
                        if(elem[i].cart_id == detail.cart_id) {
                            this.$root.$emit('cartCount', detail.variantDetails.stock - detail.quantity);
                            detail.quantity = detail.variantDetails.stock;
                            e.target.value = detail.variantDetails.stock;
                        }
                    }
                });
            } else {
                this.items.forEach((elem) => {
                    for (let i = 0; i < elem.length; i++) {
                        if(elem[i].cart_id == detail.cart_id) {
                            if(elem[i].quantity < e.target.value) {
                                this.$root.$emit('cartCount', e.target.value - elem[i].quantity);
                            } else {
                                if(elem[i].quantity > e.target.value) {
                                    this.$root.$emit('cartCount', e.target.value - elem[i].quantity);
                                }
                            }
                            elem[i].quantity = parseInt(e.target.value);
                        }
                    }
                });
            }

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);

            axios({
                method: 'post',
                params: {quantity: detail.quantity, product_id: detail.id, variant: detail.variant},
                url: `/api/cart/quantity/${detail.cart_id}`,
                headers: {Authorization: AuthStr}
            }).then(res => {

            }).catch(error => {
            //   if (error.response.status === 401) {
            //     this.$store.commit("logout");
            //     this.$router.push({path: '/'});
            //   }
            });
        },

        increaseQuantity(e, detail) {
            if(detail.variantDetails.stock != detail.quantity) {
                this.$root.$emit('cartCount', 1);
                this.items.forEach(elem => {
                    for (let i = 0; i < elem.length; i++) {
                        if(elem[i].cart_id == detail.cart_id) {
                            elem[i].quantity = elem[i].quantity += 1;
                        }
                    }
                });
            } else {
                return;
            }

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                data: {product_id: detail.id, variant: detail.variant},
                url: '/api/cart/increase/product/quantity',
                headers: {Authorization: AuthStr}
            }).then(res => {

            }).catch(error => {
                // if (error.response.status === 401) {
                //     this.$store.commit("logout");
                //     this.$router.push({path: '/'});
                // }
            });
        },

        decreaseQuantity(e, detail) {
            if(detail.quantity > 1) {
                this.$root.$emit('cartCount', -1);
                this.items.forEach(elem => {
                    for (let i = 0; i < elem.length; i++) {
                        if(elem[i].cart_id == detail.cart_id) {
                            elem[i].quantity = elem[i].quantity -= 1;
                        }
                    }
                });
            } else {
                this.items.forEach((elem,index) => {
                    for (let i = 0; i < elem.length; i++) {
                        if(elem[i].cart_id == detail.cart_id) {
                            this.items[index].splice([i], 1);
                            this.orders.forEach((id, ind) => {
                                if(id == detail.cart_id) {
                                    this.orders.splice(ind, 1);
                                }
                            })
                        }
                    }
                });
            }

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                data: {product_id: detail.id, variant: detail.variant},
                url: '/api/cart/decrease/product/quantity',
                headers: {Authorization: AuthStr}
            }).then(res => {

            }).catch(error => {
                if (error.response.status === 401) {
                    this.$store.commit("logout");
                    this.$router.push({path: '/'});
                }
            });
        },


        // this one
        deleteItem(e) {console.clear();
            if(!this.orders || this.items == null) {
                return;
            }

            var data = this.orders;
            this.orders.forEach(elem => {
                // document.getElementById(elem).closest('.row.mb-2').innerHTML = '';
                this.items.forEach((item, index) => {
                   for (let i = 0; i < item.length; i++) {
                       if(item[i].cart_id == elem) {
                           this.items[index].splice(i, 1);
                       }
                   }
                });
            });



            if(document.getElementById('selectall').checked == true) {
                document.getElementById('selectall').checked = false;
            }
            this.orders = [];

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'delete',
                data: {id: data},
                url: '/api/cart/delete',
                headers: {Authorization: AuthStr}
            }).then(res => {
                console.log(res);
            }).catch(error => {
                if (error.response.status === 401) {
                    this.$store.commit("logout");
                    this.$router.push({path: '/'});
                }
            });
        },

        // this one
        checkOut(e) {
            if(!this.orders) {
                return;
            }

            this.sending = true;
            document.getElementById('selectall').checked = false;

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                params: {id: this.orders, voucher: this.voucher},
                url: '/api/cart/order',
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.check_stores = [];
                this.orders = [];
                this.stores = Object.keys(res.data[0]);
                this.items = Object.values(res.data[0]);
                this.sending = false;
                this.$router.push({path: '/account/order/receive'});
            }).catch(error => {

            });
        },

    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('watcher: orders: ', val.orders, '\n', 'watcher: items ', val.items);
                // console.log('watcher: orders: ', oldVal.orders, '\n', 'watcher: items ', oldVal.items);
                console.log('\n');
            },
            deep: true
        }
    },

    updated() {

    },
    mounted() {
        if(this.$store.getters.currentUser) {
          const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
          // get Cart items

          axios.get("/api/cart", { headers: { Authorization: AuthStr } })
            .then(res => {
                this.stores = Object.keys(res.data[0]);
                this.items = Object.values(res.data[0]);
                this.ready = true;
            }).catch(err => {
              // if (err.response.status === 401) {
              //   this.$store.commit("logout");
              //   this.$router.push({path: '/'});
              // }
            })

        }

    }
}
</script>
<style scoped>

.product-img {
    width: 100%;
    height: 100px;
}

.borderless-input, .borderless-input:focus {
    border:none !important;
    border-bottom: 1px solid #cacaca !important;
    outline: none;
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

.btn-input {
  width: 60px;
  border-radius: 0;
}

.card.position-absolute .card-body {
    padding: 0 !important;
    max-width: 400px;
}

.voucher-link {
    width: 100%;
    padding: 2px 12px;
    cursor: pointer;
    z-index: 999;
}

.voucher-link:hover {
    background: linen;
}

</style>
