import { createApp } from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './routes'; // 追記
import vuetify from './plugins/vuetify';

createApp(App).use(router).use(vuetify).mount('#app')