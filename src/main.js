import { createApp } from 'vue'
import App from './App.vue'

import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

import store from './store.js' //vuex 불러오기
import './registerServiceWorker'

app.use(store).mount('#app') //모든 데이터들이 스토어에 있는 데이터를 공유한다는 뜻

// createApp(App).mount('#app')
