<template lang="">
    <div class="container-lg">
        <div class="row">
            <div class="col-md-2">
                <h6><i class="fa fa-user"></i> My Account</h6>
                <div class="ml-3 mb-2">
                    <div>
                        <router-link to="/account">
                            <i class="fa fa-address-card"></i> Profile
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/account/payment">
                            <i class="fa fa-credit-card"></i> Payment Methods
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/account/security">
                            <i class="fa fa-key"></i> Security
                        </router-link>
                    </div>
                </div>

                <div>
                    <router-link to="/account/order">
                        <i class="fa fa-book"></i> My Orders
                    </router-link>
                </div>
                <div>
                    <router-link to="/account/voucher">
                        <i class="fa fa-ticket"></i> My Voucher
                    </router-link>
                </div>
                <div>
                    <router-link to="/account/review">
                        <i class="fa fa-edit"></i> My Reviews
                    </router-link>
                </div>
            </div>

            <div class="col-md-7">
                <template v-if="$route.name == 'Account'">
                    <b-form>
                        <div class="card mb-2 bg-light">
                            <div class="card-body">
                                <div class="d-flex justify-content-center">
                                    <img :src="`${profile.image}`" class="mb-2" height="150" width="200" />
                                </div>

                                <div class="d-flex justify-content-center" v-if="profile.input == false">
                                    <label for="upload">
                                        <div class="btn btn-outline-primary">Update Photo</div>
                                    </label>
                                    <input type="file" class="hide" @change="displayPicture($event)" id="upload" accept="image/*">
                                </div>

                                <div class="d-flex justify-content-center" v-else>
                                    <button type="button" @click="uploadPicture" class="btn btn-primary mr-2">Update</button>
                                    <button type="button" class="btn btn-info" @click="cancelUpload">Cancel</button>
                                </div>

                            </div>
                        </div>

                        <div class="form-group">
                            <label for="" class="d-block">Email address:</label>
                            <input type="text" placeholder="Enter email" class="form-control editable" v-model="form.email" disabled>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="" class="d-block">First Name:</label>
                                    <input type="text" placeholder="Enter first name" class="form-control" disabled>
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="" class="d-block">Last Name:</label>
                                    <input type="text" placeholder="Enter first name" class="form-control" disabled>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="" class="d-block">Address:</label>
                            <input type="text" placeholder="Enter Address" class="form-control editable" v-model="form.address" disabled>
                        </div>


                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="" class="d-block">City:</label>
                                    <input type="text" placeholder="Enter City" class="form-control blur-class editable" @focus="focus = true"  v-model="form.city" @blur="blurSelection($event)" disabled>
                                    <div class="card position-absolute" v-if="edit && focus">
                                        <div class="card-body">
                                            <div v-for="city in cities" @click="selectCity($event, city)">{{city}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="" class="d-block">Zip code:</label>
                                    <input type="text" placeholder="Enter zip code" class="form-control editable" v-model="form.zip_code" disabled>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="" class="d-block">Contact Number:</label>
                                    <input type="text" placeholder="Enter contact number" class="form-control editable" v-model="form.contact" disabled>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="" class="d-block">Landmark:</label>
                            <input type="text" placeholder="Enter landmark" class="form-control editable" v-model="form.landmark" disabled>
                        </div>

                        <div class="float-right">
                            <b-button variant="primary" @click="updateProfile" v-if="edit">
                                <i class="fa fa-pencil" @click="$emit('click', updateProfile)"></i> Save Changes
                            </b-button>
                            <b-button variant="info" v-if="edit" @click="cancelEdit">
                                <i class="fa fa-close" @click="$emit('click', cancelEdit)"></i> Cancel
                            </b-button>

                            <b-button variant="primary" @click="editProfile($event)" v-if="!edit">
                                <i class="fa fa-pencil" @click="$emit('click', editProfile)"></i> Edit Profile
                            </b-button>
                        </div>

                    </b-form>
                </template>
                <router-view :key="$route.path"></router-view>
            </div>

            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <div class="small text-muted"><i class="fa fa-bullhorn"></i> Sponsor Ad</div>
                        </div>
                        <div class="card-text">This is an Ad</div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            temp: {
                image: null,
            },

            form: {
                email: '',
                address: '',
                zip_code: '',
                contact: '',
                landmark: '',
            },
            edit: false,
            focus: false,
            cities: [
                'Panabo',
                'Tagum',
                'Davao'
            ],
            profile: {
                image: '/img/steak.jpg',
                input: false,

            }
        }
    },
    methods: {
        displayPicture(e) {
            let file = e.target.files
            this.temp.image = file;
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    this.profile.image = e.target.result
                    this.profile.input = true;
                }
                reader.readAsDataURL(file[0])
            }
        },

        uploadPicture() {
            let formData = new FormData();
            formData.append('file', this.temp.image[0]);
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                data: formData,
                url: `/api/upload/user/image`,
                headers: {Authorization: AuthStr, 'Content-Type': 'multipart/form-data'}
            }).then(res => {
                console.log(res.data);
            }).catch(err => {

            });

            // axios.post( '/api/upload/user/image',
            //     formData,
            //     {
            //         headers: {
            //             Authorization: AuthStr, 'Content-Type': 'multipart/form-data'

            //         }
            //     }
            // ).then(function(res){
            //     console.log(res.data);
            // })
            // .catch(function(){
            //     console.log('FAILURE!!');
            // });

            },

        cancelUpload() {
            this.profile.input = false;
        },


        editProfile(e) {
            const input = document.getElementsByClassName('editable');
            for(var i = 0; i < input.length; i++) {
                input[i].removeAttribute('disabled');
            }
            // input.forEach(element => {
            //     element.removeAttribute('disabled');
            // });
            this.edit = true;
        },

        selectCity(e, city) {
            if(this.edit) {
                this.form.city = city;
                this.focus = false;
            }
        },

        blurSelection() {
            document.addEventListener('click', e => {
               if(e.target.classList.contains('blur-class')) {
                   e.stopImmediatePropagation();
               } else {
                   this.focus = false;
               }
            });
        },

        updateProfile() {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                params: {
                    email: this.form.email,
                    contact: this.form.contact,
                    zip_code: this.form.zip_code,
                    landmark: this.form.landmark,
                    city: this.form.city,
                    address: this.form.address,
                },
                url: `/api/account/profile`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                this.cancelEdit();
            }).catch(err => {

            });
        },

        cancelEdit() {
            this.edit = false;
            const input = document.querySelectorAll('input');
            input.forEach(element => {
                element.setAttribute('disabled', 'disabled');
            });
        },

    },

    mounted() {
        const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
        axios({
            method: 'get',
            url: `/api/auth/me`,
            headers: {Authorization: AuthStr}
        }).then(res => {
            this.form.first_name = res.data.first_name;
            this.form.last_name = res.data.last_name;
            this.form.email = res.data.email;
            this.form.city = res.data.city;
            this.form.zip_code = res.data.zip_code;
            this.form.address = res.data.address;
            this.form.contact = res.data.contact;
            this.form.landmark = res.data.landmark;
        }).catch(err => {

        });
    }
}
</script>
<style scoped>
a.router-link-exact-active {
    color: red;
}

.position-absolute .card-body {
    padding: 0 !important;
}

.position-absolute .card-body div {
    padding: 2px 12px;
    min-width: 200px;
    max-width: 400px;
    z-index: 999;
}

.position-absolute .card-body div:hover {
    background: linen;
}

</style>

