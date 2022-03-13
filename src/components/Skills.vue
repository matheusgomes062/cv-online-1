<script setup lang="ts">
const skills = 'Modern JS Frameworks (Vue2, Vue3, React, React Native), Web Design (Adobe XD), PostgreSQL, HTML, CSS, Pré-processadores (SASS), Agile (SCRUM), .NET Core, XUnity, Jest, Git, API REST, NuxtJS, Escritor, Element UI, Bootstrap, Vuetify, Vite, Windi CSS'
</script>

<template lang="pug">
div(class="divide-y divide-gray-500 cv__skills")
  h1(class="cv__skills-title") Skills
  textarea(class="cv__skills-skill" :placeholder="skills" :rows="skills.length/95")
</template>

<style lang="scss" scoped>
.cv__skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
}

.cv__skills-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-align: start;
}

.cv__skills-ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.cv__skills-li {
  padding-top: 0.25rem;
}

.cv__skills-skill {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  width: 100%;
}
</style>
