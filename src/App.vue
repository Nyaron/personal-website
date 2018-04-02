<template>
  <div id="app">
    <navbar :scroll-to="moveTo" :index="currPage"></navbar>
    <div class="lang-selection">
      <button
      type="button"
      class="flag flag-button flag-fr"
      tabindex="-1"
      @click="updateLang('fr')"
      aria-label="Français"
      title="Français"></button>
      <button
      type="button"
      class="flag flag-button flag-en"
      tabindex="-1"
      @click="updateLang('en')"
      aria-label="English (UK)"
      title="English (UK)"></button>
      <button
      type="button"
      class="flag flag-button flag-pirate"
      tabindex="-1"
      @click="updateLang('pirate')"
      aria-label="English (Pirate)"
      title="English (Pirate)"></button>
    </div>
    <div class="fullpage-container page-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
        <div class="page-1 page">
          <div class="container-fluid">
            <div class="hero first-element" data-id="0">
              <h1>
                {{ $t("landing.welcome") }}
              </h1>
              <p v-animate="{value: 'slideInUp', delay: 600}">
                {{ $t("landing.text1") }}
              </p>
              <p v-animate="{value: 'slideInUp', delay: 1200}">
                {{ $t("landing.text2") }}
                <br>
                {{ $t("landing.text3") }}
              </p>
              <button
                type="button"
                class="retro-button"
                @click="moveTo(3)"
                v-animate="{value: 'slideInUp', delay: 1800}">
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
        <div class="page-2 page">
          <div class="container" data-id="1">
            <h2 v-animate="{value: 'bounceInRight'}" class="first-element"><span>{{ $t("expertise.title") }}</span></h2>
            <div class="row">
              <div class="col-sm" data-id="1">
                <h3 v-animate="{value: 'slideInUp'}">{{ $t("expertise.subtitle1") }}</h3>
                <ul
                  class="list-badges"
                  v-animate="{value: 'bounceIn', delay: 200}">
                  <li>HTML5 / CSS3</li>
                  <li>Sass / Less</li>
                  <li>Javascript / ES6 / jQuery</li>
                  <li>Bootstrap</li>
                  <li>Git</li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                  <li>Gulp</li>
                  <li>Adobe Photoshop</li>
                  <li>PHP</li>
                  <li>SQL</li>
                  <li>{{ $t("expertise.skill_agile") }}</li>
                  <li>{{ $t("expertise.skill_responsive") }}</li>
                  <li>{{ $t("expertise.skill_mobile") }}</li>
                  <li>{{ $t("expertise.skill_crossbrowser") }}</li>
                  <li>{{ $t("expertise.skill_uiux") }}</li>
                </ul>
              </div>
              <div class="col-sm" data-id="1">
                <h3 v-animate="{value: 'slideInUp'}">{{ $t("expertise.subtitle2") }}</h3>
                <ul
                  class="list-badges"
                  v-animate="{value: 'bounceIn', delay: 200}">
                  <li>{{ $t("expertise.skill_unit") }}</li>
                  <li>restAPI</li>
                  <li>Wordpress</li>
                  <li>Adobe Premiere</li>
                  <li>Symfony ({{ $t("expertise.skill_limited") }})</li>
                  <li>Adobe Illustrator ({{ $t("expertise.skill_limited") }})</li>
                  <li>Adobe After Effects ({{ $t("expertise.skill_limited") }})</li>
                </ul>
                <h3 v-animate="{value: 'slideInUp'}">{{ $t("expertise.subtitle3") }}</h3>
                <div class="scrolling-wrapper" v-animate="{value: 'bounceIn', delay: 200}">
                  <dl class="row scrolling-content">
                    <dt class="col-md-5">{{ $t("expertise.job4_name") }}</dt>
                    <dd class="col-md-7">
                      {{ $t("expertise.job4_desc") }}
                    </dd>
                  </dl>
                  <dl class="row scrolling-content">
                    <dt class="col-md-5">{{ $t("expertise.job3_name") }}</dt>
                    <dd class="col-md-7">
                      {{ $t("expertise.job3_desc") }}
                    </dd>
                  </dl>
                  <dl class="row scrolling-content">
                    <dt class="col-md-5">{{ $t("expertise.job2_name") }}</dt>
                    <dd class="col-md-7">
                      {{ $t("expertise.job2_desc") }}
                    </dd>
                  </dl>
                  <dl class="row scrolling-content">
                    <dt class="col-md-5">{{ $t("expertise.job1_name") }}</dt>
                    <dd class="col-md-7">
                      {{ $t("expertise.job1_desc") }}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-3 page">
          <div class="container" data-id="2">
            <h2 class="first-element"><span>{{ $t("projects.title") }}</span></h2>
            <p>{{ $t("projects.text1") }}</p>
            <div class="card-deck" data-id="2">
              <div class="card card-custom" v-animate="{value: 'bounceInRight', delay: ((index+1)*100)}" v-for="(item, index) in projects">
                <div class="card-header">{{ item.name }}</div>
                <div class="card-body">
                  <p class="card-text">{{ $t("projects.project" + (index+1) + "_desc") }}</p>
                </div>
                <div class="card-footer text-muted">
                  {{ $t("projects.website") }} <a :href="item.url" target='_blank'>{{ item.label }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-4 page">
          <div class="container" data-id="3">
            <h2 class="first-element" v-animate="{value: 'bounceInRight'}"><span>{{ $t("contact.title") }}</span></h2>
            <section-contact></section-contact>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Contact from './components/Contact'

export default {
  components: { Navbar, 'section-contact': Contact },
  data() {
    return {
      currPage: 0,
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        afterChange: function (prev, next) {
          this.vm.currPage = next;
          let header = document.getElementById('header');
          if(this.vm.currPage > 0) {
            header.classList.add("stickied");
          } else {
            header.classList.remove("stickied");
          }
        }
      },
      projects: [
        {name:'Olympeak Gaming', url: 'https://olympeakgaming.tv', label: 'OlympeakGaming.tv'},
        {name:'Stream Toolkit', url: '#', label: 'Coming soon'},
      ]
    }
  },
  methods: {
    moveTo: function(targetPage) {
      this.$refs.fullpage.$fullpage.moveTo(targetPage, true);
      this.currPage = targetPage;
    },
    updateLang: function(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/main'
</style>
