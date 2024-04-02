<template>
  <div class="container-fluid">
    <div class="testimonials">
      <h1 class="justify-content-center d-flex" id="testi">Feedback from Colleagues</h1>
    </div> <br>
    
  <div class="row d-flex justify-content-center" v-if="testimonials" >
  <div class="card mb-3" style="max-width: 540px;" v-for="testimonial in testimonials" :key="testimonial.id" >

  <div class="row g-0">
    <div class="col-md-4">
      <img :src="testimonial.profile" class="img-fluid rounded-start" alt="profile-image" loading="lazy">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">
          <p class="lead">{{ testimonial.name }} {{ testimonial.surname }}</p>
        </h5>
        
        <h6 class="card-quote">
          <p class="lead-3">"{{ testimonial.quote}}"</p>
        </h6>
      </div>
    </div>
  </div>
</div>

  </div>
</div>

     <!-- <div class=" v-else">
      <SpinnerComp></SpinnerComp>
      </div> -->
    <br><br><br>
   
</template>

<script>
export default {
  name: 'TestimonialsView',
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
    
  },
  mounted() {
    // Rendered on the browser
    this.$store.dispatch('fetchTestimonials');

  },
};
</script>

<style scoped>
body {
  background-color: black;
  color: white; /* Set text color to white */
}

#testi {
  font-weight: 600;
  color: white;
}




img[alt="profile image"] {
  width: 200px;
  height: 200px;
  margin-left: 90px;
  padding-top: 25px;
}
.lead-3 {
  text-align: justify;
  font-style: italic;
  font-size: small;
}
</style>
