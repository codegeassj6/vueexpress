<template>
    <div class="position-fixed chat-position">
        <div class="card">
            <div class="card-header text-center" @click="toggleChat">
                <span class="mr-1">Message Us</span>
                <span class="badge badge-primary">4</span>
            </div>
            <div class="card-body position-relative hide" id="card-body">
                <div class="d-inline">
                    <img src="/img/steak.jpg" class="chat-img mr-2 img-rounded" alt="">
                </div>
                <div class="d-inline">
                    message
                </div>
            </div>
            <div class="card-footer hide" id="card-footer">
                <form class="input-group">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-primary"><i class="fa fa-send"></i></button>
                    </div>
                </form>
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
        toggleChat() {
            if (document.getElementById('card-body').classList.contains('hide')) {
                document.getElementById('card-body').classList.remove('hide');
                document.getElementById('card-footer').classList.remove('hide');
            } else {
                document.getElementById('card-body').classList.add('hide');
                document.getElementById('card-footer').classList.add('hide');
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

    },
}
</script>

<style scoped>
.chat-position {
    right: 0 !important;
    bottom: 0 !important;
    z-index: 999;
}

.card {
    width: 250px;
}

.card-body {
    height: 350px;
    padding: 1 rem;
}

.card-header {
    cursor: pointer;
}

.card-footer {
    padding: 0;
}

input.form-control {
    border-radius: 0;
}

.badge-primary {
    background: orangered !important;
}

img {
    width: 50px;
    height: 50px;
}

</style>
