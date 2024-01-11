<!--testimonial cards-->
<template> 
  <div class="testimonials">
      <h1 class="justify-content-center d-flex display-2" id="testi">Testimonials</h1>

  <div class="row">
  <div v-for="(testimonial, index) in testimonials" :key="index" class="col-md-4 mb-4">
      <!-- Card 1 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-title">
            {{ testimonial.name }} {{ testimonial.surname }}
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
      <!-- Card 2 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-header">
            <slot name="cardHeader2"></slot>
          </div>
          <div class="card-body">
            <slot name="cardBody2"></slot>
          </div>
          <div class="card-footer">
            <slot name="cardFooter2"></slot>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-header">
            <slot name="cardHeader3"></slot>
          </div>
          <div class="card-body">
            <slot name="cardBody3"></slot>
          </div>
          <div class="card-footer">
            <slot name="cardFooter3"></slot>
          </div>
        </div>
      </div>
    
    
    <div class="row">
      <!-- Card 4 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-header">
            <slot name="cardHeader1"></slot>
          </div>
          <div class="card-body">
            <slot name="cardBody1"></slot>
          </div>
          <div class="card-footer">
            <slot name="cardFooter1"></slot>
          </div>
        </div>
      </div>

      <!-- Card 5-->
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-header">
            <slot name="cardHeader2"></slot>
          </div>
          <div class="card-body">
            <slot name="cardBody2"></slot>
          </div>
          <div class="card-footer">
            <slot name="cardFooter2"></slot>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-header">
            <slot name="cardHeader3"></slot>
          </div>
          <div class="card-body">
            <slot name="cardBody3"></slot>
          </div>
          <div class="card-footer">
            <slot name="cardFooter3"></slot>
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
              return this.$store.state.testimonials
            },
          },
          mounted() {
            this.$store.dispatch('fetchTestimonials').then(() => {
    console.log(this.$store.state.testimonials);
  });

          }
        }
    </script>