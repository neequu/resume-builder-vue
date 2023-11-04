<script setup lang="ts">
defineProps<{
  title: string,
  fields: string[]
}>()
</script>

<template>
  <div>
    <h3 class="font-medium">{{ title }}</h3>
    <p v-for="field in fields" :key="field">{{ field }}</p>
  </div>
</template>

<style lang="scss" scoped></style>