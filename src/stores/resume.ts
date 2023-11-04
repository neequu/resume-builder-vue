import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const personal = ref({
    name: '',
    lastname: '',
    jobTitle: '',
    email: '',
    phone: '',
  });

  return { personal };
});
