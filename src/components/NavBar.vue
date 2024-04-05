<template>
    <div>
      <br>  
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light" id="navbarr">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
            </span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav mx-auto" style="font-family: 'Saira';">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/resume" class="nav-link">Education/Work Experience</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/projects" class="nav-link">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
              </li>
              <li class="nav-item">
                <button type="button" style="background-color: #00A6A6; border-radius: 30px; padding: 2px; border-color:white;">
                  <router-link to="/reachMe" class="nav-link" style="color: white;">Contact me</router-link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    computed: {
      
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
  
  /* Logo */
  .logo {
    width: 100px;
  }
  
  /* Navbar */
  .nav-item {
    font-size: 20px;
  }
  
  .navbar-nav li {
    margin-inline: .2rem;
  }
  

  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .nav-item {
      font-size: 16px;
    }
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #fffdfd;
    transition: color 0.3s; 
  }
  
  nav ul li a:hover {
    color:  #0d7979;
  }

  nav ul li a {
    text-decoration: none;
    color: #fffdfd;
    position: relative; 
  }
  nav ul li a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px; 
    background-color: transparent; 
    bottom: 0;
    left: 0;
    transition: background-color 0.3s; 
  }
  
  
  
  </style>