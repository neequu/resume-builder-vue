
<script setup lang="ts">
import { ref } from 'vue'
import Input from './Input.vue';
import InputHeading from './InputHeading.vue';
const sectionTitle = ref('')
</script>

<template>
  <section class="grid gap-2">
    title
    <InputHeading id="section" @sectionTitleChange="(v: string) => sectionTitle = v" />
    <h3>{{ sectionTitle || 'Not specified' }}</h3>
    <div>
      <Input id="anything" />
    </div>
    <input type="date" id="birthday" name="date">
    <textarea name="" id="" cols="30" rows="10" class="resize-none" placeholder="Description" />
  </section>
</template>

<style lang="scss" scoped></style>