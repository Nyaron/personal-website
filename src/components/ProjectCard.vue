<template>
  <div class="card card-custom">
    <div v-if="cardData.tag" class="card-tag" :class="`card-tag-${cardData.tag}`">{{ cardData.tag }}</div>
    <img v-if="cardData.img" :src="cardData.img" :alt="cardData.name" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ $t(`projects.${getTKey(cardData.name)}`) }}</h5>
      <p v-if="cardData.client && cardData.year" class="card-text">
        {{ cardData.client }} - {{ cardData.year }}
      </p>
      <p class="card-text">
        {{ $t(`projects.${getTKey(cardData.name)}_desc`) }}
      </p>
      <p class="card-text">
        <span v-for="(tech, techindex) in cardData.tech" :key="techindex">
          <span class="badge badge-primary">{{ tech }}</span>
          <i class="spacer"> </i>
        </span>
      </p>
    </div>
    <div v-if="cardData.url" class="card-footer">
      <a :href="cardData.url" target='_blank' ref="noopener">{{ $t(`projects.${getTKey(cardData.name)}_label`) }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectCard',
  props: ['cardData'],
  methods: {
    getTKey: function (name) {
      return name.trim().toLowerCase().replace(/[^a-z ]/g, "").replace(/\s/g, "_");
    },
  },
}
</script>
