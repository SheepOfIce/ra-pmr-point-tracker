<template>
    <div class="container">
        <PointTracker />
    </div>
</template>

<script>
import PointTracker from './components/PointTracker.vue'

export default {
    name: 'App',
    components: {
        PointTracker
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

.container {
    display: flex;
        align-items: center;
        justify-content: center;
    height: 100vh;
}
</style>
