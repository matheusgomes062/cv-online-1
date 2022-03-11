<script setup lang="ts">
const contactInfo = [{ icon: 'i-carbon:location-filled', value: 'São José dos Campos, São Paulo' }, { icon: 'i-mdi:email', value: 'matheusgomes062@gmail.com ' }, { icon: 'i-mdi:cellphone', value: '+55(12)93618-0331' }, { icon: 'i-mdi:linkedin', value: '/in/matheus-gomes-dev' }, { icon: 'i-mdi:web', value: 'https://mgdev.vercel.app/' }]
</script>

<template lang="pug">
div(class="w-full h-full bg-gray-200 rounded-xl p-5 shadow-xl shadow-gray-300/50 cv" )
  div(class="w-full h-screen-xl bg-neutral-50 rounded-xl divide-y divide-gray-300/50 px-15" id="cv-online-id")
    div(class="flex flex-col justify-center pt-10 pb-3")
      h1(class="text-3xl font-black text-center") Matheus Gomes de Paula
      ul(class="flex flex-row justify-center py-3")
        li(class="text-xs flex flex-row mx-2 items-center" v-for="info in contactInfo")
          div(:class="info.icon")
          p {{ info.value }}
    Summary
    Experience
    Skills
    Projects
    Awards
</template>

<style lang="scss" scoped>
.cv {
  font-family: 'PT Serif', serif;
}
</style>
