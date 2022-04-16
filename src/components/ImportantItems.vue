<template>
    <div class="container pop-out-hide">
        <p>Below are the important items that count towards points. (Hover over to see names and any extra details)</p>

        <div class="important-items">
            <div class="tooltip-box" v-tooltip="'Fortress Key (4 Total)'" />
            <div class="tooltip-box" v-tooltip="'Pulse Stone'" />
            <div class="tooltip-box" v-tooltip="'Pyramid Stone'" />
            <div class="tooltip-box" v-tooltip="'Diamond Stone'" />
            <div class="tooltip-box" v-tooltip="'Lunar Stone'" />
            <div class="tooltip-box" v-tooltip="'Ruins Key (4 Total)'" />
            <div class="tooltip-box" v-tooltip="'Boo\'s Portrait'" />
            <div class="tooltip-box" v-tooltip="'Tubba Castle Key (3 Total)'" />
            <div class="tooltip-box" v-tooltip="'Toy Train'" />
            <div class="tooltip-box" v-tooltip="'Cake (First One Only)'" />
            <div class="tooltip-box" v-tooltip="'Jade Raven'" />
            <div class="tooltip-box" v-tooltip="'Magical Bean'" />
            <div class="tooltip-box" v-tooltip="'Fertile Soil'" />
            <div class="tooltip-box" v-tooltip="'Miracle Water'" />
            <div class="tooltip-box" v-tooltip="'Warehouse Key'" />
            <div class="tooltip-box" v-tooltip="'Bucket'" />
            <div class="tooltip-box" v-tooltip="'Scarf'" />
            <div class="tooltip-box" v-tooltip="'Star Stone'" />
            <div class="tooltip-box" v-tooltip="'Red Key'" />
            <div class="tooltip-box" v-tooltip="'Palace Key'" />
            <div class="tooltip-padding" />
            <div class="tooltip-box" v-tooltip="'Bowser Castle Key (5 Total)'" />
            <div class="tooltip-box" v-tooltip="'Ultra Stone'" />
            <div class="tooltip-padding" />
        </div>

        <p>All Paper Mario sprites from <a href="https://www.spriters-resource.com/nintendo_64/pm/" target="_blank">The Spriters Resource</a>.</p>
    </div>
</template>

<script>
export default {
  name: 'ImportantItems'
}
</script>

<style scoped>
.container {
    height: 390px;
    margin-right: 25px;
    text-align: center;
    width: 150px;
}

.important-items {
    background-image: url('@/assets/important-items.png');
    height: 150px;
    width: 150px;
}

.tooltip-box {
    float: left;
    height: 30px;
    width: 30px;
}

.tooltip-padding {
    float: left;
    height: 30px;
    width: 45px;
}
</style>