<template> 
<!--------------------------Education------------------------------------->
<div class="container-fluid">
    <div class="skills">
      <h1 class="justify-content-start d-flex" id="education">Education</h1>
    </div>
    <div  class="black-line"></div>
  <div v-if="education" >
  <div>

  <!-- <img :src="educations.image" class="card-img-top d-flex justify-content-center img-fluid" alt="education image" loading="lazy"> -->
<br>  <div class="card-body justify-content-start d-flex" style="padding-left: 8%;">
    <h6 class="card-level"> 
      <p class="lead-3">- Full-Stack Developement at Life Choices Coding Academy <br><br><span style="color: grey;">Sept 2023- March 2024</span></p>
    </h6><br><br>
     <br><br>
  </div>
    <div class="card-body justify-content-start d-flex" style="padding-left: 8%;">
    <h6 class="card-level"> 
      <p class="lead-3">- End-user Programmer <span style="font-size: smaller; font-style: italic; color: green;">course completed</span> <br><br><span style="color: grey;">March 2023 - Aug 2023 </span></p>
    </h6><br><br>

  <br><br>

  </div>
    <div class="card-body justify-content-start d-flex" style="padding-left: 8%;">
    <h6 class="card-level"> 
      <p class="lead-3">- Physiotherapy at University of Western Cape <span style="font-size: smaller; font-style: italic; color: green;">course incompleted</span> <br><br><span style="color: grey;">Jan 2022 - March 2022 </span></p>
    </h6><br><br>

  <br><br>

  </div>
    <div class="card-body justify-content-start d-flex" style="padding-left: 8%;">
    <h6 class="card-level"> 
      <p class="lead-3">- Introduction to Psycology <span style="font-size: smaller; font-style: italic; color: green;">coursed completed</span><br><br><span style="color: grey;">April 2021 - October 2021 </span></p>
    </h6><br><br>

  <br><br>

  </div>

  <div class="card-body justify-content-start d-flex" style="padding-left: 8%;">
    <h6 class="card-level"> 
      <p class="lead-3">- Pacaltsdorp Secondary School <br><br><span style="color: grey;">Jan 2017- Jan 2021</span></p>
    </h6><br><br>

  <br><br><br>

  </div>



 
</div>
</div>
</div>
<br><br><br>
<!----------------------------------------Work Experience---------------------------------------- -->
<div class="container-fluid">
  <div class="work-experience">
    <h1 class="justify-content-start d-flex" id="skills">Work Experience</h1>
      <div  class="black-line"></div>
  </div>
    <div class="row d-flex justify-content-center">
      <div class="card-body justify-content-start d-flex" style="padding-left: 8%;">
    <h6 class="card-level"> <br><br>
      <p class="lead-3">- Software Engineering Intern at <br>Life Choices Studio <span style="color: green; font-style: italic; font-size: small;">current</span><br><br>
      <span style="color: grey;">Work experience training in <br>Software Engineering</span>
      </p>
    </h6><br><br><br><br>
  </div> 
  
  <div class="card-body justify-content-start d-flex" style="padding-left: 8%;">
    <h6 class="card-level"> <br><br>
      <p class="lead-3">- Soccer Coach Assistant <br><br><span style="color: grey;">June 2022- Nov 2022</span></p>
    </h6><br><br>

  <br><br><br>
  </div>
    </div>
  </div>
<br><br><br><br>

    <!------------------------------------------ Skills -------------------------------------->
    <div class="container-fluid">
    <div class="skills">
      
      <h1 class="justify-content-start d-flex" id="skills">Skills</h1>
      <div  class="black-line"></div>
    </div>
    
  <div class="row d-flex justify-content-center" v-if="skills">
  <div class="card" style="width: 200px; height: 280px;"  v-for="skill in skills" :key="skill.id" >

  <img :src="skill.image" class="card-img-top d-flex justify-content-center img-fluid" alt="skill image" loading="lazy" style="margin-right: 100px;">
  <div class="card-body">
    <h3 class="card-title">
      <p class="lead">{{ skill.language }}</p>
    </h3>

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
    width: 70%; 
    height: 1px;
    padding:1px;
    margin-left: 100px;
    background-color:black; 
}

#skills {
  font-weight: 400;
  color: black;
  padding-left: 100px;
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
  padding-top: 25px;
}


/* Styles for large devices */
.black-line {
  width: 70%;
  height: 1px;
  padding: 1px;
  margin-left: 100px;
  background-color: black;
}

#skills,
#education {
  font-weight: 400;
  color: black;
  padding-left: 100px;
}

.card {
  justify-content: space-between;
  margin: 30px;
  height: 400px;
  width: 400px;
  background-color: white;
  border-color: #00A6A6;
}

img[alt="skill image"] {
  padding-top: 25px;
}

/* Media queries for responsiveness */
@media only screen and (max-width: 768px) {
  .black-line {
    width: 90%;
    margin-left: 5%;
  }
  
  #skills,
  #education {
    padding-left: 5%;
  }
}

@media only screen and (max-width: 576px) {
  .black-line {
    width: 100%;
    margin-left: 0;
  }
  
  #skills,
  #education {
    padding-left: 2%;
  }
  
  .card {
    width: 90%;
    margin: 15px auto;
  }
}

  </style>