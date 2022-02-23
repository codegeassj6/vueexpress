<template>
    <div class="center">
  <b-card
    title="Register an Account"
    style="max-width: 50rem; margin: auto;"
    class="mb-2"
  >
    <b-card-text>
        <b-form>
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
            ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
            <b-form-input
                type="password"
                id="input-2"
                placeholder="Enter name"
                required
            ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </b-card-text>


  </b-card>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style scoped>



.center {
    margin-top: 120px;
}
</style>
