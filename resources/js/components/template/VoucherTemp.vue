<template>
    <div class="row">
        <div class="col-md-3" v-for="voucher in vouchers" :key="voucher.id" :id="`card-${voucher.id}`">
            <div class="card" :class="voucher.claim ? 'blur-opac' : ''">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="mb-2 voucher-details ">
                                {{ voucher.details }}
                            </div>
                            <div><small>Expiring: 9 Hours Left</small></div>

                        </div>
                        <div class="col-md-4 border-left">
                            <div class="text-center claim">
                                <button :data-id="voucher.id"
                                    :disabled="voucher.claim ? true : false"
                                    @click="claimVoucher($event)"
                                    class="btn btn-primary btn-sm">
                                {{ voucher.claim ? 'Claimed' : 'Claim' }}
                                </button>
                            </div>
                        </div>
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

    props: ['vouchers'],

    computed: {

    },

    methods: {
        claimVoucher(e) {
            if(e.target.textContent.trim() == 'Claim') {
                e.target.textContent = 'Claimed';
                document.getElementById(`card-${e.target.getAttribute('data-id')}`).classList.add('blur-opac');
            }

            const AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
            axios({
                method: 'post',
                params: {id: e.target.getAttribute('data-id'), store_id: this.$route.params.id},
                url: `/api/store/voucher/claim`,
                headers: {Authorization: AuthStr}
            }).then(response => {

            }).catch(error => {

            });
        },
    },

    mounted() {

    },

    mounted() {

    },
}
</script>

<style scoped>
.voucher-details {
    height: 70px;
    overflow: hidden;
}

.card-body {
    padding: .75rem;
    background: salmon;
    color: #fff;
}

@media (min-width: 768px) {
    .card {
        height: 125px;
    }
    .claim {
        margin-top: 34px;
    }
}

</style>
