<template> 
    <div>
      <h2 class="display-2">Education</h2>
    </div>

    <p>woebhd vjkwqihoubeihkd nsm</p>
    <!--Education cards-->
 
   <!-- <div class="education" v-if="$store.state.education">
    </div>
    <div class="skills" v-if="$store.state.skills">
    </div> -->
<!-- <div class="row" v-for=" thing in skills" :key="skills.id"> to uniquely identify something unique
     <p class="lead" >{{ thing.id }}</p> 
    </div>  -->

    <!--Skills cards : they gonna flip and display the information behind them,add a hover over it-->

  </template>
  <!-- for the img :src="school.image" -->
  
  
  
  <script>
      export default {
          name: 'ResumeView',
          computed: {
            education() {
              return this.$store.state.education
            },
            skills() {
              return this.$store.state.skills
            }
          },
          mounted() {
            this.$store.dispatch('fetchEducation')
            this.$store.dispatch('fetchSkills')
          }
      }
  </script>

  <style scoped>


  </style>