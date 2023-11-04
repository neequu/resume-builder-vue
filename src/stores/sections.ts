import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useDetailsStore = defineStore(
  'sections',
  () => {
    const sections = ref([]);

    return { sections };
  },
  { persist: true }
);
