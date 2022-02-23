<template>
    <div>
        <Nav />
        <div class="mt-100">
            <router-view :key="$router.path"/>
        </div>
        <Chat v-if="this.$store.currentUser" />
    </div>
</template>

<script>
import Nav from './template/Nav.vue'
import Chat from './template/Chat.vue'
export default {
    data() {
      return {

      }
    },
    components: {
        Nav,
        Chat
    },
    method: {

    }
}
</script>
