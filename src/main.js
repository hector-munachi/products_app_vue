import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(fas, fab);

const app = createApp(App)

// Create Vue app and register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')
