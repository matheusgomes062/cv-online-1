<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template lang="pug">
div(class="nav")
  div(class="nav__theme hover:translate-y--2px duration-150" data-test="nav_theme" @click="toggleDark()")
    div(class="i-mdi-white-balance-sunny" v-if="isDark" data-test="sun")
    div(class="i-ic-round-mode-night" v-else data-test="moon")
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  margin-top: 1em;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: end;
}

.nav__theme {
  font-size: large;
  width: 50px;
  height: 50px;
  box-shadow: var(--clr-shadow-glow) 0px 12px 28px 0px, var(--clr-shadow-glow) 0px 2px 4px 0px, var(--clr-shadow-glow) 0px 0px 0px 1px inset;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  // background-color: var(--clr-bg-alt);

  div {
    background-color: var(--clr-primary);
  }
}
</style>
