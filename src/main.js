import 'floating-vue/dist/style.css'
import 'vue-universal-modal/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'
import VueUniversalModal from 'vue-universal-modal'

let app = createApp(App)
    .use(
        VueUniversalModal,
        { teleportTarget: '#modals' })
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

window.onkeydown = function(event) {
    if (!event.ctrlKey && !event.metaKey) return
    if (event.keyCode !== 67) return
    
    event.preventDefault();

    app.copy()
}