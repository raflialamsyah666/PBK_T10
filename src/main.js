import { createApp } from 'vue';
import App from './App.vue';
import router from '../../food-order/src/router';
import './assets/style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');