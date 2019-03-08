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
      <landing :scroll-to="moveTo"></landing>
      <expertise></expertise>
      <portfolio></portfolio>
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
import Landing from './components/Landing'
import Expertise from './components/Expertise'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'

export default {
  components: { Navbar, Landing, Expertise, Portfolio, 'section-social': Contact, ContactForm },
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
