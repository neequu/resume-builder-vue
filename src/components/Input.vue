<script setup lang="ts">
const props = defineProps<{
  id: string
  store?: any
}>()

const handleChange = (e: Event) => {
  if (!props.store) return

  props.store[props.id] = (e.target as HTMLInputElement).value
}

</script>

<template>
  <div>
    <input type="text" :id="id" :placeholder="id" :value="store?.[id]" @input="handleChange">
  </div>
</template>

<style lang="scss" scoped></style>
<!-- @input="e => store[id] = (e.target as HTMLInputElement).value" -->