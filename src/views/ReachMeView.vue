<!--my contact page-->

<template>
  <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="message">Message:</label>
      <textarea v-model="message" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default { 
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post(
          '', //sit die formspree dokument hierso
          `name=${encodeURIComponent(this.name)}&email=${encodeURIComponent(
            this.email
          )}&message=${encodeURIComponent(this.message)}`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        // Handle the success response
        console.log('Form submitted successfully:', response.data);

        // You can also reset the form fields if needed
        this.name = '';
        this.email = '';
        this.message = '';
      } catch (error) {
        // Handle errors
        console.error('Error submitting form:', error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles or overrides here */
</style>
