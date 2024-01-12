<template>
    <div class="testimonials">
      <h1 class="justify-content-center d-flex display-2" id="testi">Testimonials</h1>
    </div>
    
  <div class="row d-flex justify-content-center" v-if="testimonials" >
  <div class="card"  v-for="testimonial in testimonials" :key="testimonial.id" >

  <img :src="testimonial.profile" class="card-img-top d-flex justify-content-center" alt="profile image">
  <div class="card-body">
    <h3 class="card-title">
      <p class="lead">{{ testimonial.name }} {{ testimonial.surname }}</p>
    </h3>

    <h6 class="card-quote">
      <p class="lead-3">"{{ testimonial.quote}}"</p>
  </h6>
    

  </div>
</div>
    </div>

    <div class="justify-content-center d-flex">
      <!--spinner-->
    </div>
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
  font-family: poppins;
}

#testi {
  font-weight: 600;
  color: white;
  font-family: poppins;
}

.card {
  justify-content: space-between;
  row-gap: 1.5rem;
  margin:80px;
  height: 600px;
  width: 400px;
  background-color: lightgray; /* Dark blue background color */
  border-radius: 15px;
  box-shadow: 0 0 10px blue;
  transition: size 0.3s transform 0.2s ease-in-out;
}

card:hover {
  transform: scale(1.05); 
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
  font-size: large;
}
</style>
