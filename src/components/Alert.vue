<template>
  <div :class="'alert-' + type" class="alert" role="alert">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: ['message', 'type']
}
</script>