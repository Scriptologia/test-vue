<template>
  <Header/>
  <main>
    <div class="container-lg">
      <h1 class="my-5">Home</h1>
    </div>
    <div class="container-fluid overflow-hidden bg-info">
      <Carusel/>
    </div>
  </main>
</template>

<script>
    import Header from "@/components/Header";
    import Carusel from "@/components/Carusel";
export default {
  name: 'Home',
  components: {
    Header, Carusel
    },
}
</script>
