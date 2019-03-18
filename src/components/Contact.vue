<template>
  <div id="contact">
    <p>{{ $t("contact.text1") }} <a href="#" role="button" @click.prevent="scrollTo('page-4')">{{ $t("contact.text2") }}</a>. {{ $t("contact.text3") }}</p>
    <div class="wrap">
      <div class="clip-row">
        <div class="clip-block">
          <div class="clip-each clip-gradient lnk-email" @click="scrollTo('page-4')">
            <div class="clip-caption">
              <font-awesome-icon :icon="['far', 'envelope']" />
              <span class="lnk-title">{{ $t("contact.contact") }}</span>
            </div>
          </div>
          <a :href="liUserUri + (this.$i18n.locale !== 'fr' ? '/en' : '')" target="_blank" rel="noopener" class="clip-each clip-gradient lnk-linked">
            <div class="clip-caption">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              <span class="lnk-title">LinkedIn</span>
            </div>
          </a>
          <a :href="`https://github.com/${gthName}`" target="_blank" rel="noopener" class="clip-each clip-gradient lnk-gth">
            <div class="clip-caption">
              <font-awesome-icon :icon="['fab', 'github']" />
              <span class="lnk-title">Github</span>
            </div>
          </a>
        </div>
      </div>
      <div class="clip-row">
        <div class="clip-block">
          <a :href="`https://www.twitch.tv/${twitchName}`" target="_blank" rel="noopener noreferrer" class="clip-each clip-gradient lnk-twitch">
            <div class="clip-caption">
              <font-awesome-icon :icon="['fab', 'twitch']" />
              <span class="lnk-title">Twitch</span>
            </div>
          </a>
          <a :href="`https://www.youtube.com/channel/${ytId}`" target="_blank" rel="noopener noreferrer" class="clip-each clip-gradient lnk-yt">
            <div class="clip-caption">
              <font-awesome-icon :icon="['fab', 'youtube']" />
              <span class="lnk-title">YouTube</span>
            </div>
          </a>
          <a :href="twitterUri" target="_blank" class="clip-each clip-gradient lnk-twttr" rel="noopener noreferrer">
            <div class="clip-caption">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              <span class="lnk-title">Twitter</span>
            </div>
          </a>
        </div>
      </div>
      <svg class="clip-svg">
        <defs>
          <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
            <polygon points="0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
import ContactForm from './ContactForm'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'

fontawesome.library.add(brands, faEnvelope)

export default {
  name: 'contact',
  props: ['scrollTo'],
  components: { ContactForm, FontAwesomeIcon },
  data() {
    return {
      twitterUri: process.env.TWITTER_URI,
      fbUri: process.env.FB_URI,
      ytId: process.env.YT_ID,
      liUserUri: process.env.LI_USER_URI,
      twitchName: process.env.TWITCH_NAME,
      gthName: process.env.GTH_NAME,
    }
  },
  methods: {
    triggerContact: function() {
      this.$refs.contactMe.$el.click();
    }
  },
}
</script>
