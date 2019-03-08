<template>
  <div class="page page-3">
    <div class="container">
      <h2 class="first-element"><span>{{ $t("projects.title1") }}</span></h2>
      <p class="text-center">{{ $t("projects.text1") }}</p>
      <div class="card-deck">
        <project-card v-for="(item, index) in portfolio" :key="index" :card-data="item"></project-card>
      </div>
      <h3>{{ $t("projects.title2") }}</h3>
      <p>{{ $t("projects.text2") }}</p>
      <div class="card-deck">
        <project-card v-for="(item, index) in projects" :key="index" :card-data="item"></project-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard'

export default {
  name: 'portfolio',
  components: { ProjectCard, },
  data() {
    return {
      portfolio: [],
      projects: [],
    }
  },
  mounted() {
    this.$http.get('static/portfolio.json').then(response => {
      this.portfolio = response.body.portfolio.reverse();
      this.projects = response.body.projects;
    })
  },
}
</script>