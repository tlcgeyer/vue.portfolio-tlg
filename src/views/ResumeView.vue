<template> 
<!--------------------------Education------------------------------------->
<div class="container-fluid">
    <div class="skills">
      <h1 class="justify-content-start d-flex" id="education">Education</h1>
    </div>
    <div  class="black-line"></div>
  <div v-if="education" >
  <div v-for="educations in education" :key="educations" >

  <!-- <img :src="educations.image" class="card-img-top d-flex justify-content-center img-fluid" alt="education image" loading="lazy"> -->
<br> 
  <div class="card-body justify-content-start d-flex" style="padding-left: 8%;">
    <h6 class="card-level"> 
      <p class="lead-3">-{{ educations.year}}</p>
  </h6>

  <br><br>

    <h6 class="card-info"><br><br>
      <p class="lead-3">"{{ educations.info}}"</p>
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
 .black-line {
    width: 70%; /* Adjust the width as needed */
    height: 1px; /* Adjust the height as needed */
    padding:1px;
    margin-left: 100px;
    background-color:black; /* Set the background color to black */
}

#skills {
  font-weight: 400;
  color: black;
}

#education {
  font-weight: 400;
  color: black;
  padding-left: 100px;
}

.card {
  justify-content: space-between;
  margin:30px;
  height: 400px;
  width: 400px;
  background-color: white; 

}


img[alt="skill image"] {
  width: 200px;
  height: 200px;
  margin-left: 90px;
  padding-top: 25px;
}

/* img[alt="education image"] {
  width: 100px;
  height: 100px;
  margin-left: 90px;
  padding-top: 25px;
} */
  </style>