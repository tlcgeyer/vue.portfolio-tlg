<template>
  <div class="container">
    <div>
      <h1 class="text-center" id="projects">Projects</h1>
    </div>
    
    <div class="row justify-content-center" v-if="projects">
      <div v-for="project in projects" :key="project.id" class="col-lg-4 col-md-6 col-sm-10 col-12 mb-4">
        <div class="card" style="background-color: white">
          <img :src="project.image" class="card-img-top img-fluid" alt="projects image" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p> 
            <div class="button-container d-flex justify-content-center">
              <a :href="project.github" class="btn btn-primary" target="_blank">GitHub</a> 
              <a :href="project.netlify" class="btn btn-primary" target="_blank">Netlify</a>
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
  font-weight: 600;
  color: white;
}

.card {
  margin: 0 15px 30px;
  border-radius: 15px;
}

.card-img-top {
  width: 100%;
  height: auto;
}

.button-container {
  margin-top: 20px;
}

@media (max-width: 576px) { /* Small devices (phones) */
  .card {
    margin: 0 10px 30px;
  }
}
</style>
