<template>
    <div class="container pop-out-hide">
        <p>Left-click a category to increase its count by 1.</p>
        <p>Right-click a category to decrease its count by 1.</p>
        <p>Points are calculated automatically.</p>
        <p>Progress is saved across visits. Press the below button to reset progress.</p>
        <p><a class="button" href="#" @click="emitResetProgress">Reset Progress</a></p>
    </div>
</template>

<script>
export default {
  name: 'UsageHelp',
  methods: {
      emitResetProgress(event) {
          event.preventDefault()

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
</style>