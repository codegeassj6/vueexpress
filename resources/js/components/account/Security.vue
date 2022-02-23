<template>
    <div>
        <div class="card">
            <div class="card-header">
                Password & Encryption Settings
            </div>
            <div class="card-body">
                <div class="card-text">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="old">Old Password:</label>
                        </div>
                        <div class="col-md-9">
                            <div class="form-group">
                                <input type="password" v-model.trim="form.password" class="form-control" autocomplete="off" id="old">
                            </div>
                        </div>

                        <div class="col-md-3">
                            <label for="new">New Password:</label>
                        </div>
                        <div class="col-md-9">
                            <div class="form-group">
                                <input type="password" id="new" v-model.trim="form.new_password" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-3">
                            <label for="new">Confirm Password:</label>
                        </div>
                        <div class="col-md-9">
                            <div class="form-group">
                                <input type="password" id="new" v-model.trim="form.confirm_password" class="form-control">
                            </div>
                        </div>

                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary" @click="resetPassword">
                            Cofirm Reset
                        </button>
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
            form: {
                password: null,
                new_password: null,
                confirm_password: null,
            }
        }
    },

    props: [],

    computed: {

    },

    methods: {
        resetPassword() {
            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                params: {password: this.form.password, new_password: this.form.new_password, confirm_password: this.confirm_password},
                url: `/api/account/profile/update/password`,
                headers: {Authorization: AuthStr}
            }).then(res => {
                console.log(res);
            }).catch(err => {

            });
        }
    },

    updated() {

    },

    mounted() {

    },
}
</script>

<style scoped>

</style>
