<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  mounted(){
     var oMeta = document.createElement('meta');
     oMeta.httpEquiv='Content-Security-Policy'
        oMeta.content = 'upgrade-insecure-requests';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
