<template>
  <div class="root">
    <Header />
    <slot :key="path" />
  </div>
</template>

<script lang="ts">
import Header from "~~/components/Header/index.vue";
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "DefaultLayoutWrapper",
  setup(props) {
    const route = useRoute();
    const path = computed(() => route.path);

    return {
      path,
    };
  },
});
</script>

<style lang="scss" scoped></style>
