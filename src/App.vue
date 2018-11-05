<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.primary-bg-color {
    background-color: #0056B3 !important;
}

.separator {
    height: 12px;
    border: 0;
    box-shadow: 0 12px 12px -12px rgba(0, 0, 0, 0.5) inset;
}
</style>
