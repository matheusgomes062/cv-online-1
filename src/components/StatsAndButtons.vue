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

  div(class="flex justify-between my-5")
    div(class="w-auto flex flex-col")
      //- p(class="text-md") Solicite a revisão de um especialista
      button(class="py-2 w-40 items-center flex justify-center text-white bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md text-center text-2xl hover:translate-y--2px duration-150 tooltip tooltip-revisao" type='button' data-text="Solicite a revisão de um especialista")
        div(class="i-fluent:ribbon-star-24-filled")
    div(class="text-center")
      //- p(class="text-md") Baixar
      button(class="w-40 h-50px flex self-end justify-center text-white bg-blue-500 shadow-lg shadow-blue-500/50 rounded-lg py-2 text-center text-2xl hover:translate-y--2px duration-150 tooltip" type='button' @click="$emit('downloadPdf')" data-text="Baixar")
        div(class="i-ic:baseline-cloud-download")
</template>

<style lang="scss" scoped>
.tooltip {
  position:relative; /* making the .tooltip span a container for the tooltip text */
}

.tooltip:before {
  content: attr(data-text); /* here's the magic */
  position:absolute;

  /* vertically center */
  // top:50%;
  transform:translateY(-50%);

  /* move to top */
  top:-60%;
  right:25%; /* and add a small left margin */

  /* basic styles */
  width:80px;
  padding:10px 5px;
  border-radius:5px;
  background:var(--clr-bg-alt);
  color: var(--clr-primary);
  text-align:center;
  font-size: 16px;
  line-height: 18px;

  // display:none; /* hide by default */

  opacity:0;
  transition:.2s opacity;

}
.tooltip:after {
  content: "";
  position:absolute;

  /* position tooltip correctly */
  // top:100%;
  // right:25%; /* and add a small left margin */

  /* vertically center */
  top:-9%;
  transform:translateY(-50%);

  /* the arrow */
  border:10px solid var(--clr-bg-alt);
  border-color: var(--clr-bg-alt) transparent transparent transparent;

  // display:none;
  opacity:0;
  transition:.2s opacity;
}
.tooltip:hover:before, .tooltip:hover:after {
  // display:block;
  opacity:1;
}

.tooltip-revisao:before {
  width:180px;
  /* move to top */
  top:-90%;
  right:-5%; /* and add a small left margin */
}
</style>
