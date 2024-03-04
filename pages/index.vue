<script lang="ts" setup>
type APIResponse = {
  facts: Array<string>;
  currentFact: string;
};

const factsStore = useFactsStore();

const { pending } = await useLazyFetch<APIResponse>("/api/cats/facts", {
  onResponse({ response }) {
    factsStore.setCurrent(response._data.currentFact);
    factsStore.setList(response._data.facts);
  },
});
</script>

<template>
  <div v-if="pending">
    <p>pending</p>
  </div>
  <div v-else class="min-h-screen w-full bg-surface">
    <Header />
    <main
      class="flex items-center gap-x-12 justify-between mt-6 max-w-[1000px] w-full mx-auto"
    >
      <CatFactContainer />
      <ImagesGrid />
    </main>
  </div>
</template>
