<script setup lang="ts">
const projects = [{ award: 'Hackathon Call For Code', company: 'IBM', date: '2020', description: '• Conquistou o 4º lugar na América Latina, o 2º lugar no Brasil, no hackathon IBM - Call for Code desenvolvendo um aplicativo para solucionar o problema do COVID-19 no mundo. O aplicativo notifica os usuários potencialmente expostos ao COVID-19 de forma anônima, segura e de uma forma que respeita a privacidade do indivíduo.' }]
</script>

<template lang="pug">
div(class="flex flex-col justify-center pt-2 pb-3 divide-y divide-gray-500")
  h1(class="text-xl font-bold text-start") Projetos
  ul
    li(class="pt-2" v-for="project in projects")
      h2(class="text-sm font-bold text-start") {{ project.award}} | {{project.company}} | {{project.date}}
      p(class="text-3.2 text-start") {{ project.description }}
</template>

<style lang="scss" scoped>
</style>
