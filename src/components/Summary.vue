<script setup lang="ts">
const summary = 'Desenvolvedor Full Stack com 4 anos de experiência em Vue 2 e 3, Sass e Git. Também com experiência em Typescript, .Net, C#, Nuxtjs, Vuetify, Bootstrap, Element ui, Vite, Pinia, Jest, Windi CSS. Capacidade comprovada de fornecer produtos escaláveis e de alta qualidade usando o Test Driven Development. Candidatar-se ao cargo de Pessoa Desenvolvedora Front-end Sênior para apoiar o desenvolvimento de novos recursos e produtos'
</script>

<template lang="pug">
div(class="divide-y divide-gray-500 cv__summary")
  h1(class="cv__summary-title") Sumário
  //- p(class="cv__summary-description") {{ summary }}
  div
    textarea(class="cv__summary-description" :placeholder="summary" :rows="summary.length/100")
</template>

<style lang="scss" scoped>
.cv__summary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
}

.cv__summary-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: bold;
  text-align: start;
}

.cv__summary-description {
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: start;
  padding-top: 0.25rem;
  width: 100%;
}
</style>
