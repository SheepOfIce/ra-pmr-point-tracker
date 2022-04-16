<template>
    <div class="app-container">
        <ImportantItems />
        <PointTracker />
    </div>
</template>

<script>
import PointTracker from './components/PointTracker.vue'
import ImportantItems from './components/ImportantItems.vue'
import 'floating-vue/dist/style.css'

export default {
    name: 'App',
    components: {
        PointTracker,
        ImportantItems
    }
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}

body {
    background-color: #a4d5d5;
}

.app-container {
    display: flex;
        align-items: center;
        justify-content: center;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
}

.app-container a {
    color: #628989;
}

.v-popper__popper {
    font-family: 'Roboto', sans-serif;
}

@media (max-width: 782px) {
    .pop-out-hide {
        display: none;
    }
}
</style>
