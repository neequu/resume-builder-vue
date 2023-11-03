<script setup lang="ts">
import { computed } from 'vue';

const name = computed(() => 'hello'.toUpperCase())
</script>

<template>
  <div class="">
    {{ name }}
  </div>
</template>

<style lang="scss" scoped></style>