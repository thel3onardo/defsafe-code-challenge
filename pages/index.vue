<script lang="ts" setup>
import { catImages } from "~/data/images";

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
      <div class="grid grid-cols-[400px_150px] grid-rows-2 gap-8 max-h-[450px]">
        <div
          v-for="(image, index) in catImages"
          :key="image.id"
          class="rounded-2xl overflow-hidden"
          :class="{ 'row-span-2': index === 0 }"
        >
          <NuxtImg
            class="h-full w-full object-cover"
            :src="image.imagePath"
            :alt="image.alt"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
