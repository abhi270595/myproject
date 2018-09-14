<template>
    <b-navbar toggleable="md" fixed="top" type="dark" class="primary-bg-color" sticky>
        <b-navbar-brand href="#">
            <img src="../assets/logo.png" alt="Logo" height="48" width="48">
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" right>Home</b-nav-item>
                <b-nav-item to="/AboutUs" right>About Us</b-nav-item>
                <b-nav-item to="/" right>Careers</b-nav-item>
                <b-nav-item to="/ContactUs" right>Contact Us</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>
