<template>
  <div class="container-fluid">

    <div class="row justify-content-center align-items-center vh-100" id="bbc">
      <VideoComp />
      <!-- <div class="col text-center" id="overlay">
        <h4 style>Welcome,</h4>
        <h1 class="display-4 mb-4" id="myName"  >I'm <span class="fade-in">Tamlin</span></h1>
        <h2 class="mb-5" style="color: orange;"><span>Website Builder</span> <span style="color: white;">&</span> <span>Multi-developer</span></h2>
      </div> -->
    </div>
  </div>
</template>

<script>
import VideoComp from '../components/VideoComp.vue'
export default {
  components : {
    VideoComp
  }
}
</script>

<style scoped>
/* Custom styles */
/* .container-fluid {
  background-image: url("https://i.ibb.co/VBc8Gjb/wallpaperflare-com-wallpaper-3.jpg");
  
  margin: 0;
  padding: 0;
  height: 100%;
} */

/* #overlay{
  position: absolute;
  z-index: 1000;
} */

.vh-100 {
  min-height: 100vh;
}

#bbc{
  overflow: hidden;
  object-fit: contain;
}

/* You can customize colors and fonts as per your preference */
/* h1, h2 {
  color: white;
}

h4 {
  font-size: 1.5rem;
  color: white;
}

.fade-in {
  animation: fadeInAnimation 3s ease infinite;
  font-style: italic;
  color: orange;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 12;
  }
} */
</style>
