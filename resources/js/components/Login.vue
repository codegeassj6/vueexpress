<template>
    <div class="center">
        <b-card
            title="Login your Account"
            style="max-width: 50rem; margin: auto;"
            class="mb-2"
        >
            <b-card-text>
            <b-form @submit.prevent="authenticate">
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="Enter email"
                    required
                    v-model="form.email"
                    ></b-form-input>
                </b-form-group>


                <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                    <b-form-input
                    type="password"
                    id="input-2"
                    placeholder="Enter name"
                    required
                    v-model="form.password"
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" class="mr-2" variant="primary">Submit</b-button>
                <span class="text-danger" v-if="authError">
                    {{ authError }}
                </span>
                </b-form>
            </b-card-text>


        </b-card>
    </div>
</template>

<script>
import {login} from '../helpers/auth';

  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          error: '',
        }
      }
    },
    computed: {

    },
    methods: {
        authenticate() {
          this.$store.dispatch('login');
          login(this.form)
              .then((res) => {
                  // commit function is used for running mutation function in storejs
                  this.$store.commit("loginSuccess", res);
                  this.$router.push({path: '/'});
              })
              .catch((error) => {
                  this.$store.commit("loginFailed", {error});
              });
      },
    },
    computed: {
        authError() {
            return this.$store.getters.authError;
        }
    }
  }
</script>

<style scoped>
.center {
    margin-top: 120px;
}
</style>
