import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'

createApp(App)
    .use(
        FloatingVue,
        {
            themes: {
                tooltip: {
                    delay: {
                        show: 0,
                        hide: 0
                    }
                }
            }
        })
    .mount('#app')
