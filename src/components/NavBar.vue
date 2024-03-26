<!--The navbar -->

<template>
    <div>
             <div class="d-flex justify-content-start flex-column">
         <router-link to="/">
             <!--the pic of my logo for the portfolio-->
            <img src="https://i.ibb.co/cQpLV6G/logoo.png" alt="logo">
        </router-link>
     </div>
   

    <nav class="navbar navbar-expand-lg navbar sticky-top bg-light" id="navbar">
        <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto" style="font-family: 'Saira';">
            <li class="nav-item">
                    <router-link to ="/" class="nav-link">Home<!--insert icon--></router-link> 
            </li>  
            <li class="nav-item">
                 <router-link to ="/about" class="nav-link">About<!--insert icon--></router-link>
            </li>
                   
            <li class="nav-item">
                <router-link to ="/resume" class="nav-link">Resume<!--insert icon--></router-link>
            </li>    
                    
            <li class="nav-item">
                <router-link to ="/projects" class="nav-link">Projects<!--insert icon--></router-link>
            </li>    
                    
            <li class="nav-item">
                 <router-link to ="/testimonials" class="nav-link">Testimonials<!--insert icon--></router-link>
            </li>   
                   
            <li class="nav-item">
                 <router-link to ="/reachMe" class="nav-link">Contact Me<!--insert icon--></router-link>
            </li>
            </ul>  
          </div>
        </div>  
    </nav>
    </div>

</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

img[alt="logo"] {
    width: 90px;
}
</style>