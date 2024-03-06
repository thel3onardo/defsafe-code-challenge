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
      const sameFact = response._data.fact === factsStore.current;

      if (sameFact) {
        refresh();
        return;
      }
      factsStore.setCurrent(response._data.fact);
    },
  },
);
</script>

<template>
  <div class="min-h-screen w-full bg-surface flex flex-col justify-between">
    <div>
      <Header />
      <main
        class="flex flex-col px-6 lg:px-4 lg:flex-row items-center gap-x-12 justify-between py-8 max-w-[1000px] w-full mx-auto"
      >
        <div v-if="error" class="flex flex-col gap-y-4">
          <Heading data-testid="content-fail-title" as="h2" uppercase
            >Error</Heading
          >
          <p data-testid="content-fail-text" class="text-primary-light">
            There was an internal error with the request. Please, reload the
            page.
          </p>
        </div>

        <div
          v-else
          class="flex flex-col text-center lg:text-start mb-8 lg:mb-0"
        >
          <Heading data-testid="content-success-title" as="h2" uppercase
            >cat fact:</Heading
          >
          <div
            class="my-10 text-primary-light font-medium text-base md:text-xl px-4 sm:px-8 md:px-12 lg:px-0"
          >
            <Transition mode="out-in">
              <p v-if="pending" data-testid="content-loading-text">
                Loading new fact...
              </p>
              <p v-else data-testid="content-success-text">
                {{ factsStore.current }}
              </p>
            </Transition>
          </div>
          <div class="flex justify-center lg:justify-start">
            <Button
              data-testid="content-refetch-button"
              role="button"
              aria-label="Get a random cat fact"
              icon="ic:baseline-refresh"
              class="font-bold"
              @click="refresh"
              >get a random cat fact</Button
            >
          </div>
        </div>

        <ImagesGrid />
      </main>
    </div>
    <Footer />
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
