<script lang="ts" setup>
type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  uppercase: boolean;
};
withDefaults(defineProps<Props>(), { as: "h1", uppercase: false });
</script>

<template>
  <component
    :is="as"
    class="uppercase text-primary-dark text-2xl font-semibold"
    :class="{ uppercase: uppercase }"
  >
    <slot />
  </component>
</template>
