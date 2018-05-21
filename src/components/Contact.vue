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
          <social class="lnk-linked">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              <span class="lnk-title">LinkedIn</span>
            </div>
            <div slot="content">
              <h2>LinkedIn</h2>
              <div class="row">
                <div class="col-sm">
                  <p class="description">{{ $t("contact.linkedin") }}</p>
                  <a :href="liUserUri" class="mat-btn is-btn-linked" target="_blank">{{ $t("contact.linkedin_btn") }}</a>
                </div>
              </div>
            </div>
          </social>
          <social class="lnk-twttr">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              <span class="lnk-title">Twitter</span>
            </div>
            <div slot="content">
              <h2>Twitter</h2>
              <div class="row">
                <div class="col-sm">
                  <p class="description">{{ $t("contact.twitter") }}</p>
                  <a :href="twitterUri" class="mat-btn is-btn-twttr" target="_blank">{{ $t("contact.twitter_btn") }}</a>
                </div>
              </div>
            </div>
          </social>
        </div>
      </div>
      <div class="clip-row">
        <div class="clip-block">
          <social class="lnk-twitch">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'twitch']" />
              <span class="lnk-title">Twitch</span>
            </div>
            <div slot="content">
              <h2>Twitch</h2>
              <div class="row">
                <div class="col-sm">
                  <p class="description">{{ $t("contact.twitch") }}</p>
                  <a :href="'https://www.twitch.tv/' + twitchName" class="mat-btn is-btn-twitch" target="_blank">{{ $t("contact.twitch_btn") }}</a>
                </div>
                <div class="col-sm">
                  <div class="twitch-wrapper">
                    <img src="static/img/twitch.gif" alt="Preview">
                  </div>
                </div>
              </div>
            </div>
          </social>
          <social class="lnk-yt">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'youtube']" />
              <span class="lnk-title">YouTube</span>
            </div>
            <div slot="content">
              <h2>YouTube</h2>
              <div class="row">
                <div class="col-sm">
                  <p class="description">{{ $t("contact.youtube") }}</p>
                  <a :href="'https://www.youtube.com/channel/' + ytId" class="mat-btn is-btn-yt" target="_blank">{{ $t("contact.youtube_btn") }}</a>
                </div>
                <div class="col-sm">
                  <div class="yt-wrapper">
                    <img src="static/img/youtube.gif" alt="Preview">
                  </div>
                </div>
              </div>
            </div>
          </social>
          <social class="lnk-fb">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
              <span class="lnk-title">Facebook</span>
            </div>
            <div slot="content">
              <h2>Facebook</h2>
              <div class="row">
                <div class="col-sm">
                  <p class="description">{{ $t("contact.facebook") }}</p>
                  <a :href="fbUri" class="mat-btn is-btn-fb" target="_blank">{{ $t("contact.facebook_btn") }}</a>
                </div>
              </div>
            </div>
          </social>
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
import Social from './Social'
import ContactForm from './ContactForm'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'

fontawesome.library.add(brands, faEnvelope)

export default {
  name: 'contact',
  props: ['scrollTo'],
  components: { Social, ContactForm, FontAwesomeIcon },
  data() {
    return {
      twitterUri: process.env.TWITTER_URI,
      twitterId: process.env.TWITTER_ID,
      fbUri: process.env.FB_URI,
      ytId: process.env.YT_ID,
      liUserUri: process.env.LI_USER_URI,
      twitchName: process.env.TWITCH_NAME
    }
  },
  methods: {
    triggerContact: function() {
      this.$refs.contactMe.$el.click();
    }
  },
}
</script>
