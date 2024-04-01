<template>
  <div class="container">
  <div>
   <h1 class="justify-content-center d-flex display-2" id="projects">Projects</h1>
  </div>
    
  <div class="row d-flex justify-content-center" v-if="projects" >
  <div class="card"  v-for="project in projects" :key="project.id" style="background-color: white">

  <img :src="project.image" class="card-img-top d-flex justify-content-center img-fluid" alt="projects image" width="250px" loading="lazy">
  <div class="card-body">
    <h5 class="card-title">{{ project.name }}</h5>
    <p class="card-text">{{ project.description }}</p> 
    <div class="button-container">
      <a :href="project.github" class="btn btn-primary" target="_blank">GitHub</a> 
      <a :href="project.netlify" class="btn btn-primary" target="_blank">Netlify</a>
    </div>
    
  </div>
</div>
    </div> <br> <br> <br>
  </div>
  
  </template>
  
  
  
  <script>
      export default {
          name: 'ProjectsView',
          computed: {
            projects() {
              return this.$store.state.projects
            },
          },
          mounted() {
            this.$store.dispatch('fetchProjects')
          }
      }
  </script>

  <style scoped>
 .button-container {
    display: flex;
    gap: 10px;
 }

#projects {
  font-weight: 600;
  color: white;
  font-family: poppins;
}

.card {
  justify-content: space-between;
  margin:30px;
  height: 400px;
  width: 350px;
  border-radius: 15px;
  transition: size 0.3s transform 0.2s ease-in-out;
}


img[alt="projects image"] {
  width: 200px;
  height: 200px;
  margin-left: 70px;
  padding-top: 25px;
}
</style>