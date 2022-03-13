<script setup lang="ts">

const status = [{ title: 'Gramática', value: 100 }, { title: 'Verbos', value: 100 }, { title: 'Tópicos', value: 100 }, { title: 'Campos', value: 100 }]

</script>

<template lang="pug">
div(class="flex flex-col")
  div(class="flex flex-row justify-center w-full")
    div(class="flex flex-col text-center")
      p(class="text-sm font-bold color-gray-400") {{ status[0].title }}
      div(class="w-60px h-60px rounded-full bg-teal-300 mx-5 flex items-center justify-center shadow-xl shadow-teal-300/50 hover:translate-y--2px duration-150 cursor-pointer")
        div(class="w-50px h-50px rounded-full bg-neutral-50 flex items-center justify-center")
          p(class="font-extrabold text-xl color-gray-400") {{ status[0].value }}
    div(class="flex flex-col text-center text-md")
      p(class="text-sm font-bold color-gray-400") {{ status[1].title }}
      div(class="w-60px h-60px rounded-full bg-cyan-300 mx-5 flex items-center justify-center shadow-xl shadow-cyan-300/50 hover:translate-y--2px duration-150 cursor-pointer")
        div(class="w-50px h-50px rounded-full bg-neutral-50 flex items-center justify-center")
          p(class="font-extrabold text-xl color-gray-400") {{ status[1].value }}
    div(class="flex flex-col text-center text-md")
      p(class="text-sm font-bold color-gray-400") {{ status[2].title }}
      div(class="w-60px h-60px rounded-full bg-pink-300 mx-5 flex items-center justify-center shadow-xl shadow-pink-300/50 hover:translate-y--2px duration-150 cursor-pointer")
        div(class="w-50px h-50px rounded-full bg-neutral-50 flex items-center justify-center")
          p(class="font-extrabold text-xl color-gray-400") {{ status[2].value }}
    div(class="flex flex-col text-center text-md")
      p(class="text-sm font-bold color-gray-400") {{ status[3].title }}
      div(class="w-60px h-60px rounded-full bg-fuchsia-300 mx-5 flex items-center justify-center shadow-xl shadow-fuchsia-300/50 hover:translate-y--2px duration-150 cursor-pointer")
        div(class="w-50px h-50px rounded-full bg-neutral-50 flex items-center justify-center")
          p(class="font-extrabold text-xl color-gray-400") {{ status[3].value }}

  div(class="flex justify-end mb-5")
    button(class="w-40 flex justify-center text-white bg-blue-500 shadow-lg shadow-blue-500/50 rounded-lg py-2 text-center text-3xl hover:translate-y--2px duration-150" type='button' @click="$emit('downloadPdf')")
      div(class="i-ic:baseline-cloud-download")
</template>
