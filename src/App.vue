<template>
  <NavBar></NavBar> 
  <br>
  <main>
<!-- <SpinnerComp></SpinnerComp> -->
    <router-view/>
  </main>
  <FooterComp></FooterComp>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue'
// import SpinnerComp from './components/SpinnerComp.vue'
export default {
  components: {
    NavBar,
    FooterComp,
    // SpinnerComp
  },


}
</script>



<style src="./assets/css/style.css"> 

</style>
