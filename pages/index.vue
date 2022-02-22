<template>
  <h1>Home :)</h1>
  <div class="user-profile">
    <h2 v-if="userProfile">{{ `User Profile: ${userProfile}` }}</h2>
    <h2 v-else>User Not Logined :(</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import useStore from "~~/store";

export default defineComponent({
  name: "Home",
  setup(props) {
    const store = useStore();
    const userProfile = computed(() =>
      store.userData ? JSON.stringify(store.userData, undefined, 2) : ""
    );
    return {
      userProfile,
    };
  },
});
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
}
.user-profile {
  white-space: pre-wrap;
}
</style>
