<script lang="ts" setup>
type Props = {
  icon: string | undefined;
};

withDefaults(defineProps<Props>(), { icon: undefined });

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="py-1.5 px-3 rounded-lg text-white bg-primary-light flex items-center gap-x-2 select-none hover:opacity-80 active:scale-95 transition"
    @click="emit('click')"
  >
    <Icon v-if="icon" :name="icon" size="1.5rem" />
    <span class="uppercase font-bold text-sm">
      <slot />
    </span>
  </button>
</template>
