import { createApp } from 'vue'
import { createPinia} from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// createApp(App).mount('#app')

const app = createApp(App)
app.use(pinia)
app.mount("#app")