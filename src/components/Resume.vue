<script setup lang="ts">
import { useDetailsStore } from '@/stores/resume'
const details = useDetailsStore()
</script>

<template>
  <div class="bg-bluegray flex-1 md:relative fixed inset-0">
    <h1 class="text-5xl">{{ details.details.name }} {{ details.details.lastname }}</h1>
    <p>{{ details.details.jobTitle }}</p>
    <p>{{ details.details.email }}</p>
    <p>{{ details.details.phone }}</p>
  </div>
</template>

<style lang="scss" scoped></style>