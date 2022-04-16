<template>
    <PopOutButton />
    <div class="app-container">
        <ImportantItems />
        <PointTracker ref="tracker" />
        <UsageHelp @reset-progress="$refs.tracker.resetProgress()" />
    </div>
</template>

<script>
import PointTracker from './components/PointTracker.vue'
import ImportantItems from './components/ImportantItems.vue'
import UsageHelp from './components/UsageHelp.vue'
import PopOutButton from './components/PopOutButton.vue'

export default {
    name: 'App',
    components: {
        PointTracker,
        ImportantItems,
        UsageHelp,
        PopOutButton
    },
    methods: {
        copy() {
            navigator.clipboard.writeText(this.$refs.tracker.getTrackerDataAsText())
        }
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
