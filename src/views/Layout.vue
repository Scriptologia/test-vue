<template>
        <router-view></router-view>
    <Footer/>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    export default {
        components: {
            Footer
        },
        name: "Layout"
    }
</script>

<style scoped>

</style>