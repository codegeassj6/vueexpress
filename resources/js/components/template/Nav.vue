<template>
  <div class="fixed-top">
    <b-navbar toggleable="sm" class="nav-color nav-opening" v-if="!currentUser">
      <div class="container-lg">
        <b-navbar-nav>
          <span>Email: jcdnbalaba@gmail.com</span>
          <span class="ml-2">Contact +1 5589 55488 55</span>
          <span class="ml-2">Sun-Mon 9am - 5pm</span>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <router-link to="/login">
            <b-nav-item href="/login" class="text-white">Order Now</b-nav-item>
          </router-link>
        </b-navbar-nav>
      </div>
    </b-navbar>

    <b-navbar toggleable="lg" class="bg-orangered">
      <div class="container-lg">
        <router-link to="/">
          <b-navbar-brand href="/" class="text-white"
            >Express Delivery Experts</b-navbar-brand
          >
        </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="text-white" v-if="!currentUser">
            <b-nav-item href="#">Service</b-nav-item>
            <b-nav-item href="#">Feedback</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <template v-if="!currentUser">
              <router-link to="/login">
                <b-nav-item href="/login">Login</b-nav-item>
              </router-link>
              <router-link to="/register">
                <b-nav-item href="/register">Register</b-nav-item>
              </router-link>
            </template>

            <template v-else>
                <b-nav-item href="#!" class="relative mr-1">
                    <i class="fa fa-bell fa-lg"></i>
                    <b-badge v-if="cart_count" variant="light">{{
                    cart_count
                  }}</b-badge>
                </b-nav-item>

                <b-nav-item href="#!" class="relative mr-1">
                    <i class="fa fa-comment fa-lg"></i>
                    <b-badge v-if="cart_count" variant="light">{{
                    cart_count
                  }}</b-badge>
                </b-nav-item>

              <router-link to="/cart" class="mr-2">
                <b-nav-item href="#!" id="cart-badge" class="relative">
                  <i class="fa fa-shopping-cart fa-lg"></i>
                  <b-badge v-if="cart_count" variant="light">{{
                    cart_count
                  }}</b-badge>
                </b-nav-item>
              </router-link>

              <b-nav-item-dropdown right>
                <template #button-content class="text-white">
                  {{ currentUser.first_name + " " + currentUser.last_name }}
                </template>
                <router-link to="/account">
                    <b-dropdown-item href="#!">My Account</b-dropdown-item>
                </router-link>
                <router-link to="/account/order">
                    <b-dropdown-item href="#!">My Order</b-dropdown-item>
                </router-link>

                <b-dropdown-item href="#!" @click.prevent="logout"
                  >Logout</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </template>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart_count: 0,
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
    mounted() {
        this.$root.$on('cartCount', (a) => {
            this.cart_count = this.cart_count += parseInt(a);
        });

        if (this.$store.getters.currentUser) {
            const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);

            axios
            .get("/api/cart", { headers: { Authorization: AuthStr } })
            .then((res) => {
                this.cart_count = res.data[1];
            })
            .catch((err) => {
                // if (err.response.status === 401) {
                //   this.$store.commit("logout");
                //   this.$router.push({path: '/login'});
                // }
            });
        }
    },
  updated() {
    // if (this.$store.getters.currentUser ) {
    //   const AuthStr = "Bearer ".concat(this.$store.getters.currentUser.token);

    //   axios
    //     .get("/api/cart", { headers: { Authorization: AuthStr } })
    //     .then((res) => {
    //         this.cart_count = res.data[1];
    //     })
    //     .catch((err) => {
    //       // if (err.response.status === 401) {
    //       //   this.$store.commit("logout");
    //       //   // this.$router.push({ path: "/login" });
    //       // }
    //     });
    // }
  },
};
</script>

<style scoped>
@media (max-width: 720px) {
  .nav-opening {
    display: none;
  }
}

.bg-orangered {
  background: orangered !important;
}

.nav-opening {
  padding: 0;
  color: #fff;
  background: #39312f !important;
}

.nav-item a {
  color: #ffffff !important;
  font-size: 16px;
}

.text-white a.nav-item {
  color: white !important;
}

.badge {
  padding: 0.05em 0.25em !important;
  position: absolute;
  bottom: 2px;
  right: 0;
}

.navbar.back-white {
  border: 1px grey solid;
}

.nav-item.text-white a {
  color: #ffffff !important;
  background: orangered;
}

.b-nav-dropdown:active,
.b-nav-dropdown:focus {
  border: none !important;
}
</style>
