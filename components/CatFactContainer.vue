<script lang="ts" setup>
const factsStore = useFactsStore();
</script>

<template>
  <div class="flex flex-col">
    <h2 class="uppercase text-primary-dark text-2xl font-semibold">
      cat fact:
    </h2>
    <p class="my-12 text-primary-light font-medium">
      {{ factsStore.current }}
    </p>
    <div>
      <Button
        icon="ic:baseline-refresh"
        @click="factsStore.setRandomCurrentFromList"
        >get a random cat fact</Button
      >
    </div>
  </div>
</template>
