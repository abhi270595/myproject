<template>
    <h4 class="typeWriter">
        <span>{{textTW}}</span>
    </h4>
</template>

<script>
export default {
  name: 'TypeWriter',
  props: [
    'text',
    'speed',
    'freezeTime'
  ],
  data () {
    return {
      textTW: '',
      indexTW: 0
    }
  },
  created () {
    this.typeWriter()
  },
  methods: {
    looping: function () {
      this.textTW = ''
      this.indexTW = 0
      this.typeWriter()
    },
    typeWriter: function () {
      if (this.indexTW < this.text.length) {
        this.textTW += this.text.charAt(this.indexTW)
        this.indexTW++
        setTimeout(this.typeWriter, this.speed)
      } else {
        setTimeout(this.looping, this.freezeTime)
      }
    }
  }
}
</script>

<style>
.typeWriter > span::after {
    content:"_";
    opacity: 0;
    animation: cursor 1s infinite;
}
@keyframes cursor {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
}
</style>
