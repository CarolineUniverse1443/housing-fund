import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import store from '@/store/index.js';
// создание приложения
const app = createApp(App);
// подключение роутера
app.use(router);
// подключение основного стора
app.use(store);
app.mount('#app');
