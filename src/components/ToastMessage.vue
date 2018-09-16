<template>

    <div :class="{ toast: true, show: isActive('show'),
        'toast-success': isActive('success'), 'toast-warning': isActive('warning'),
        'toast-error': isActive('error') }">
        <div>{{message}}</div>
    </div>

</template>

<script>
export default {
  name: 'ToastMessage',
  props: [
    'duration',
    'message',
    'type'
  ],
  data () {
    return {
      show: false
    }
  },
  methods: {
    openToastMessage () {
      this.show = true
      var duration = (this.duration > 20000) ? 20000 : this.duration
      duration = (this.duration < 0) ? 0 : this.duration
      setTimeout(function () {
        this.show = false
      }.bind(this), duration)
    },
    isActive (className) {
      if (className === 'show') {
        return this.show
      } else if (className === 'success') {
        return this.type === 'success'
      } else if (className === 'warning') {
        return this.type === 'warning'
      } else if (className === 'error') {
        return this.type === 'error'
      }
    }
  }
}
</script>

<style>
.toast {
    visibility: hidden;
    word-wrap: break-word;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #333;
    color: #fff;
    border-color: #000;
    border: 1px solid transparent;
    text-align: center;
    border-radius: 4px;
    padding: 0.75rem;
    max-width: 250px;
    position: fixed;
    /* center the element */
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    z-index: 10;
    bottom: 30px;
    font-size: 1em;
    font-weight: 500;
}

.toast.toast-success {
    background-color: #d4edda;
    color: #155724;
    border-color: #c3e6cb;
}

.toast.toast-warning {
    background-color: #fff3cd;
    color: #856404;
    border-color: #ffeeba;
}

.toast.toast-error {
    background-color: #f8d7da;
    color: #721c24;
    border-color: #f5c6cb;
}

.toast.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 5s;
    animation: fadein 0.5s, fadeout 0.5s 5s;
}

@-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}
</style>
