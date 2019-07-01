<template>
  <div class="well">
    <img :src="catimgsrc" />
  </div>
</template>

<script>
  export default {
    computed: {
      catimgsrc () {
        return 'http://thecatapi.com/api/images/get?size=med&ts=' + this.$store.getters.getTimestamp
      }
    }
  }
</script>
