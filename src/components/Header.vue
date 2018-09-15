<template>
    <b-navbar toggleable="md" fixed="top" type="dark" class="primary-bg-color" sticky>
        <b-navbar-brand href="#">
            <img src="../assets/logo.png" alt="Logo" height="48" width="48">
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" v-on:click="setActive('home')" :class="{ activeItem: isActive('home') }" active right>Home</b-nav-item>
                <b-nav-item to="/AboutUs" v-on:click="setActive('aboutUs')" :class="{ activeItem: isActive('aboutUs') }" active right>About Us</b-nav-item>
                <b-nav-item to="/" v-on:click="setActive('careers')" :class="{ activeItem: isActive('careers') }" active right>Careers</b-nav-item>
                <b-nav-item to="/ContactUs" v-on:click="setActive('contactUs')" :class="{ activeItem: isActive('contactUs') }" active right>Contact Us</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      currentName: ''
    }
  },
  created () {
    var urlHash = window.location.hash
    if (urlHash.indexOf('/ContactUs') !== -1) {
      this.currentName = 'contactUs'
    } else if (urlHash.indexOf('/AboutUs') !== -1) {
      this.currentName = 'aboutUs'
    } else {
      this.currentName = 'home'
    }
  },
  methods: {
    isActive: function (menuItem) {
      return this.currentName === menuItem
    },
    setActive: function (menuItem) {
      this.currentName = menuItem // no need for Vue.set()
    }
  }
}
</script>

<style>
.activeItem {
    border-bottom: 4px solid white;
}
</style>
