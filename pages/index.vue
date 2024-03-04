<script lang="ts" setup>
import { catImages } from "~/data/images";

const { data } = await useFetch("/api/test");
</script>

<template>
  <div class="min-h-screen w-full bg-surface">
    <header
      class="flex items-center justify-center bg-primary-dark py-10 text-light"
    >
      <h1 class="text-4xl font-bold uppercase">the defsafe cat facts page</h1>
    </header>

    <main class="flex items-center gap-x-12 mt-6 max-w-[1000px] w-full mx-auto">
      <div class="flex flex-col">
        <h2 class="uppercase text-primary-dark text-2xl font-semibold">
          cat fact:
        </h2>
        <p class="my-12 text-primary-light font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga minima
          commodi minus eos? Nobis assumenda dignissimos veniam asperiores amet,
          accusamus nihil alias aperiam molestias laborep
        </p>
        <div>
          <button
            class="py-1.5 px-3 rounded-lg text-white bg-primary-light flex items-center gap-x-2"
          >
            <Icon name="ic:baseline-refresh" size="1.5rem" />
            <span class="uppercase font-bold text-sm"
              >get a random cat fact</span
            >
          </button>
        </div>
      </div>

      <div
        class="grid grid-cols-[400px_150px] grid-rows-2 gap-8 max-h-[450px] grow"
      >
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
