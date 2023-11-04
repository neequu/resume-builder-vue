<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div>
    <input type="text" :id="id" :placeholder="id">
  </div>
</template>

<style lang="scss" scoped></style>