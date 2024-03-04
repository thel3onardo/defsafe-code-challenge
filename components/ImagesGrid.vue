<script lang="ts" setup>
const catImages = [
  { id: 1, imagePath: "/cat1.jpeg", alt: "Just a cat" },
  { id: 2, imagePath: "/cat2.jpeg", alt: "Another cute cat" },
  { id: 3, imagePath: "/cat3.jpeg", alt: "Just another cute cat" },
];
</script>

<template>
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
</template>
