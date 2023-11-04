<script setup lang="ts">
import Editor from './components/Editor.vue';
import Resume from './components/Resume.vue';

</script>

<template>
  <main class="flex h-full">
    <Editor />
    <Resume />
  </main>
</template>

<style>
html,
body,
#app {
  background: #242424;
  color: #fff;
  color-scheme: dark;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
