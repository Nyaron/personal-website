<template>
  <div class="page page-1">
    <div class="container-fluid">
      <div class="hero first-element">
        <h1>
          {{ $t("landing.welcome") }}
        </h1>
        <p>
          {{ $t("landing.text1") }}
        </p>
        <p>
          {{ $t("landing.text2") }}
        </p>
        <p>
          {{ $t("landing.text3") }}
        </p>
        <button
          type="button"
          class="mat-btn"
          @click="scrollTo('page-4')">
            {{ $t("landing.button") }}
        </button>
        <div class="scroll-message">
          {{ $t("landing.scroll") }}
          <br>
          <img src="/static/img/scroll1.png" alt="" class="d-none d-xl-inline">
          <img src="/static/img/scroll2.png" alt="" class="d-inline d-xl-none">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landing',
  props: ['scrollTo'],
}
</script>