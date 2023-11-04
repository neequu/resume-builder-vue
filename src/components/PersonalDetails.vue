<script setup lang="ts">
import Input from './Input.vue';
import { useDetailsStore } from '@/stores/resume'

const { details } = useDetailsStore()

const inputFields = new Set(['name', 'lastname', 'jobTitle', 'email', 'phone'])
</script>

<template>
  <div>
    <Input v-for="input in inputFields" :key="input" :id="input" :store="details" />
  </div>
</template>

<style lang="scss" scoped></style>