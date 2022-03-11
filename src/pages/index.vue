<script setup lang="ts">
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const downloadPdf = () => {
  // window.scrollTo({ top: 0 });
  const htmlElement = document.getElementById('cv-online-id')
  const main = document.getElementById('cv-online-id')
  const width: number = htmlElement?.offsetWidth || 0
  const height: number = htmlElement?.offsetHeight || 0
  html2canvas(htmlElement!, {
    height: htmlElement?.offsetHeight,
    width: htmlElement?.offsetWidth,
    useCORS: true,
    allowTaint: true,
  }).then((canvas) => {
    // document.body.appendChild(canvas)
    // eslint-disable-next-line new-cap
    const doc = new jsPDF()
    doc.addImage(canvas, 'image/png', 0, 0, 210, 297) // 单位是毫米 (Unity is mm)
    doc.save('curriculo.pdf')
  })
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
