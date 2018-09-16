<template>
    <div class="p-4 p-xl-5 typeWriterContainer">
        <TypeWriter :text="text" :speed="speed" :freezeTime="freezeTime"/>
    </div>
</template>

<script>
import TypeWriter from '@/components/TypeWriter'

export default {
  name: 'Home',
  components: {
    TypeWriter
  },
  data () {
    return {
      text: 'Welcome to Ashtonish Tech. Emerge Private Limited.',
      speed: 100,
      freezeTime: 5000
    }
  }
}
</script>

<style>
.typeWriterContainer {
    color: #fff;
    background-color: #000;
    text-align: center;
}
</style>
