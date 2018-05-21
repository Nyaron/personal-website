<template>
  <div id="header" class="sticky">
    <button
      class="nav-toggle"
      tabindex="-1"
      type="button"
      @click="navToggle">
      <font-awesome-icon :icon="['fas', 'bars']" v-if="!isOpen" />
      <font-awesome-icon :icon="['fas', 'times']" v-if="isOpen" />
    </button>
    <div class="nav-wrapper" :class="{'is-open': isOpen}">
      <button
        tabindex="-1"
        class="nav-link"
        type="button"
        :class="{active:currPage == 1, 'd-none':!scrolledPage}"
        @click="scrollTo('page-1')">
        {{ $t("navbar.me") }}
      </button>
      <button
        tabindex="-1"
        class="nav-link"
        type="button"
        :class="{active:currPage == 2}"
        @click="scrollTo('page-2')">
        {{ $t("navbar.expertise") }}
      </button>
      <button
        tabindex="-1"
        class="nav-link"
        type="button"
        :class="{active:currPage == 3}"
        @click="scrollTo('page-3')">
        {{ $t("navbar.projects") }}
      </button>
      <button
        tabindex="-1"
        class="nav-link"
        type="button"
        :class="{active:currPage == 4}"
        @click="scrollTo('page-4')">
        {{ $t("navbar.contact") }}
      </button>
      <button
        tabindex="-1"
        class="nav-link"
        type="button"
        :class="{active:currPage == 5}"
        @click="scrollTo('page-5')">
        {{ $t("navbar.social") }}
      </button>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faBars, faTimes)

export default {
  name: 'navbar',
  props: ['scrollTo'],
  components: { FontAwesomeIcon },
  data() {
    return {
      currPage: 1,
      scrolledPage: false,
      isOpen: false,
    }
  },
  methods: {
    navToggle: function() {
      this.isOpen = !this.isOpen;
    },
    handleScroll: function() {
      const that = this;
      // Handle navbar
      if(window.scrollY > (window.innerHeight - 30)) {
        document.querySelector('.sticky').classList.add('stickied');
        that.scrolledPage = true;
      } else {
        document.querySelector('.sticky').classList.remove('stickied');
        that.scrolledPage = false;
      }

      // Handle index
      document.querySelectorAll('.page').forEach(function(pageElem) {
        if((pageElem.offsetTop + pageElem.offsetHeight) > window.scrollY && window.scrollY >= pageElem.offsetTop) {
          that.currPage = pageElem.classList.item(1).substr(5, 1);
        }
      });
    },
    handleClick: function() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    document.querySelectorAll('.nav-link').forEach((elem) => {
      elem.addEventListener('click', this.handleClick);
    });
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>
