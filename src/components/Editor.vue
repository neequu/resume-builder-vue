<script setup lang="ts">
import InputHeading from './InputHeading.vue';
import PersonalDetailsVue from './PersonalDetails.vue';
import Section from './Section.vue';


</script>

<template>
  <div class="bg-dark flex-1 flex flex-col items-center gap-10 px-20">
    <section class="flex flex-col items-center">
      <InputHeading id="doc-title" />
      <button>English</button>
    </section>
    <PersonalDetailsVue />
    <Section />
  </div>
</template>

<style lang="scss" scoped></style>