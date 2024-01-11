<template>
      <div class="testimonials">
        <h1 class="justify-content-center d-flex display-2" id="testi">Testimonials</h1>

        <!--testimonials card-->
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
          mounted() {
            this.$store.dispatch('fetchTestimonials')
          }
        }
    </script>