<template>
    <div>
        <div class="jumbotron" v-for="(item, index) in items" :key="item.id">
            <div class="row mb-2">
                <div class="col-md-2">
                    <router-link :to="`/product/${item.product.name}/${item.product.id}`">
                        <img src="/img/steak.jpg" alt="">
                    </router-link>
                </div>

                <div class="col-md-10">
                    <router-link :to="`/`">
                        <h6 class="text-orangered">{{item.product.name}}</h6>
                    </router-link>
                    <div> asd asd asd asd asd asd asd asd ased asd asd asd as</div>
                    <div class="small">Variant: {{item.variant}}</div>

                    <template v-if="!item.editable">

                        <div class="text-orangered" v-if="item.rate == null">
                            <a href="#!"><i class="fa fa-star-o" @click="starReview(index, item, 1)"></i></a>
                            <a href="#!"><i class="fa fa-star-o" @click="starReview(index, item, 2)"></i></a>
                            <a href="#!"><i class="fa fa-star-o" @click="starReview(index, item, 3)"></i></a>
                            <a href="#!"><i class="fa fa-star-o" @click="starReview(index, item, 4)"></i></a>
                            <a href="#!"><i class="fa fa-star-o" @click="starReview(index, item, 5)"></i></a>
                        </div>

                        <div class="text-orangered" v-if="item.rate == 1">
                            <a href="#!"><i class="fa fa-star" @click="starReview(index, item, 1)"></i></a>
                            <a href="#!"><i class="fa fa-star-o" @click="starReview(index, item, 2)"></i></a>
                            <a href="#!"><i class="fa fa-star-o" @click="starReview(index, item, 3)"></i></a>
                            <a href="#!">
                                <i class="fa fa-star-o" @click="starReview(index, item, 4)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 5)">
                                <i class="fa fa-star-o"></i>
                            </a>
                        </div>

                        <div class="text-orangered" v-if="item.rate == 2">
                            <a href="#!" @click="starReview(index, item, 1)">
                                <i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 2)">
                                <i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 3)">
                                <i class="fa fa-star-o" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 4)">
                                <i class="fa fa-star-o" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 5)">
                                <i class="fa fa-star-o" @click="$emit('click', starReview)"></i>
                            </a>
                        </div>

                        <div class="text-orangered" v-if="item.rate == 3">
                            <a href="#!" @click="starReview(index, item, 1)">
                                <i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 2)">
                                <i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 3)">
                                <i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 4)">
                                <i class="fa fa-star-o" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 5)">
                                <i class="fa fa-star-o" @click="$emit('click', starReview)"></i>
                            </a>
                        </div>

                        <div class="text-orangered" v-if="item.rate == 4">
                            <a href="#!" @click="starReview(index, item, 1)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 2)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 3)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 4)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 5)"><i class="fa fa-star-o" @click="$emit('click', starReview)"></i>
                            </a>
                        </div>

                        <div class="text-orangered" v-if="item.rate == 5">
                            <a href="#!" @click="starReview(index, item, 1)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 2)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 3)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 4)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                            <a href="#!" @click="starReview(index, item, 5)"><i class="fa fa-star" @click="$emit('click', starReview)"></i>
                            </a>
                        </div>

                        <textarea rows="3" v-model.trim="item.comment" :id="item.id" class="form-control mb-2"></textarea>
                        <div class="position-relative">
                            <label :for="`input_${item.id}`">
                                <div class="btn btn-sm btn-outline-primary"><i class="fa fa-photo"></i> Attach Photo</div>
                            </label>
                            <input type="file" class="hide" multiple="true" accept="image/*, video/*" @change="attachImage($event, item.id)" :id="`input_${item.id}`">
                            <button type="button" v-if="item.review" @click="item.editable = true" class="btn btn-info btn-sm float-right">Cancel</button>
                            <button type="button" @click="submitReview($event, item)" class="btn btn-primary btn-sm float-right">Submit</button>
                        </div>

                        <div :id="`gallery_${item.id}`">

                        </div>

                    </template>

                    <template v-else>
                        <div class="text-orangered fade-text" v-if="item.review.rating == 1">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>

                        <div class="text-orangered fade-text" v-if="item.review.rating == 2">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>

                        <div class="text-orangered fade-text" v-if="item.review.rating == 3">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>

                        <div class="text-orangered fade-text" v-if="item.review.rating == 4">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>

                        <div class="text-orangered fade-text" v-if="item.review.rating == 5">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>

                        <div v-if="item.review.comment">{{item.review.comment}}</div>
                        <div class="text-right">
                        <button type="button" @click="item.editable = false;" class="btn btn-primary btn-sm">Edit Review</button>
                        </div>

                    </template>

                </div>
            </div>







        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: null,
        }
    },

    props: [],

    computed: {

    },

    methods: {
        submitReview(e, item) {
            if(item.rate == null) {
                alert('please rate the product');
                return;
            }

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                params: {comment: item.comment, rating: item.rate},
                url: `/api/account/review`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                const data = {
                    rating: item.rate,
                    comment: item.comment,
                    product_id: item.product_id
                }
                item.review = data;
                item.editable = true;

            }).catch(err => {

            });
        },

        starReview(index, item, rate) {
            item.rate = rate;
        },

        attachImage(e, id) {
            var input = document.getElementById(`input_${id}`);
            var file_count = input.files.length;

            if(file_count > 5) {
                alert('only 5 images allowed!')
                return false;
            } else {
                for(let i = 0; i < file_count; i++){
                    var urls = URL.createObjectURL(e.target.files[i]);
                    document.getElementById(`gallery_${id}`).innerHTML += '<img src="'+urls+'" class="mr-2" width="100" height="100">';
                }
            }


        }

    },

    watch: {
        $data: {
            handler: function(val, oldVal) {
                console.log('watcher: ',val);
            },
            deep: true
        }
    },

    updated() {

    },

    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/account/review`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.items = res.data;
        }).catch(err => {

        });
    },
}
</script>

<style scoped>
img {
    height: 100px;
}

/* .fa-star-o, .fa-star {
    cursor: pointer;
} */

.fa {
    color: orangered;
}

.btn-outline-primary:hover {
    background: #fff !important;
    color: orangered !important;
}

</style>
