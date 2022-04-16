<template>
    <div class="container pop-out-hide">
        <p>Left-click a category to increase its count by 1.</p>
        <p>Right-click a category to decrease its count by 1.</p>
        <p>Points are calculated automatically.</p>
        <p>Progress is saved across visits. Press the below button to reset progress.</p>
        <p><a class="button" href="#" @click="showModal">Reset Progress</a></p>
    </div>

    <Modal v-model="shouldShowModal" :close="hideModal">
        <div class="modal">
            <p>Do you want to reset progress? (This cannot be undone)</p>
            <div class="buttons">
                <a class="button" href="#" @click="emitResetProgress">Reset</a>
                <a class="button" href="#" @click="hideModal">Cancel</a>
            </div>
        </div>
    </Modal>
</template>

<script>
export default {
    name: 'UsageHelp',
    data() {
        return {
            shouldShowModal: false
        }
    },
    methods: {
        showModal(event) {
            event.preventDefault()

            this.shouldShowModal = true
        },
        hideModal(event) {
            if (typeof event !== 'undefined') event.preventDefault()

            this.shouldShowModal = false
        },
        emitResetProgress(event) {
            event.preventDefault()

            this.hideModal()
            this.$emit('resetProgress')
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
        flex-direction: column;
        justify-content: center;
    height: 540px;
    margin-left: 25px;
    text-align: center;
    width: 150px;
}

.modal {
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    width: 450px;
}

.modal > p {
    text-align: center;
}

.buttons {
    text-align: right;
}

.button {
    margin-right: 10px;
}
</style>