<template>
  <div id="contact">
    <h2 class="first-element"><span>Contact</span></h2>
    <p>When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.</p>
    <div class="wrap">
      <div class="clip-row">
        <div class="clip-block">
          <social class="lnk-linked">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              <span class="lnk-title">LinkedIn</span>
            </div>
            <div slot="content" class="row">
              <div class="col-sm">
                <h2>LinkedIn</h2>
                <p>If you want to know more about my profressional experience</p>
                <a href="#" class="retro-button">Access to my profile</a>
              </div>
              <div class="col-sm">
                <div id="linked-in"></div>
              </div>
            </div>
          </social>
          <social class="lnk-twitch">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'twitch']" />
              <span class="lnk-title">Twitch</span>
            </div>
            <div slot="content" class="row">
              <div class="col-sm">
                <h2>Twitch</h2>
                <p>Streaming is my main pastime, if you want to know more, you can find my channel below</p>
                <a href="#" class="retro-button">My Twitch Channel</a>
              </div>
              <div class="col-sm">
                <div class="twitch-wrapper">
                  <iframe src="http://streambadge.com/twitch/dark/nyaron/" style="border:none;height: 64px;width:100%"></iframe>
                  <img src="static/img/twitch.gif" alt="Preview">
                </div>
              </div>
            </div>
          </social>
          <social class="lnk-twttr">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              <span class="lnk-title">Twitter</span>
            </div>
            <div slot="content" class="row">
              <div class="col-sm">
                <h2>Twitter</h2>
                <p>Hello World</p>
                <a href="#" class="retro-button">My Twitter</a>
              </div>
              <div class="col-sm">
                <a 
                  class="twitter-timeline"
                  :href="twitterUri" 
                  :data-widget-id="twitterId"
                  data-height="400"
                  data-dnt="true">Tweets</a>
              </div>
            </div>
          </social>
        </div> 
      </div>
      <div class="clip-row">
        <div class="clip-block">
          <social class="lnk-yt">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'youtube']" />
              <span class="lnk-title">YouTube</span>
            </div>
            <div slot="content" class="row">
              <div class="col-sm">
                <h2>YouTube</h2>
                <p>Hello World</p>
                <a href="#" class="retro-button">My YouTube Channel</a>
              </div>
              <div class="col-sm">
                <div class="yt-wrapper">
                  <div class="g-ytsubscribe" :data-channelid="ytId" data-theme="dark" data-layout="full" data-count="default"></div>
                  <img src="static/img/youtube.gif" alt="Preview">
                </div>
              </div>
            </div>
          </social>
          <social class="lnk-fb">
            <div slot="title">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
              <span class="lnk-title">Facebook</span>
            </div>
            <div slot="content" class="row">
              <div class="col-sm">
                <h2>Facebook</h2>
                <p>Hello World</p>
                <a href="#" class="retro-button">My Facebook</a>
              </div>
              <div class="col-sm">
                <div id="fb-root"></div>
                <div class="fb-page" :data-href="fbUri" data-tabs="timeline" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote :cite="fbUri" class="fb-xfbml-parse-ignore"><a :href="fbUri">My Page</a></blockquote></div>
              </div>
            </div>
          </social>
          <social class="lnk-email" id="contact-me">
            <div slot="title">
              <font-awesome-icon :icon="['far', 'envelope']" />
              <span class="lnk-title">Hire Me</span>
            </div>
            <div slot="content">
              <h2>Coming soon</h2>
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
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'

fontawesome.library.add(brands, faEnvelope)

export default {
  name: 'contact',
  components: { Social, FontAwesomeIcon },
  data() {
    return {
      twitterUri: process.env.TWITTER_URI,
      twitterId: process.env.TWITTER_ID,
      fbUri: process.env.FB_URI,
      ytId: process.env.YT_ID,
      liUserUri: process.env.LI_USER_URI
    }
  },
  mounted() {
    let ytPlatformScript = document.createElement('script')
    ytPlatformScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
    document.head.appendChild(ytPlatformScript)

    let twitterWidgetScript = document.createElement('script')
    twitterWidgetScript.innerHTML = `!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");`
    document.head.appendChild(twitterWidgetScript)

    let fbWidgetScript = document.createElement('script')
    fbWidgetScript.innerHTML = `(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`
    document.head.appendChild(fbWidgetScript)

    let linkedWidgetWrapper = document.getElementById('linked-in')
    let linkedWidgetScript = document.createElement('script')
    linkedWidgetScript.setAttribute('src', '//platform.linkedin.com/in.js')
    let linkedWidgetProfile = document.createElement('script')
    linkedWidgetProfile.setAttribute('type', 'IN/MemberProfile')
    linkedWidgetProfile.setAttribute('data-id', this.liUserUri)
    linkedWidgetProfile.setAttribute('data-format', 'inline')
    linkedWidgetProfile.setAttribute('data-related', 'false')
    linkedWidgetWrapper.appendChild(linkedWidgetScript)
    linkedWidgetWrapper.appendChild(linkedWidgetProfile)
  }
}
</script>