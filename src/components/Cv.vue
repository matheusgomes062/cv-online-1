<script setup lang="ts">
</script>

<template lang="pug">
div(class="w-full h-full bg-gray-200 rounded-xl p-5 shadow-xl shadow-gray-300/50 cv" )
  div(class="bg-neutral-50 rounded-xl divide-y divide-gray-300/50 cv__document" id="cv-online-id")
    CvHeader
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

.cv__document {
  width: 100%;
  height: 100%;
  // background-color: rgba(250, 250, 250, 1);
  padding: 2.5rem 3.75rem;
}
</style>
