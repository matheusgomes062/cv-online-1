<script setup lang="ts">
import cssUsed from '../helpers/cssUsed'

// const cdn = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css'

const font = 'https://fonts.googleapis.com/css2?family=PT+Serif&display=swap'

const css_data = [cssUsed, font]

// printd touches `window` on import, so it is loaded only in the browser, on demand
async function downloadPdf() {
  const el = document.getElementById('cv-online-id')
  if (!el)
    return
  const { Printd } = await import('printd')
  new Printd().print(el, css_data)
}
</script>

<template lang="pug">
div(class="min-w-screen-lg max-w-screen-lg mx-auto pb-20")
  Navbar
  Title
  StatsAndButtons(@downloadPdf="downloadPdf")
  Cv
</template>

<route lang="yaml">
meta:
  layout: home
</route>
