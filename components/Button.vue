<script lang="ts" setup>
type Props = {
  icon: string | undefined;
};

withDefaults(defineProps<Props>(), { icon: undefined });

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="py-2 px-4 rounded-md text-white bg-primary-light flex items-center gap-x-2 select-none hover:opacity-90 hover:bg-primary-dark active:scale-95 transition shadow-[4px_4px_5px_0px_rgba(0,0,0,.6)]"
    @click="emit('click')"
  >
    <Icon v-if="icon" :name="icon" size="1.5rem" />
    <span class="uppercase font-bold text-sm">
      <slot />
    </span>
  </button>
</template>
