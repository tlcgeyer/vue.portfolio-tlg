<template> 
<!--------------------------Education------------------------------------->
<div class="container-fluid">
    <div class="skills">
      <h1 class="justify-content-center d-flex display-2" id="education">Education</h1>
    </div>
    
  <div class="row d-flex justify-content-center" v-if="education" >
  <div class="card"  v-for="educations in education" :key="educations.id" >

  <img :src="education.image" class="card-img-top d-flex justify-content-center img-fluid" alt="education image" loading="lazy">
  <div class="card-body">
    <h6 class="card-level">
      <p class="lead-3">"{{ education.year}}"</p>
  </h6>

    <h6 class="card-description">
      <p class="lead-3">"{{ education.description}}"</p>
  </h6>
    

  </div>
</div>
    </div>

     <!-- <div class=" v-else">
      <SpinnerComp></SpinnerComp>
      </div> -->
  </div> <br><br><br><br><br><br><br>





    <!------------------------------------------ Skills -------------------------------------->
    <div class="container-fluid">
    <div class="skills">
      <h1 class="justify-content-center d-flex display-2" id="skills">Skills</h1>
    </div>
    
  <div class="row d-flex justify-content-center" v-if="skills">
  <div class="card"  v-for="skill in skills" :key="skill.id" >

  <img :src="skill.image" class="card-img-top d-flex justify-content-center img-fluid" alt="skill image" loading="lazy">
  <div class="card-body">
    <h3 class="card-title">
      <p class="lead">{{ skill.language }}</p>
    </h3>

    <h6 class="card-level">
      <p class="lead-3">"{{ skill.level}}"</p>
  </h6>

    <h6 class="card-description">
      <p class="lead-3">"{{ skill.comment}}"</p>
  </h6>
    

  </div>
</div>
    </div>
  </div> <br> <br>
  </template>

  
  
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
 body {
  background-color: black;
  color: white; /* Set text color to white */
  font-family: poppins;
}

#skills {
  font-weight: 600;
  color: white;
  font-family: poppins;
}

#education {
   font-weight: 600;
  color: white;
  font-family: poppins;
}

.card {
  justify-content: space-between;
  margin:30px;
  height: 400px;
  width: 400px;
  background-color: lightgray; /* Dark blue background color */
  border-radius: 15px;
  box-shadow: 0 0 10px blue;
  transition: size 0.3s transform 0.2s ease-in-out;
}


img[alt="skill image"] {
  width: 200px;
  height: 200px;
  margin-left: 90px;
  padding-top: 25px;
}

img[alt="education image"] {
  width: 200px;
  height: 200px;
  margin-left: 90px;
  padding-top: 25px;
}
  </style>