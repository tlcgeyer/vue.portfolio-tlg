<template>
  <div class="container"> <br>
      <div class="row">
          <h3 class="display-6 d-flex justify-content-left" style="color: black;">Reach Me</h3>
          <br><br> <br><br>
          <div class="col-md-6">
              <form class="submit-form" action="https://formspree.io/f/xwkgbwrl" method="POST" name="contact-form">
              <div class="mb-3">
                  <label for="fullname" class="form-label d-flex justify-content-left mx-3" id="darker-1" style="color: black;">Full Name</label>
                  <input type="text" id="name" v-model="name" required="name" style="border-color: #0d7979;">
              </div>

              <div class="mb-3">
                  <label for="email" class="form-label d-flex justify-content-left mx-3" id="darker-1" style="color: black;">Email</label>
                  <input type="email" id="email"  v-model="email" required name="email" style="border-color: #0d7979;">
              </div>
              <div class="mb-3">
                  <label for="message" class="form-label d-flex justify-content-left mx-3" id="darker-1" style="color: black;">Message</label>
                  <textarea id="message" v-model="message" rows="6" required name="message" style="border-color: #0d7979;"></textarea>
              </div>
              <br> <br>

              <button type="submit" class="d-flex justify-content-left" id="submit">Submit</button>
              
              </form><br><br>
              
          </div>
          <div class="col-md-5 " id="makeCard">
              <h4 class="heading1">Get In Touch</h4>
              <p class="lead" id="para">Have questions or just want to chat about a possible hire? <span class="d-flex justify-content-center">Below are my details.</span></p> <br><br>

<a href="https://maps.app.goo.gl/GGoTrnTA9FsUwnqh7" target="_blank" rel="noopener noreferrer" class="mx-2"><svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" stroke="#00A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14C15 21 10 29 10 29C10 29 5 21 2 14C-1 7 4 1 10 1C16 1 21 7 18 14Z" stroke="#00A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a><span class="darker-2">Address</span> <br>
<span class="lighter-1">Cape Town, Mitchell's Plain</span> <br> <br> <br> 


<a href="tel:+27748861234" class="mx-2"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.052 0.787109L16.018 1.04811C17.1993 1.36779 18.2762 1.99161 19.1413 2.85735C20.0063 3.72309 20.6293 4.80049 20.948 5.98211L21.208 6.94711L19.278 7.46811L19.017 6.50311C18.7892 5.65908 18.3442 4.88952 17.7262 4.27118C17.1082 3.65284 16.3389 3.20734 15.495 2.97911L14.53 2.71711L15.052 0.787109ZM-6.8568e-06 1.00011H8.57999L10.067 7.69011L8.20699 9.55011C9.30013 11.2525 10.7473 12.6994 12.45 13.7921L14.31 11.9331L21 13.4201V22.0001H20C16.1504 22.0061 12.3816 20.896 9.14999 18.8041C6.76726 17.262 4.73808 15.2328 3.19599 12.8501C1.10419 9.61845 -0.00594029 5.84969 -6.8568e-06 2.00011V1.00011ZM2.02699 3.00011C2.19523 6.12008 3.17747 9.14161 4.87599 11.7641C6.26436 13.909 8.09107 15.7357 10.236 17.1241C12.8585 18.8227 15.88 19.805 19 19.9731V15.0241L14.947 14.1241L12.773 16.2991L12.11 15.9221C9.59272 14.4915 7.50865 12.4074 6.07799 9.89011L5.70099 9.22711L7.87599 7.05311L6.97599 3.00011H2.02699ZM14.138 4.16511L15.104 4.42611C15.6947 4.58595 16.2331 4.89786 16.6656 5.33073C17.0982 5.7636 17.4096 6.3023 17.569 6.89311L17.829 7.85811L15.899 8.37911L15.638 7.41411C15.5696 7.16089 15.436 6.93003 15.2505 6.74456C15.0651 6.55909 14.8342 6.4255 14.581 6.35711L13.616 6.09611L14.138 4.16511Z" fill="#00A6A6"/>
</svg>
</a> <span class="darker-2">Call me</span> <br> 
<span class="lighter-1">(+27) 74 886 1234</span>  <br><br><br>

<a href="mailto:tamlincupido2402@gmail.com" style="margin-right: 12px;"><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M23 0H2C1.60218 0 1.22064 0.175595 0.93934 0.488155C0.658035 0.800716 0.5 1.22464 0.5 1.66667V18.3333C0.5 18.7754 0.658035 19.1993 0.93934 19.5118C1.22064 19.8244 1.60218 20 2 20H23C23.3978 20 23.7794 19.8244 24.0607 19.5118C24.342 19.1993 24.5 18.7754 24.5 18.3333V1.66667C24.5 1.22464 24.342 0.800716 24.0607 0.488155C23.7794 0.175595 23.3978 0 23 0ZM21.845 18.3333H3.245L8.495 12.3L7.415 11.1417L2 17.3667V2.93333L11.3225 13.2417C11.6035 13.5521 11.9837 13.7263 12.38 13.7263C12.7763 13.7263 13.1565 13.5521 13.4375 13.2417L23 2.675V17.2583L17.48 11.125L16.4225 12.3L21.845 18.3333ZM2.9825 1.66667H21.785L12.38 12.0583L2.9825 1.66667Z" fill="#00A6A6"/>
</svg>
</a><span class="darker-2">Email</span> <br>
<span class="lighter-1">tamlincupido2402@gmail.com</span>
<br><br><br>

