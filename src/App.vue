<template>
    <div class="app-container">
        <ImportantItems />
        <PointTracker />
        <UsageHelp />
    </div>
</template>

<script>
import PointTracker from './components/PointTracker.vue'
import ImportantItems from './components/ImportantItems.vue'
import UsageHelp from './components/UsageHelp.vue'

import 'floating-vue/dist/style.css'

export default {
    name: 'App',
    components: {
        PointTracker,
        ImportantItems,
        UsageHelp
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
    font-family: 'Roboto', sans-serif;
}

.app-container {
    display: flex;
        align-items: center;
        justify-content: center;
    height: 100vh;
}

a {
    color: #628989;
}

a.button {
    background-color: #628989;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    padding: 7px 10px;
    text-decoration: none;
}

@media (max-width: 812px) {
    .pop-out-hide {
        display: none !important;
    }
}
</style>
