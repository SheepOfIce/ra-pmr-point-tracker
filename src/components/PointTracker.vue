<template>
    <div class="tracker">
        <div class="category goombario" @click="increment('goombario')" @contextmenu="e => decrement(e, 'goombario')">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Goombario</div>
                    <div class="right">{{ trackerData.goombario }}/1</div>
                </div>
                <div class="text-bottom">
                    <div class="left">10 Points</div>
                    <div class="right">{{ trackerData.goombario * 10 }}/10 Points</div>
                </div>
            </div>
        </div>

        <div class="category partners" @click="increment('partners')" @contextmenu="e => decrement(e, 'partners')">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Other Partners</div>
                    <div class="right">{{ trackerData.partners }}/7</div>
                </div>
                <div class="text-bottom">
                    <div class="left">5 Points Each</div>
                    <div class="right">{{ trackerData.partners * 5 }}/35 Points</div>
                </div>
            </div>
        </div>

        <div class="category badges" @click="increment('badges')" @contextmenu="e => decrement(e, 'badges')">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Badges</div>
                    <div class="right">{{ trackerData.badges }}/80</div>
                </div>
                <div class="text-bottom">
                    <div class="left">1 Point Each</div>
                    <div class="right">{{ trackerData.badges }}/80 Points</div>
                </div>
            </div>
        </div>

        <div class="category pieces" @click="increment('pieces')" @contextmenu="e => decrement(e, 'pieces')">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Star Pieces</div>
                    <div class="right">{{ trackerData.pieces }}/160</div>
                </div>
                <div class="text-bottom">
                    <div class="left">1 Point Each</div>
                    <div class="right">{{ trackerData.pieces }}/160 Points</div>
                </div>
            </div>
        </div>

        <div class="category keys" @click="increment('keys')" @contextmenu="e => decrement(e, 'keys')">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Important Items</div>
                    <div class="right">{{ trackerData.keys }}/35</div>
                </div>
                <div class="text-bottom">
                    <div class="left">5 Points Each</div>
                    <div class="right">{{ trackerData.keys * 5 }}/175 Points</div>
                </div>
            </div>
        </div>
        
        <div class="category stars" @click="increment('stars')" @contextmenu="e => decrement(e, 'stars')">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Star Spirits</div>
                    <div class="right">{{ trackerData.stars }}/7</div>
                </div>
                <div class="text-bottom">
                    <div class="left">10 Points Each</div>
                    <div class="right">{{ trackerData.stars * 10 }}/70 Points</div>
                </div>
            </div>
        </div>

        <div class="category total">
            <div class="padding">
                <div class="text-top">
                    <div class="left">Total</div>
                    <div class="right">{{ totalPoints }}/530</div>
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
const KEY = 'tracker'

const MAX_VALUES = {
    goombario: 1,
    partners: 7,
    badges: 80,
    pieces: 160,
    keys: 35,
    stars: 7
}

let getBaseTrackerValues = function() {
    return {
        goombario: 0,
        partners: 0,
        badges: 0,
        pieces: 0,
        keys: 0,
        stars: 0
    }
}

let initializeTracker = function() {
    let trackerData = JSON.stringify(getBaseTrackerValues())
    localStorage.setItem(KEY, trackerData)
    return trackerData
}

export default {
    name: 'PointTracker',
    data() {
        let trackerData = localStorage.getItem(KEY)

        if (typeof trackerData !== 'string') {
            trackerData = initializeTracker()
        }

        return {
            trackerData: JSON.parse(trackerData)
        };
    },
    computed: {
        totalPoints() {
            return this.trackerData.goombario * 10
                + this.trackerData.partners * 5
                + this.trackerData.badges
                + this.trackerData.pieces
                + this.trackerData.keys * 5
                + this.trackerData.stars * 10
        }
    },
    methods: {
        resetProgress() {
            initializeTracker()
            this.trackerData = getBaseTrackerValues()
        },
        increment(categoryName) {
            this.trackerData[categoryName]++

            if (this.trackerData[categoryName] > MAX_VALUES[categoryName]) {
                this.trackerData[categoryName] = MAX_VALUES[categoryName]
                return
            }

            this.saveTrackerData()
        },
        decrement(event, categoryName) {
            event.preventDefault()

            this.trackerData[categoryName]--

            if (this.trackerData[categoryName] < 0) {
                this.trackerData[categoryName] = 0
                return
            }

            this.saveTrackerData()
        },
        saveTrackerData() {
            localStorage.setItem(KEY, JSON.stringify(this.trackerData))
        }
    }
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
}

.text-top .left,
.text-bottom .left {
    width: 70%;
}

.text-top .right,
.text-bottom .right {
    text-align: right;
    width: 30%;
}
</style>