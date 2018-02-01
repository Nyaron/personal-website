<template>
  <div id="app">
    <navbar :scroll-to="moveTo" :index="currPage"></navbar>
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
        <div class="page-1 page">
          <div class="container-fluid">
            <div class="hero first-element" data-id="0">
              <h1 v-animate="{value: 'fadeInDown', delay: 0}">
                Hi, I'm Cédric, Front-end Developer.
              </h1>
              <p v-animate="{value: 'slideInUp', delay: 600}">
                What can I do? Implementation of landing pages, corporates websites, newletters, you name it.
              </p>
              <p v-animate="{value: 'slideInUp', delay: 1200}">
                I've more than 5 years of experience working with clients and companies around Europe, building fast, high quality and responsive websites. 
                <br>
                Want to work together? I'm currently looking for new projects, you can contact me via the contact section below.
              </p>
              <button 
                type="button"
                class="retro-button" 
                @click="moveTo(3)"
                v-animate="{value: 'slideInUp', delay: 1800}">
                  Get started
              </button>
              <div class="scroll-message">
                Scroll to see more
                <br>
                <img src="/static/img/scroll1.png" alt="" class="d-none d-xl-inline">
                <img src="/static/img/scroll2.png" alt="" class="d-inline d-xl-none">
              </div>
            </div>
          </div>
        </div>
        <div class="page-2 page">
          <div class="container" data-id="1">
            <h2 v-animate="{value: 'bounceInRight'}" class="first-element"><span>My Expertise</span></h2>
            <div class="row">
              <div class="col-sm" data-id="1">
                <h3 v-animate="{value: 'slideInUp'}">Everyday skills</h3>
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
                  <li>Agile Methodology</li>
                  <li>Responsive Layout and Design</li>
                  <li>Mobile First Thinking</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>UI/UX Reflexion</li>
                </ul>
              </div>
              <div class="col-sm" data-id="1">
                <h3 v-animate="{value: 'slideInUp'}">Experience with</h3>
                <ul
                  class="list-badges" 
                  v-animate="{value: 'bounceIn', delay: 200}">
                  <li>Unit Testing</li>
                  <li>restAPI</li>
                  <li>Wordpress</li>
                  <li>Adobe Premiere</li>
                  <li>Symfony (limited)</li>
                  <li>Adobe Illustrator (limited)</li>
                  <li>Adobe After Effects (limited)</li>
                </ul>
                <h3 v-animate="{value: 'slideInUp'}">Work Experience</h3>
                <div class="scrolling-wrapper" v-animate="{value: 'bounceIn', delay: 200}">
                  <dl class="row scrolling-content">
                    <dt class="col-sm-5">Front-end Developer</dt>
                    <dd class="col-sm-7">
                      Wetrack, sept. 2017 – dec. 2017 (4 months), Barcelona (Spain)
                    </dd>
                  </dl>
                  <dl class="row scrolling-content">
                    <dt class="col-sm-5">Front-end Developer</dt>
                    <dd class="col-sm-7">
                      Iron-Group, jul. 2015 – sept. 2017 (2 years 3 months), London (UK)
                    </dd>
                  </dl>
                  <dl class="row scrolling-content">
                    <dt class="col-sm-5">Integrator/Programmer</dt>
                    <dd class="col-sm-7">
                      Custom Solutions, mars. 2013 – jul. 2015 (2 years 5 months), Rousset (France)
                    </dd>
                  </dl>
                  <dl class="row scrolling-content">
                    <dt class="col-sm-5">Integrator/Programmer</dt>
                    <dd class="col-sm-7">
                      Pix-M, aprl. 2012 – aug. 2012 (5 months), teleworking
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-3 page">
          <div class="container" data-id="2">
            <h2 class="first-element"><span>Personal Projects</span></h2>
            <p>Coding is a lifestyle, and I never go far from it even when I'm not working as a freelance, it's fun and helps me keep up with new technologies. I'm also a gamer, streamer and video maker, and love to combine both of these passions.</p>
            <div class="card-deck" data-id="2">
              <div class="card text-white bg-secondary" v-animate="{value: 'bounceInRight', delay: 100}">
                <div class="card-header">OlymPeak Gaming</div>
                <div class="card-body">
                  <p class="card-text">My main project at the moment, a live gaming/tabletop/news channel which will involve a lot of people down the line. I'm currently working on the website and the branding.</p>
                  <p class="card-text">It's quite a big project and slightly out of my set of skills but it's something dear to me.</p>
                </div>
              </div>
              <div class="card text-white bg-secondary" v-animate="{value: 'bounceInRight', delay: 200}">
                <div class="card-header">Stream Toolkit</div>
                <div class="card-body">
                  <p class="card-text">I'm currently building a sets of tools for my stream, built with HTML, CSS and simple Javascript. It helps me see data live while I'm playing.</p>
                  <p class="card-text">On the long run I want to share these tools and pair them with a dynamic overlay building tool.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-4 page">
          <div class="container" data-id="3">
            <section-contact v-animate="{value: 'bounceInRight', delay: 600}"></section-contact>
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
      }
    }
  },
  methods: {
    moveTo: function(targetPage) {
      this.$refs.fullpage.$fullpage.moveTo(targetPage, true);
      this.currPage = targetPage;
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/main';
</style>
