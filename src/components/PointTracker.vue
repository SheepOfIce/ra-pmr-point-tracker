<template>
    <div class="tracker">
        <div class="category goombario">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Goombario</div>
                    <div class="right">0/1</div>
                </div>
                <div class="text-bottom">
                    <div class="left">10 Points</div>
                    <div class="right">0/10 Points</div>
                </div>
            </div>
        </div>

        <div class="category partners">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Other Partners</div>
                    <div class="right">0/7</div>
                </div>
                <div class="text-bottom">
                    <div class="left">5 Points Each</div>
                    <div class="right">0/35 Points</div>
                </div>
            </div>
        </div>

        <div class="category badges">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Badges</div>
                    <div class="right">0/80</div>
                </div>
                <div class="text-bottom">
                    <div class="left">1 Point Each</div>
                    <div class="right">0/80 Points</div>
                </div>
            </div>
        </div>

        <div class="category pieces">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Star Pieces</div>
                    <div class="right">0/160</div>
                </div>
                <div class="text-bottom">
                    <div class="left">1 Point Each</div>
                    <div class="right">0/160 Points</div>
                </div>
            </div>
        </div>

        <div class="category keys">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Important Items</div>
                    <div class="right">0/35</div>
                </div>
                <div class="text-bottom">
                    <div class="left">5 Points Each</div>
                    <div class="right">0/175 Points</div>
                </div>
            </div>
        </div>
        
        <div class="category stars">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Star Spirits</div>
                    <div class="right">0/7</div>
                </div>
                <div class="text-bottom">
                    <div class="left">10 Points Each</div>
                    <div class="right">0/70 Points</div>
                </div>
            </div>
        </div>

        <div class="category total">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Total</div>
                    <div class="right">0/530</div>
                </div>
                <div class="text-bottom">
                    <div class="left">&nbsp;</div>
                    <div class="right">Points</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PointTracker'
}
</script>

<style scoped>
.tracker {
    background-color: #84abab;
    box-sizing: border-box;
    height: 540px;
    padding: 5px;
    width: 462px;
}

.tracker ::selection {
    background-color: transparent;
}

.category {
    background-image: url('@/assets/category-bgs.png');
    background-repeat: no-repeat;
    border: 5px solid #84abab;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    height: calc(460px / 7);
    text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 4px;
}

.category > .padding {
    padding: 7px 14px;
}

.category.goombario {
    background-position: 0 0;
}

.category.partners {
    background-position: 0 -66px;
}

.category.badges {
    background-position: 0 -132px;
}

.category.pieces {
    background-position: 0 -198px;
}

.category.keys {
    background-position: 0 -264px;
}

.category.stars {
    background-position: 0 -330px;
}

.category.total {
    background-position: 0 -396px;
}

.text-top {
    font-family: 'Merriweather', serif;
    font-size: 1.5em;
}

.text-top > .left,
.text-top > .right,
.text-bottom > .left,
.text-bottom > .right {
    display: inline-block;
    width: 50%;
}

.text-top .right,
.text-bottom .right {
    text-align: right;
}
</style>