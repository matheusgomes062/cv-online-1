<script setup lang="ts">
const status = [{ value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }]
</script>

<template lang="pug">
div(class="flex flex-col")
  div(class="flex flex-row justify-center w-full mb-20")
    div(class="w-100px h-100px rounded-full bg-teal-300 mx-5 flex items-center justify-center shadow-2xl shadow-teal-300")
      div(class="w-80px h-80px rounded-full bg-neutral-50 flex items-center justify-center")
        p(class="font-extrabold text-3xl") {{ status[0].value }}
    div(class="w-100px h-100px rounded-full bg-cyan-300 mx-5 flex items-center justify-center shadow-2xl shadow-cyan-300")
      div(class="w-80px h-80px rounded-full bg-neutral-50 flex items-center justify-center")
        p(class="font-extrabold text-3xl") {{ status[1].value }}
    div(class="w-100px h-100px rounded-full bg-pink-300 mx-5 flex items-center justify-center shadow-2xl shadow-pink-300")
      div(class="w-80px h-80px rounded-full bg-neutral-50 flex items-center justify-center")
        p(class="font-extrabold text-3xl") {{ status[2].value }}
    div(class="w-100px h-100px rounded-full bg-fuchsia-300 mx-5 flex items-center justify-center shadow-2xl shadow-fuchsia-300")
      div(class="w-80px h-80px rounded-full bg-neutral-50 flex items-center justify-center")
        p(class="font-extrabold text-3xl") {{ status[3].value }}

  div(class="flex justify-end mb-20")
    button(class="w-40 flex justify-center text-white bg-blue-500 shadow-2xl shadow-blue-500 rounded-lg py-2 text-center text-3xl hover:translate-y-2px" type='button')
      div(class="i-ic:baseline-cloud-download")
</template>

<route lang="yaml">
meta:
  layout: home
</route>
