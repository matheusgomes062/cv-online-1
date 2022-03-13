<script setup lang="ts">
import { Printd } from 'printd'
import cssUsed from '../helpers/cssUsed'

// const cdn = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css'

const font = 'https://fonts.googleapis.com/css2?family=PT+Serif&display=swap'

const css_data = [cssUsed, font]

const d = new Printd()

const downloadPdf = () => {
  // getCSS()
  d.print(document.getElementById('cv-online-id'), css_data)
}

</script>

<template lang="pug">
div(class="min-w-screen-lg max-w-screen-lg mx-auto pb-20")
  Title
  StatsAndButtons(@downloadPdf="downloadPdf")
  Cv
</template>

<route lang="yaml">
meta:
  layout: home
</route>