<span class="align-text-center" id="darker-1">Follow Me On</span> <br>
<div class="gap-2">

<!-- =========================================================================== -->
<a href="https://github.com/tlcgeyer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#00A6A6"/>
</svg>
</a> 

<a href="https://www.linkedin.com/feed/" style="margin-left: 10px;"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_206_6)">
<path d="M19.515 11.952C18.837 11.952 18.335 12.123 17.942 12.339C17.879 12.115 17.672 11.951 17.428 12H14.444C14.149 11.951 13.91 12.19 14.001 12.5V23.5C13.91 23.78 14.149 24.02 14.444 24H17.428C17.723 24.02 17.962 23.78 17.962 23.485L17.961 16.837C17.96 16.834 17.949 16.516 18.15 16.297C18.311 16.123 18.588 16.034 18.971 16.034C19.609 16.034 19.893 16.295 19.999 16.879V23.485C19.894 23.78 20.133 24.02 20.428 24H23.573C23.868 24.02 24.107 23.78 24.001 23.485V16.657C24.106 13.185 21.633 11.952 19.515 11.952ZM23.038 23H20.962V16.879C20.962 15.698 20.199 14.966 18.972 14.966C18.278 14.966 17.738 15.17 17.366 15.572C16.849 16.132 16.889 16.842 17 17V23H14.978V13.02H16.894V13.356C16.8932 13.4561 16.9207 13.5544 16.9733 13.6396C17.0258 13.7247 17.1014 13.7934 17.1912 13.8375C17.281 13.8817 17.3815 13.8997 17.481 13.8893C17.5806 13.879 17.6752 13.8407 17.754 13.779L17.894 13.671C18.299 13.352 18.718 13.021 19.516 13.021C20.342 13.021 23.039 13.284 23.039 16.658L23.038 23ZM11 6.966C9.878 6.966 8.966 7.878 8.966 9C8.966 10.122 9.878 11.034 11 11.034C12.122 11.034 13.034 10.122 13.034 9C13.034 7.878 12.122 6.966 11 6.966ZM11 9.966C10.468 9.966 10.034 9.532 10.034 9C10.034 8.468 10.468 8.034 11 8.034C11.532 8.034 11.966 8.468 11.966 9C11.966 9.532 11.532 9.966 11 9.966ZM12.428 11.951H9.46C9.165 11.951 8.926 12.19 9 12.5V23.5C8.926 23.78 9.165 24.02 9.46 24H12.428C12.723 24.02 12.962 23.78 12.962 23.485V12.485C12.962 12.3434 12.9057 12.2076 12.8056 12.1074C12.7055 12.0073 12.5696 11.951 12.428 11.951ZM12 23H9.994V13.02H12V23Z" fill="grey"/>
<path d="M16 -0.0339966C7.158 -0.0339966 -0.0339966 7.158 -0.0339966 16C-0.0339966 24.842 7.158 32.034 16 32.034C24.842 32.034 32.034 24.842 32.034 16C32.034 7.158 24.842 -0.0339966 16 -0.0339966ZM16 30.966C7.748 30.966 1.034 24.252 1.034 16C1.034 7.748 7.748 1.034 16 1.034C24.252 1.034 30.966 7.748 30.966 16C30.966 24.252 24.252 30.966 16 30.966Z" fill="#00A6A6"/>
</g>
<defs>
<clipPath id="clip0_206_6">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
</a>
</div>
</div>
</div>
</div>
  <br><br>
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
    submitForm() {
      
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid #0d7979;
}


.heading1 {
    color:  #0d7979;
    font-weight: 300;
}

#para {
    font-size: medium;
    text-align: start;
    margin-left:60px

}

@media (max-width: 768px) {
  .submit-form {
    max-width: 80%;
    margin: 0 auto;
  }

}

#name {
    border-radius:13px;
    border-color:  #00A6A6;
}

#email {
    border-radius:13px;
    border-color:  #00A6A6;
}

#message {
    border-radius:13px;
    border-color:  #00A6A6;
}

#darker-1 {
    font-weight: 500;
}

.darker-2 {
    font-weight: 500;
}

.lighter-1 {
    font-size: small;
}


#submit {
    text-align: center;
}

#submit{
  background-color: #00A6A6;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

}

#submit:hover {
    box-shadow: 0px 4px 8px #00A6A6; /* Add box shadow */
}


</style>