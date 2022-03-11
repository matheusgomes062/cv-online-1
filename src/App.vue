<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'cv-online',
  meta: [
    { name: 'description', content: 'Faça seu currículo online de forma prática e eficiente' },
  ],
})
</script>

<template>
  <router-view />
</template>
