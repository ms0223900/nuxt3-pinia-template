<template>
  <Head>
    <Link rel="icon" href="/favicon.ico" />
    <Title>Pinia Sample 🍍</Title>
  </Head>
  <NuxtLayout>
    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
