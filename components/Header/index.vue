<template>
  <nav>
    <button v-if="!userName" @click="handleLogin">Login!</button>
    <div v-else>
      <p>{{ `User: ${userName}` }}</p>
      <button @click="handleLogout">Logout</button>
    </div>
    <hr />
  </nav>
</template>

<script lang="ts">
import useStore from "~~/store";
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "Header",
  setup(props) {
    const store = useStore();
    const userName = computed(() => store.getUserName);

    const handleLogin = store.fetchAndSetUser;
    const handleLogout = store.resetUser;

    return {
      userName,
      handleLogin,
      handleLogout,
    };
  },
});
</script>
