import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/fonts.css';
import './assets/css/app.css';
import './assets/css/appTailwind.css';
import './assets/css/animaciones.css';
import './assets/css/icons/css/all.css';
import router from './router';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Iconos que fontAwesome
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

// imports de directivas personalizadas
import fadeIn from './assets/directives/fedaInDirectives.js';
import showAnimate from './assets/directives/showAnimate.js';
import fadeScroll from './assets/directives/fadeScroll';

library.add(faUser, faHome, faFacebook, faTwitter, faMicroscope, faUtensils, faWhatsapp);

const app = createApp(App);

// directivas personalizadas
app.directive('fade-in', fadeIn);
app.directive('fade-animate-show', showAnimate);
app.directive('fade-scroll', fadeScroll);

// integracion con fonawesome
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).mount('#app');
