<template>
  <div class="container">
    <div class="testimonials text-center">
      <h1 id="testi">Feedback from Colleagues</h1>
    </div>
    <br>

    <div class="row justify-content-center"  v-if="testimonials">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="col-md-8 mb-3">
        <div class="card testimonial-card">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="testimonial.profile" class="img-fluid" alt="profile-image" loading="lazy">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ testimonial.name }} {{ testimonial.surname }}</h5>
                <p class="card-text">{{ testimonial.quote }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.testimonials {
  margin-bottom: 30px;
}

.testimonial-card {
  background-color: #00A6A6;
  color: white; 
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(255, 165, 0, 0.5); /* Orange hue box shadow */
    border: 2px solid transparent; /* Start with a transparent border */
    animation: border-animation 2s infinite; /* Apply border animation */
  }
}

.testimonial-card img {
  width: 100px;
  height: 100px;
  object-fit: cover; /* Ensure the image covers the entire space */
  border-radius: 50%; 
  margin: 10px; 
}

.card-title {
  font-size: 1.25rem;
  font-weight:500;
}

.card-text {
  font-size: 1rem;
}

@keyframes border-animation {
  0% {
    border-color: #EFCA08; /* Start with red */
  }
  50% {
    border-color: #F08700; /* Change to green halfway */
  }
  100% {
    border-color:  #00A6A6; /* End with blue */
  }
}
</style>
