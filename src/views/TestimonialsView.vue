<template> 
  <div class="testimonials">
      <h1 class="justify-content-center d-flex display-2" id="testi">Testimonials</h1>

  <div class="row col-md-4 mb-4"  v-if="testimonials">
      <!-- Card 1 -->
        <div class="card">
          <div class="card-title">
          <p class="lead" v-for="first in testimonial" :key="first.id">
            {{ testimonial.name }} {{ testimonial.surname }}
          </p> 
          </div>
          <div class="card-quote">
            {{ testimonial.quote }}
          </div>
          <div class="card-image">
            {{ testimonial.image }}
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
              return this.$store.state.testimonials
            },
          },
          mounted() {  //renderd on the broswer
            this.$store.dispatch('fetchTestimonials')

          }
        }
    </script>