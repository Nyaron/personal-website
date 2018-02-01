<template>
  <div 
    class="clip-each clip-gradient"
    v-on:click.self="showContent"
    v-bind:class="{ active: isActive}">
    <div 
      class="clip-caption"
      v-on:click="showContent">
      <slot name="title">Title</slot>
    </div>
    <div class="clip-content container">
      <button
        type="button"
        class="close"
        v-on:click="hideContent"
        aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <slot name="content">Content</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'social',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    showContent: function() {
      if (!this.isActive) {
        this.isActive = true;
      }
    },
    hideContent: function() {
      if (this.isActive) {
        this.isActive = false;
      }
    }
  },
  mounted() {
    let self = this;
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 27 && self.isActive) {
        self.isActive = false;
      }
    });
  }
}
</script>