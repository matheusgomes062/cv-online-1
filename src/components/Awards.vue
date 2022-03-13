<script setup lang="ts">
const projects = [{ award: 'Hackathon Call For Code', company: 'IBM', date: '2020', description: '• Conquistou o 4º lugar na América Latina, o 2º lugar no Brasil, no hackathon IBM - Call for Code desenvolvendo um aplicativo para solucionar o problema do COVID-19 no mundo. O aplicativo notifica os usuários potencialmente expostos ao COVID-19 de forma anônima, segura e de uma forma que respeita a privacidade do indivíduo.' }]
</script>

<template lang="pug">
div(class="divide-y divide-gray-500 cv__awards")
  h1(class="cv__awards-title") Premiações
  ul
    li(class="cv__awards-li" v-for="project in projects")
      //- h2(class="cv__awards-info") {{ project.award}} | {{project.company}} | {{project.date}}
      div(class="cv__awards-info-container")
        span(class="cv__awards-info" role="textbox" contenteditable :placeholder="project.award")
        p |
        span(class="cv__awards-info" role="textbox" contenteditable :placeholder="project.company")
        p |
        span(class="cv__awards-info" role="textbox" contenteditable :placeholder="project.date")
      //- p(class="cv__awards-description") {{ project.description }}
      textarea(class="cv__awards-description" :placeholder="project.description" :rows="project.description.length/81")
</template>

<style lang="scss" scoped>
.cv__awards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
}

.cv__awards-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-align: start;
}

.cv__awards-li {
  // padding-top: 0.25rem;
  padding: 0;
}

.cv__awards-info-container {
  display: inline-flex;
  flex-direction: row;
  p {
    margin: 0 5px;
  }
}

.cv__awards-info {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: start;
  display: flex;
  align-items: center;
  cursor: text;
  min-width: 150px;
  &:nth-of-type(2n) {
    min-width: 30px;
  }
}

.cv__awards-description {
  font-size: 0.8rem;
  text-align: start;
  padding-top: 0.25rem;
  white-space: pre-line;
  width: 100%;
}
</style>
