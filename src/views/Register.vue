<template>
  <div class="about">
    <h1>This is an LOGIN page</h1>
    <NewUser />
  </div>
</template>

<script>
import NewUser from '@/components/NewUser.vue'

export default {
  name: 'Register',
  components: {
    NewUser
  }
}
</script>