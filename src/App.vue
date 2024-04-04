<template>
  <NavBar/> 
  <router-view/>
  <main>
    
  </main>
  <FooterComp/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';


export default {
  components: {
    NavBar,
    FooterComp,
  },


}
</script>



<style> 

#app {
  font-family: "Saira";
  background-color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}
</style>
