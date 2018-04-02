// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import App from './App'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'

Vue.use(VueResource)
Vue.use(VueFullpage)
Vue.use(VueI18n)

const messages = {
  en: {
    navbar: {
      me: 'Me',
      expertise: 'My Expertise',
      projects: 'Personal Projects',
      contact: 'Contact',
    },
    landing: {
      welcome: 'Hi, I\'m Cédric, Front-end Developer.',
      text1: 'What can I do? Implementation of landing pages, corporate websites, newletters, you name it.',
      text2: 'I\'ve more than 5 years of experience working with clients and companies around Europe, building fast, high quality and responsive websites.',
      text3: 'Want to work together? I\'m currently looking for new projects and I\'m available for remote work!',
      button: 'Get started',
      scroll: 'Scroll to see more',
    },
    expertise: {
      title: '@:navbar.expertise',
      subtitle1: 'Everyday skills',
      skill_agile: 'Agile Methodology',
      skill_responsive: 'Responsive Layout and Design',
      skill_mobile: 'Mobile-first Thinking',
      skill_crossbrowser: 'Cross-Browser Compatibility',
      skill_uiux: 'UI/UX Reflexion',
      subtitle2: 'Experience with',
      skill_unit: 'Unit Testing',
      skill_limited: 'limited',
      subtitle3: 'Work Experience',
      job1_name: 'Integrator/Programmer',
      job1_desc: 'Pix-M, Apr. 2012 – Aug. 2012 (5 months), remote work',
      job2_name: '@:expertise.job1_name',
      job2_desc: 'Custom Solutions, Mar. 2013 – Jul. 2015 (2 years & 5 months), Rousset (France)',
      job3_name: 'Front-end Developer',
      job3_desc: 'Iron-Group, Jul. 2015 – Sept. 2017 (2 years & 3 months), London (UK)',
      job4_name: '@:expertise.job3_name',
      job4_desc: 'Wetrack, Sept. 2017 – Dec. 2017 (4 months), Barcelona (Spain)',
    },
    projects: {
      title: '@:navbar.projects',
      text1: 'Coding is a lifestyle, and I never go far from it even when I\'m not working as a freelance developer, it\'s fun and helps me keep up with new technologies. I\'m also a gamer, streamer and video maker, and love to combine both of these passions.',
      website: 'Website:',
      project1_desc: 'A multi-gaming (French) live channel. I just released the first version of the website. We are currently looking for other streamers for our official launch this year.',
      project2_desc: 'I\'m currently building a sets of tools for my stream, built with HTML, CSS and simple Javascript. It helps me see data live while I\'m streaming. On the long run I want to share these tools and pair them with a dynamic overlay building tool.',
    },
    contact: {
      title: '@:navbar.contact',
      text1: 'Want to work with me? Check',
      text2: 'this form',
      text3: 'and let me know about your project, I\'m sure we can build something amazing together! Here you can also find all the links to my social media accounts, channels and so on.',
      linkedin: 'If you want to know more about my professional experience, or contact me directly, it\'s probably the way to go!',
      linkedin_btn: 'Access my profile',
      twitter: 'Twitter is an open window on the world, from presidents to 12 y/o internet trolls, everybody can voice their opinion. For me it\'s a way to keep in touch with colleagues and creators, a way to share what I\'m doing, what I\'m watching, the latest CSS hack and more importantly on the internet, a way to share cute pictures of corgis and kittens!',
      twitter_btn: 'My Twitter',
      twitch: 'Streaming is my main pastime, more than a pastime, I take it as a second job. I play video games live in English or in French almost everyday so you\'re more than welcome to come say hello when I\'m online!',
      twitch_btn: 'My Twitch Channel',
      youtube: 'I created this channel more than 2 years ago now, it has a bit of everything: vlogs, playthroughs, some weird experiment with a green screen and so on! A bit abandoned these days as YouTube became a big mess for smaller content creators...',
      youtube_btn: 'My YouTube Channel',
      facebook: 'I mainly use my Facebook Page as a side social media for people who want to stay away from Twitter, a lot less active, but more concise too.',
      facebook_btn: 'My Facebook Page',
      contact: 'Hire Me',
      contact_title: 'Tell me more',
      contact_name: 'Name',
      contact_email: 'Email',
      contact_company: 'Company',
      contact_website: 'Website',
      contact_message: 'Message',
      contact_m_placeholder: 'Tell me more about your project, your budget, the deadline, ...',
      contact_submit: 'Send',
      err_mandatory: 'This field is mandatory',
      err_format: 'Invalid format',
      feedback_success: 'Thank you, your message was sent successfully.',
      feedback_err: 'Sorry, there is a problem, please try again later.',
    }
  },
  fr: {
    navbar: {
      me: 'Moi',
      expertise: 'Mon Expertise',
      projects: 'Projets Personnels',
      contact: 'Contact',
    },
    landing: {
      welcome: 'Enchanté, Cédric, Développeur Front-end.',
      text1: 'Ce que je sais faire ? Intégrer des landing pages, des sites d\'entreprises, des newletters et j\'en passe.',
      text2: 'Je possède plus de 5 ans d\'expertise, ayant travaillé pour des clients et des entreprises à travers toute l\'Europe, je créer des sites web rapide, responsive et de haute qualité.',
      text3: 'Vous souhaitez que nous travaillons ensemble ? Je suis actuellement à la recherche de nouveaux projets et je suis disponible pour du télétravail !',
      button: 'Commençons',
      scroll: 'Faites défiler',
    },
    expertise: {
      title: '@:navbar.expertise',
      subtitle1: 'Compétences quotidiennes',
      skill_agile: 'Méthode Agile',
      skill_responsive: 'Mise en page et Design Responsive',
      skill_mobile: 'Design Mobile-first',
      skill_crossbrowser: 'Compatibilité inter-navigateurs',
      skill_uiux: 'Réflexion UI/UX',
      subtitle2: 'Expérience avec',
      skill_unit: 'Test Unitaire',
      skill_limited: 'limitée',
      subtitle3: 'Expérience Professionnelle',
      job1_name: 'Intégrateur/Analyste Développeur',
      job1_desc: 'Pix-M, avr. 2012 – août 2012 (5 mois), télétravail',
      job2_name: '@:expertise.job1_name',
      job2_desc: 'Custom Solutions, mars 2013 – juill. 2015 (2 ans et 5 mois), Rousset (France)',
      job3_name: 'Développeur Front-end',
      job3_desc: 'Iron-Group, juill. 2015 – sept. 2017 (2 ans et 3 mois), London (GB)',
      job4_name: '@:expertise.job3_name',
      job4_desc: 'Wetrack, sept. 2017 – déc. 2017 (4 mois), Barcelone (Espagne)',
    },
    projects: {
      title: '@:navbar.projects',
      text1: 'Coder est un style de vie pour moi, et cela reste un de mes passe-temps même quand je ne travaille pas en tant que freelance, ça m\'amuse et c\'est une bosse excuse pour suivre les dernières technologies. Je suis également un gamer, un streamer et un vidéaste et j\'adore combiner ces deux passions.',
      website: 'Site :',
      project1_desc: 'Un chaîne live multi-jeux. Je viens de mettre en ligne la première version de notre site internet. Nous sommes actuellement à la recherche d\'autres streamers pour notre lancement officiel cette année.',
      project2_desc: 'Je suis entrain de construire un set d\'outils pour mes streams, codées en HTML, CSS et Javascript. Cela me permet de voir des données en direct lorsque je stream. Lorsqu\'ils seront plus poussés je compte partager ces outils et créer un outil de construction d\'overlay dynamique.',
    },
    contact: {
      title: '@:navbar.contact',
      text1: 'Vous voulez travailler avec moi ? Merci de remplir',
      text2: 'ce formulaire',
      text3: 'et dites m\'en plus à propos de votre projet, je suis sûr que nous pouvons construire quelque chose de génial ensemble. Vous pouvez aussi trouver ici les liens vers mes comptes sur les différents réseaux sociaux et mes chaînes.',
      linkedin: 'Si vous voulez en savoir d\'avantage sur mon parcours professionnel ou me contacter directement, vous êtes probablement au bon endroit !',
      linkedin_btn: 'Voir mon profil',
      twitter: 'Twitter est une fenêtre ouverte sur le monde, depuis les présidents au petit trolls de 12 ans, tout le monde peut partager son opinion. Pour moi, c\'est un moyen de rester en contact avec mes collègues et avec d\'autres créateurs, un moyen de partager ce que je fais, ce que je regarde, le dernier hack CSS et plus important encore sur l\'Internet, partager des images mignonnes de chatons et de corgis !',
      twitter_btn: 'Mon Twitter',
      twitch: 'Streamer est mon passe-temps principal, plus qu\'un passe-temps, je le considère comme un second job. Je joue aux jeu-vidéos en direct en Anglais ou en Français quasiment tous les jours. N\'hésitez pas à venir dire bonjour quand je suis en live !',
      twitch_btn: 'Ma Chaîne Twitch',
      youtube: 'J\'ai créé cette chaîne il y a plus de 2 ans maintenant, elle contient un peu de tout : des vlogs, des playthroughs, quelques tests avec un écran vert. Elle est un peu à l\'abandon maintenant après que YouTube ai changé sa politique vis à vis des petits créateurs...',
      youtube_btn: 'Ma Chaîne YouTube',
      facebook: 'J\'utilise ma Page Facebook comme une seconde platforme pour les gens qui veulent rester loins de Twitter, elle est mise à jour moins souvent, mais le contenu est plus concis.',
      facebook_btn: 'Ma Page Facebook',
      contact: 'Contact',
      contact_title: 'Dites m\'en plus',
      contact_name: 'Nom',
      contact_email: 'Email',
      contact_company: 'Entreprise',
      contact_website: 'Site internet',
      contact_message: 'Message',
      contact_m_placeholder: 'Dites m\'en plus à propos de votre projet, votre budget, la deadline, ...',
      contact_submit: 'Envoyer',
      err_mandatory: 'Ce champs est obligatoire',
      err_format: 'Format invalide',
      feedback_success: 'Merci, votre message a bien été envoyé.',
      feedback_err: 'Désolé, une erreur est survenue, veuillez réessayer ultérieurement.',
    }
  },
  pirate: {
    navbar: {
      expertise: 'Me Expertise',
    },
    landing: {
      welcome: 'Ahoy, I be Cédric, Front-end Developer.',
      text1: 'Wha\' can I do? Implementation o\' landin\' pages, corporates websites, newletters, ye name it.',
      text2: 'I\'ve more than 5 years o\' experience workin\' wit\' clients \'n companies around Europe, buildin\' fast, high quality \'n responsive websites.',
      text3: 'Wants t\' work together? I be currently lookin\' fer new projects \'n I be available fer remote work!',
      scroll: 'Scroll t\' see more',
    },
    expertise: {
      title: '@:navbar.expertise',
      skill_responsive: 'Responsive Layout an\' Design',
      skill_mobile: 'Mobile-first Thinkin\'',
      skill_unit: 'Unit Testin\'',
    },
    projects: {
      text1: 'Codin\' be a lifestyle, \'n I ne\'er go far from it even when I be nah workin\' as a freelance developer, \'tis fun \'n helps me keep up wit\' new technologies. I be also a gamer, streamer \'n video maker, \'n love t\' combine both o\' these passions.',
      project1_desc: 'A multi-gamin\' (French) live channel. I jus\' released th\' first version o\' th\' website. We be currently lookin\' fer other streamers fer our official launch this year.',
      project2_desc: 'I be currently buildin\' a set o\' tools fer me stream, built wit\' HTML, CSS \'n simple Javascript. It helps me see data live while I be streamin\'. On th\' long run I wants t\' share these tools \'n pair them wit\' a dynamic o\'erlay buildin\' tool.',
    },
    contact: {
      text1: 'Wants t\' work wit\' me? Check',
      text3: '\'n let me know about yer project, I be sure we can build somethin\' amazin\' together! Here ye can also find all th\' links t\' me social media accounts, channels \'n so on.',
      linkedin: 'If ye wants t\' know more about me professional experience, or contact me directly, \'tis prolly th\' way t\' go!',
      linkedin_btn: 'Access me profile',
      twitter: 'Twitter be an open window on th\' world, from presidents t\' 12 y/o internet trolls, everybody can voice thar opinion. Fer me \'tis a way t\' keep in touch wit\' colleagues \'n creators, a way t\' share wha\' I be doin\', wha\' I be watchin\', th\' latest css hack \'n more importantly on th\' internet, a way t\' share cute pictures o\' corgis \'n kittens!',
      twitter_btn: 'Me Twitter',
      twitch: 'Streamin\' be me main pastime, more than a pastime, I loot it as a second job. I play video games live in English or in French nigh-on everyday so ye\'re more than welcome t\' come say ahoy when I be online!',
      twitch_btn: 'Me Twitch Channel',
      youtube: 'I created this channel more than 2 years ago now, it has a bit o\' everythin\': vlogs, playthroughs, some weird experiment wit\' a green screen \'n so on! A bit marooned these days as YouTube became a big mess fer weeer content creators...',
      youtube_btn: 'Me YouTube Channel',
      facebook: 'I mainly use me Facebook Page as a side social media fer scallywags who wants t\' stay away from Twitter, a lot less active, but more concise too.',
      facebook_btn: 'Me Facebook Page',
      contact_company: 'Pirate Crew',
      contact_m_placeholder: 'Tell me more about yer project, yer budget, the deadline, ...',
      feedback_success: 'Thank ye, yer message was sent successfully.',
      feedback_err: 'Sorry, thar be a problem, try again later.',
    },
  }
}

const userLang = (navigator.language || navigator.userLanguage).split("-")[0];
const defaultLocale = userLang == 'fr' ? 'fr' : 'en';

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
})

Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  i18n
})
