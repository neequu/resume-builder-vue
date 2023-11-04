import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useDetailsStore = defineStore(
  'details',
  () => {
    const details = ref({
      name: '',
      lastname: '',
      jobTitle: '',
      email: '',
      phone: '',
      country: '',
      city: '',
    });

    return { details };
  },
  { persist: true }
);
