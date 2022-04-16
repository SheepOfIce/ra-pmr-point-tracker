<template>
    <div class="container pop-out-hide">
        <a class="button" href="#" @click="popOutTracker" v-tooltip="'Opens tracker in a new window & hides help text.'">Pop-out Tracker</a>
        <p>(Progress won't save between the two windows, refresh the page to update totals)</p>
    </div>
</template>

<script>
export default {
  name: 'PopOutButton',
  methods: {
      popOutTracker(event) {
          open(process.env.BASE_URL, 'RA PMR Point Tracker', 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=462,height=540')

          event.preventDefault();
      }
  }
}
</script>

<style scoped>
.container {
    display: inline-block;
    position: absolute;
        top: 10px;
        right: 10px;
    text-align: right;
}
</style>