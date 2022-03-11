<script setup lang="ts">
const skills = ['Modern JS Frameworks (Vue2, Vue3, React, React Native)', 'Web Design (Adobe XD)', 'PostgreSQL', 'HTML', 'CSS e pré-processadores (SASS)', 'Agile (SCRUM)', '.NET Core', 'XUnity', 'Jest', 'Git', 'API REST', 'NuxtJS', 'Escritor', 'Element UI', 'Bootstrap', 'Vuetify', 'Vite', 'Windi CSS']
</script>

<template lang="pug">
div(class="flex flex-col justify-center pt-2 pb-3 divide-y divide-gray-500")
  h1(class="text-xl font-bold text-start") Experiência
  ul(class="flex flex-wrap flex-row")
    li(class="pt-1" v-for="skill in skills")
      h2(class="text-sm font-bold text-start mr-1") {{ skill }},
</template>

<style lang="scss" scoped>
</style>
