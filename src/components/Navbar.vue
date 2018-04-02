<template>
  <div id="header" class="sticky">
    <button 
      v-if="index > 0" 
      tabindex="-1" 
      class="nav-link" 
      type="button" 
      :class="{active:index == 0}" 
      @click="scrollTo(0)">
      {{ $t("navbar.me") }}
    </button>
    <button 
      tabindex="-1" 
      class="nav-link" 
      type="button" 
      :class="{active:index == 1}" 
      @click="scrollTo(1)">
      {{ $t("navbar.expertise") }}
    </button>
    <button 
      tabindex="-1" 
      class="nav-link" 
      type="button" 
      :class="{active:index == 2}" 
      @click="scrollTo(2)">
      {{ $t("navbar.projects") }}
    </button>
    <button 
      tabindex="-1" 
      class="nav-link" 
      type="button" 
      :class="{active:index == 3}" 
      @click="scrollTo(3)">
      {{ $t("navbar.contact") }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['scrollTo', 'index']
}
</script>