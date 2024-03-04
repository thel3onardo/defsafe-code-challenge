<script lang="ts" setup>
const factsStore = useFactsStore();

defineProps<{ refreshFn: Function; loading: boolean }>();
</script>

<template>
  <div class="flex flex-col text-center lg:text-start">
    <h2 class="uppercase text-primary-dark text-2xl font-semibold">
      cat fact:
    </h2>
    <div class="my-12 text-primary-light font-medium sm:px-8 md:px-12 lg:px-0">
      <Transition mode="out-in">
        <p v-if="loading">Loading new fact...</p>
        <p v-else>
          {{ factsStore.current }}
        </p>
      </Transition>
    </div>
    <div class="flex justify-center lg:justify-start">
      <Button icon="ic:baseline-refresh" @click="refreshFn()"
        >get a random cat fact</Button
      >
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
