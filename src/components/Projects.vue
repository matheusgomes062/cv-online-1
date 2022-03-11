<script setup lang="ts">
const projects = [{ role: 'Escritor', company: 'PWR Pixel', date: 'Julho 2021 - Novembro 2021', description: '• Escrevi o primeiro livro brasileiro com tudo sobre Markdown. Disponibilizei ele de graça para todos! Você pode conferir pelo link disponibilizado no meu Linkedin' }, { role: 'Redator Web', company: 'dev.to | Medium | Linkedin | Bitnotícias', date: 'Novembro 20219 - Presente', description: '• Escrevi tutoriais sobre tecnologias emergentes em inglês e português que já impactaram mais de 45 mil pessoas. Escrevi também noticias de tecnologia sobre criptomoedas e blockchain para o site bitnoticias' }]
</script>

<template lang="pug">
div(class="flex flex-col justify-center pt-2 pb-3 divide-y divide-gray-500")
  h1(class="text-xl font-bold text-start") Projetos
  ul
    li(class="pt-2" v-for="project in projects")
      h2(class="text-sm font-bold text-start") {{ project.role}} | {{project.company}} | {{project.date}}
      p(class="text-3.2 text-start") {{ project.description }}
</template>

<style lang="scss" scoped>
</style>
