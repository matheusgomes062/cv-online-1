<script setup lang="ts">
const projects = [{ role: 'Escritor', company: 'PWR Pixel - Livro', date: 'Julho 2021 - Novembro 2021', description: '• Escrevi o primeiro livro brasileiro com tudo sobre Markdown. Disponibilizei ele de graça para todos! Você pode conferir pelo link disponibilizado no meu Linkedin' }, { role: 'Redator', company: 'dev.to e Medium', date: 'Novembro 20219 - Presente', description: '• Escrevi tutoriais sobre tecnologias emergentes em inglês e português que já impactaram mais de 45 mil pessoas. Escrevi também noticias de tecnologia sobre criptomoedas e blockchain para o site bitnoticias' }]
</script>

<template lang="pug">
div(class="divide-y divide-gray-500 cv__projects")
  h1(class="cv__projects-title") Projetos
  ul
    li(class="cv__projects-li" v-for="project in projects")
      //- h2(class="cv__projects-info") {{ project.role}} | {{project.company}} | {{project.date}}
      //- p(class="cv__projects-description") {{ project.description }}
      div(class="cv__projects-info-container")
        span(class="cv__projects-info" role="textbox" contenteditable :placeholder="project.role")
        p |
        span(class="cv__projects-info" role="textbox" contenteditable :placeholder="project.company")
        p |
        span(class="cv__projects-info" role="textbox" contenteditable :placeholder="project.date")
      textarea(class="cv__projects-description" :placeholder="project.description" :rows="project.description.length/81")
</template>

<style lang="scss" scoped>
.cv__projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
}

.cv__projects-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-align: start;
}

.cv__projects-li {
  padding-top: 0.25rem;
}

.cv__projects-info-container {
  display: inline-flex;
  flex-direction: row;
  p {
    margin: 0 5px;
  }
}

.cv__projects-info {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: start;
  display: flex;
  align-items: center;
  cursor: text;
  min-width: 50px;
  &:nth-of-type(2n) {
    min-width: 110px;
  }
}

.cv__projects-description {
  font-size: 0.8rem;
  text-align: start;
  white-space: pre-line;
  width: 100%;
}

</style>
