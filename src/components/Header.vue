<script setup lang="ts">
const contactInfo = [{ icon: 'https://img.icons8.com/material/24/000000/marker--v1.png', value: 'São José dos Campos, São Paulo' }, { icon: 'https://img.icons8.com/material/24/000000/mail.png', value: 'matheusgomes062@gmail.com ' }, { icon: 'https://img.icons8.com/material/24/000000/android--v1.png', value: '+55(12)93618-0331' }, { icon: 'https://img.icons8.com/material/24/000000/linkedin--v1.png', value: '/in/matheus-gomes-dev' }, { icon: 'https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-web-web-hosting-kmg-design-detailed-outline-kmg-design.png', value: 'https://mgdev.vercel.app/' }]

const header = { name: 'Matheus Gomes de Paula', contactInfo }
</script>

<template lang="pug">
div(class="cv__header")
  input(class="cv__name" type="text" :placeholder="header.name")
  ul(class="cv__contact-info-ul")
    li(class="cv__contact-info-li" v-for="info in header.contactInfo")
      img(:src="info.icon" class="cv__contact-info-icon")
      input(class="cv__contact-info-value" type="text" :placeholder="info.value")
</template>

<style lang="scss" scoped>
.cv__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0.75rem;
}

.cv__name {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: bold;
  text-align: center;
}

.cv__contact-info-ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 0.75rem;
  padding-bottom: 0.25rem;
}

.cv__contact-info-li {
  font-size: 0.75rem;
  line-height: 1rem;
  display: flex;
  flex-direction: row;
  margin: 0.25rem;
  justify-items: center;
  align-items: center;

  &:nth-of-type(3n) {
    width: 120px !important;
    .cv__contact-info-value {
      min-width: 100px !important;
    }
  }

  &:nth-of-type(4n) {
    // width: 140px !important;
    .cv__contact-info-value {
      min-width: 120px !important;
    }
  }

  &:nth-of-type(5n) {
    // width: 140px !important;
    .cv__contact-info-value {
      min-width: 130px !important;
    }
  }
}

.cv__contact-info-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.cv__contact-info-value {
  font-size: 0.7rem;
  min-width: 170px;
}
</style>
