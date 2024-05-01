import { createApp } from 'vue';
import App, { router } from './App.vue';
import Vue3Toastify from 'vue3-toastify';

createApp(App).use(Vue3Toastify).use(router).mount('#app');
