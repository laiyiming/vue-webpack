<template>
  <div id="app" class="g-body">
    <div class="g-main">
<!--        keep-alive-->
      <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  }
}

</script>

<style lang="sass">
</style>
