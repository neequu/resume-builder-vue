import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useDetailsStore = defineStore(
  'details',
  () => {
    const details = ref({
      name: 'zxc',
      lastname: '',
      jobTitle: '',
      email: '',
      phone: '',
    });

    return { details };
  },
  { persist: true }
);
