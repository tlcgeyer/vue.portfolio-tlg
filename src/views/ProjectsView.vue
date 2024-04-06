<template>
  <div class="container">
    <div>
      <h1 class="text-center" id="projects">Projects</h1>
    </div><br><br>
    
    <div class="row justify-content-center" v-if="projects">
      <div v-for="project in projects" :key="project.id" class="col-lg-4 col-md-6 col-sm-10 col-12 mb-4">
        <div class="card">
          <img :src="project.image" class="card-img-top img-fluid" alt="projects image" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p> 
            <div class="card-footer">
              <div class="button-container d-flex justify-content-center  ">
              <a :href="project.github" class="btn btn-primary mx-2" target="_blank">GitHub</a> 
              <a :href="project.netlify" class="btn btn-danger"  target="_blank">Live</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
#projects {
  padding-top: 1.7rem;
  font-weight: 400;
  color: black;
  font-size: 65px;
  font-family: 'Saira';
  text-shadow: 2px 2px 2px  #BFCC94;
}

.card {
  height: 500px;
  background-color: black;
  color: white;

  &:hover {
    box-shadow: 0 4px 10px #468189; /* Orange hue box shadow */
  }
}

.card-img-top {
  width: 100%;
  height: 200px;
  transition: box-shadow 0.3s ease;
}

.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

}

@media (max-width: 576px) { /* Small devices (phones) */
  .card {
    margin: 0 10px 30px;
  }
}

.card:hover .card-img-top {
  transform: scale(1.05); /* Scale up the image on hover */
}

</style>
