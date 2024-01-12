<template>
    <div class="projects">
      <h2>Projects</h2>

      <!--Projects card-->
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
  
</style>