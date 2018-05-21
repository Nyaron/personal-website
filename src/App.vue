<template>
  <div id="app">
    <navbar :scroll-to="moveTo"></navbar>
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
      style="display: none"
      title="English (Pirate)"></button>
    </div>
    <div class="page-container">
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
              @click="moveTo('page-4')">
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
      <div class="page page-2">
        <div class="container">
          <h2 class="first-element"><span>{{ $t("expertise.title") }}</span></h2>
          <div class="row">
            <div class="col-sm">
              <h3>{{ $t("expertise.subtitle1") }}</h3>
              <ul class="list-badges">
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
            <div class="col-sm">
              <h3>{{ $t("expertise.subtitle2") }}</h3>
              <ul class="list-badges">
                <li>{{ $t("expertise.skill_unit") }}</li>
                <li>restAPI</li>
                <li>NodeJS</li>
                <li>React</li>
                <li>Wordpress</li>
                <li>Symfony ({{ $t("expertise.skill_limited") }})</li>
                <li>Adobe Illustrator ({{ $t("expertise.skill_limited") }})</li>
                <li>Adobe Premiere/Adobe After Effects ({{ $t("expertise.skill_limited") }})</li>
              </ul>
              <h3>{{ $t("expertise.subtitle3") }}</h3>
              <div class="scrolling-wrapper">
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
      <div class="page page-3">
        <div class="container">
          <h2 class="first-element"><span>{{ $t("projects.title") }}</span></h2>
          <p>{{ $t("projects.text1") }}</p>
          <div class="card-deck">
            <div class="card card-custom" v-for="(item, index) in projects">
              <img :src="item.img" :alt="item.name" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">{{ $t("projects.project" + (index+1) + "_desc") }}</p>
                <p class="card-text">
                  <template v-for="tech in item.tech">
                    <span class="badge badge-primary">{{ tech }}</span>
                    <i class="spacer"> </i>
                  </template>
                </p>
              </div>
              <div class="card-footer text-muted">
                {{ $t("projects.website") }} <a :href="item.url" target='_blank'>{{ item.label }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page page-4">
        <div class="container">
          <h2 class="first-element"><span>{{ $t("contact.contact_title") }}</span></h2>
          <p>{{ $t("contact.contact_subtitle") }}</p>
          <contact-form></contact-form>
        </div>
      </div>
      <div class="page page-5">
        <div class="container">
          <h2 class="first-element"><span>{{ $t("contact.title") }}</span></h2>
          <section-social :scroll-to="moveTo"></section-social>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'

export default {
  components: { Navbar, 'section-social': Contact, ContactForm },
  data() {
    return {
      projects: [
        {
          name:'Olympeak Gaming',
          url: 'https://olympeakgaming.tv',
          label: 'OlympeakGaming.tv',
          img: 'static/img/OG_small.png',
          tech: ['Vue.js', 'HTML/CSS']
        },
        {
          name:'Hermès Toolkit',
          url: '#',
          label: 'WIP',
          img: 'static/img/hermes_beta.png',
          tech: ['NodeJS', 'restAPI']
        },
      ]
    }
  },
  methods: {
    moveTo: function(targetClass) {
      document.querySelector(`.${targetClass}`).scrollIntoView({
        behavior: 'smooth',
        block: "start",
        inline: "nearest"
      });
    },
    updateLang: function(lang) {
      this.$i18n.locale = lang;
    }
  },
  mounted() {
    const allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      65: 'a',
      66: 'b'
    };
    const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', function(e) {
      let key = allowedKeys[e.keyCode];
      let requiredKey = konamiCode[konamiCodePosition];

      if (key == requiredKey) {
        konamiCodePosition++;

        if (konamiCodePosition == konamiCode.length) {
          konamiCodePosition = 0;
          document.querySelector('.flag-pirate').removeAttribute('style');
        }
      } else {
        konamiCodePosition = 0;
      }
    });
  }
}
</script>

<style lang="scss">
  @import '../styles/main'
</style>
