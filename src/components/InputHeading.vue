<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <div>
    <input type="text" value="Untitled" :id="id"
      @input="e => $emit('sectionTitleChange', (e.target as HTMLInputElement).value)">
    <label :for="id">+</label>
  </div>
</template>
