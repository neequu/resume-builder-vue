<script setup lang="ts">
import { useDetailsStore } from '@/stores/resume'
import SubSection from './SubSection.vue';
const { details } = useDetailsStore()
</script>

<template>
  <div class="bg-white flex-1 md:relative top-0 fixed inset-0 p-10 text-black">
    <div class="pb-10 border-b">
      <h1 class="text-5xl uppercase font-bold">{{ details.name }} {{ details.lastname }}</h1>
      <p>{{ details.jobTitle }}</p>
    </div>
    <section class="grid grid-cols-2">
      <aside>
        <h2 class="underline text-2xl font-bold mb-2">Details</h2>
        <SubSection title="Adress" :fields="[details.city, details.country]" />
        <SubSection title="Phone" :fields="[details.phone]" />
        <SubSection title="Email" :fields="[details.email]" />
      </aside>
    </section>
  </div>
</template>