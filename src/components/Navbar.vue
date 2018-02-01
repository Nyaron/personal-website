<template>
  <div id="header" class="sticky">
    <button 
      v-if="index > 0" 
      tabindex="-1" 
      class="nav-link" 
      type="button" 
      :class="{active:index == 0}" 
      @click="scrollTo(0)">
      Me
    </button>
    <button 
      tabindex="-1" 
      class="nav-link" 
      type="button" 
      :class="{active:index == 1}" 
      @click="scrollTo(1)">
      My Expertise
    </button>
    <button 
      tabindex="-1" 
      class="nav-link" 
      type="button" 
      :class="{active:index == 2}" 
      @click="scrollTo(2)">
      Personal Projects
    </button>
    <button 
      tabindex="-1" 
      class="nav-link" 
      type="button" 
      :class="{active:index == 3}" 
      @click="scrollTo(3)">
      Contact
    </button>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['scrollTo', 'index']
}
</script>