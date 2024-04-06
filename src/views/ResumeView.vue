<template> 
<!--------------------------Education------------------------------------->
<div class="container-fluid">
  <div class="education">
    <h1 class="justify-content-start d-flex" id="education">Education</h1> 
    <div class="black-line"></div>
  </div>
  
  <div v-if="education">
    <div class="row">
      <div class="col-md-6 order-2 order-md-1">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Full-Stack Development at Life Choices Coding Academy</h5>
            <p class="card-text">Coding bootcamp covering full-stack development.</p>
            <p class="card-text text-muted">Sept 2023 - March 2024</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 order-1 order-md-2">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">End-user Computing</h5>
            <p class="card-text">Online course covering basic computer skills.</p>
            <p class="card-text text-muted">March 2023 - Aug 2023</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 order-3">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Physiotherapy at University of Western Cape</h5>
            <p class="card-text">Incomplete course due to financial reasons.</p>
            <p class="card-text text-muted">Jan 2022 - March 2022</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 order-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Introduction to Psychology</h5>
            <p class="card-text">Online course introducing basic psychology concepts.</p>
            <p class="card-text text-muted">April 2021 - October 2021</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 order-5">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Pacaltsdorp Secondary School</h5>
            <p class="card-text">High school education.</p>
            <p class="card-text text-muted">Jan 2017 - Jan 2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


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
      <span style="color: #00A6A6;">Work experience training in <br>Software Engineering</span>
      </p>
    </h6><br><br><br><br>
  </div> 
  
  <br><br><br>
  </div>
    </div><br><br>


    <!------------------------------------------ Skills -------------------------------------->

    <div class="container-fluid">
  <div class="skills">
    <h1 class="justify-content-start d-flex" id="skills">Skills</h1>
    <div class="black-line"></div>
  </div>

  <div class="row d-flex justify-content-center" v-if="skills">
    <div class="skill-item" v-for="skill in skills" :key="skill.id">
      <img :src="skill.image" alt="skill image" class="img-fluid">
      <h3>{{ skill.language }}</h3>
    </div>
  </div>
</div><br><br>
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

.card-skills {
  justify-content: space-between;
  margin:30px;
  height: 400px;
  width: 400px;
  background-color: white; 
  border-color: #00A6A6;
  border: 0.5rem;

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
  
  #skills {
    padding-left: 5%;
  }
}

@media only screen and (max-width: 576px) {
  .black-line {
    width: 100%;
    margin-left: 0;
  }
  
  #skills {
    padding-left: 2%;
  }
  
  .card {
    width: 90%;
    margin: 15px auto;
  }
}
    .card {
    position: relative;
    border-left: 2px solid #00A6A6; /* Color for timeline */
    margin-bottom: 30px; /* Spacing between timeline items */
    height: 240px;
  }

  .card-body {
    padding-left: 40px; /* Offset for timeline line */
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px; /* Width of timeline line */
    height: 100%; /* Height of timeline line */
    background-color: #00A6A6; /* Color for timeline */
  }


  .skills {
    text-align: center;
    margin-bottom: 50px;
  }

  .skills h1 {
    margin-bottom: 20px;
    color: #00A6A6;
  }

  .skill-item {
    flex: 1;
    text-align: center;
    margin: 0 15px;
  }

  .skill-item img {
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .skill-item {
      margin-bottom: 20px;
    }
  }


  </style>