<script setup lang="ts">
const experiences = [{ role: 'Full Stack Engineer', company: 'PWR Pixel', date: 'June 2021 - Presente', country: 'São José dos Campos, SP', description: '• Atuei como líder de equipe de desenvolvimento global e remoto, fornecendo treinamento e documentação didática (em inglês e português) para os novos desenvolvedores. \n • Forneci serviço de consultoria especializada em front-end para empresas de grande porte como 3 Corações, assim como para startups, entre elas a GlobalPro Fit, Codex e outras. \n • Atividades prestadas envolvem melhoria de uma aplicação em 50% de performance de carregamento. Redução de códigos em 45% com aplicação de clean code e boas práticas. Introdução de padrões de código tanto de commit quanto de desenvolvimento.\n • Participação ativa em code review e contratação de novos desenvolvedores.' }, { role: 'Full Stack Engineer', company: 'PWR Pixel', date: 'June 2021 - Presente', country: 'São José dos Campos, SP', description: '• Desenvolvimento de APIs em .NET para milhares de alunos da instituição Ânima, e criação de Gitflow e Artigos para uso interno. \n • Aplicação de padrões de design como DDD e princípios de software implementados no projeto como SOLID e Clean Code. \n • Realizei a implementação de tecnologias modernas como git commitizen e melhores práticas com XUnity (.NET Core).' }, { role: 'Full Stack Engineer', company: 'PWR Pixel', date: 'June 2021 - Presente', country: 'São José dos Campos, SP', description: '• Liderei o time de front-end da Pixfy, entregando e conduzindo 3 projetos para startups, ONG`S e outras. \n • Desenvolvi e arquitetei projetos em VueJs, Sass, e outras tecnologias. \n • Responsável por todo o fluxo de criação dos projetos, passando desde o wireframe até a entrega final do website.' }, { role: 'Full Stack Engineer', company: 'PWR Pixel', date: 'June 2021 - Presente', country: 'São José dos Campos, SP', description: '• Realizei o desenvolvimento de aplicativos mobile no setor de mapas e seguros agrícolas utilizando React-Native e C#. \n • Desenvolvi e implementei documentação sobre a configuração do ambiente, bem como mudanças rápidas e úteis para facilitar o trabalho dos funcionários' }, { role: 'Full Stack Engineer', company: 'PWR Pixel', date: 'June 2021 - Presente', country: 'São José dos Campos, SP', description: '• Realizei o desenvolvimento de aplicações utilizando Javascript, Jquery e também frameworks modernos incluindo Vue.js e React. \n • Implementação de recurso de tradução (i18n) no serviço de seguros e criação de rotas HTTP em APIs RESTFUL em C # .NET. \n • Realizei o desenvolvimento de ferramentas utilizando serviços de mapas (Open Layers). \n • Realizei o desenvolvimento de ferramentas que facilitavam a criação de consultas em banco em nível de usuário e desenvolvedor.' }]
</script>

<template lang="pug">
div(class="divide-y divide-gray-500 cv__experience")
  h1(class="cv__experience-title") Experiência
  ul
    li(class="cv__experience-li" v-for="experience in experiences")
      //- h2(class="cv__experience-info") {{ experience.role}} | {{experience.company}} | {{experience.date}} | {{experience.country }}
      div(class="cv__experience-info-container")
        span(class="cv__experience-info" role="textbox" contenteditable :placeholder="experience.role")
        p |
        span(class="cv__experience-info" role="textbox" contenteditable :placeholder="experience.company")
        p |
        span(class="cv__experience-info" role="textbox" contenteditable :placeholder="experience.date")
        p |
        span(class="cv__experience-info" role="textbox" contenteditable :placeholder="experience.country")

      //- p(class="cv__experience-description ") {{ experience.description }}
      textarea(class="cv__experience-description" :placeholder="experience.description" :rows="experience.description.length/95")
</template>

<style lang="scss" scoped>

.cv__experience {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
}

.cv__experience-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-align: start;
}

.cv__experience-li {
  padding-top: 0.25rem;
  display: flex;
  flex-direction: column;
}

.cv__experience-info-container {
  display: inline-flex;
  flex-direction: row;
  p {
    margin: 0 5px;
  }
}

.cv__experience-info {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: start;
  display: flex;
  align-items: center;
  cursor: text;
  min-width: 120px;
  &:nth-of-type(2n) {
    min-width: 70px;
  }
}

.cv__experience-description {
  font-size: 0.8rem;
  text-align: start;
  padding-top: 0.25rem;
  white-space: pre-line;
  width: 100%;
}

</style>
