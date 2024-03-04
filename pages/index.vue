<script lang="ts" setup>
type APIResponse = {
  facts: Array<string>;
  currentFact: string;
};

const factsStore = useFactsStore();

const { pending, error, refresh } = await useLazyFetch<APIResponse>(
  "/api/cats/fact",
  {
    onResponse({ response }) {
      factsStore.setCurrent(response._data.fact);
    },
  },
);
</script>

<template>
  <div class="min-h-screen w-full bg-surface">
    <Header />
    <main
      class="flex flex-col px-6 lg:px-4 lg:flex-row items-center gap-x-12 justify-between py-6 max-w-[1000px] w-full mx-auto"
    >
      <CatFactContainer
        class="mb-8 lg:mb-0"
        :refresh-fn="refresh"
        :loading="pending"
      />
      <ImagesGrid />
    </main>
  </div>
</template>
