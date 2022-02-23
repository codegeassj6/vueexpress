<template>
    <div class="container-lg">
        <div class="card">
            <div class="card-body">
                <div class="card-title text-center">
                    <h3>Payment Details</h3>
                    <i class="fa fa-cc-mastercard fa-5x ml-1 mr-1"></i>
                    <i class="fa fa-cc-visa fa-5x ml-1 mr-1"></i>
                    <i class="fa fa-cc-paypal fa-5x ml-1 mr-1"></i>
                    <hr>
                </div>
                <div class="card-text">
                    <div class="form-group">
                        <label for=""><h6>Card Number:</h6></label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter card number">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fa fa-cc-mastercard"></i></span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-8">
                            <!-- <label for=""><h6>Expiration Date:</h6></label>
                            <div class="input-group mb-3">
                                <input type="date" class="form-control">
                            </div> -->
                            <label for="example-datepicker">Choose a date</label>
                            <b-form-datepicker placeholder="YYYY-MM" :date-format-options="{ year: 'numeric', month: 'numeric' }" class="mb-2"></b-form-datepicker>
                        </div>

                        <div class="col-md-4">
                            <label for=""><h6>CVC Code:</h6></label>
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" placeholder="CVC">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa fa-cc-mastercard"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for=""><h6>Card Owner:</h6></label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter Full Name">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fa fa-cc-mastercard"></i></span>
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <b-button variant="primary">Add Payment Method</b-button>
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

        }
    },

    props: [],

    computed: {

    },

    methods: {

    },

    updated() {

    },

    mounted() {

    },
}
</script>

<style scoped>

</style>
