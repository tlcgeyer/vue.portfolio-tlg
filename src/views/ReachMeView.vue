<template>
  <div class="container"> <br>
      <div class="row">
          <h3 class="display-6 d-flex justify-content-left" style="color: white;">Contact</h3>
          <br><br> <br><br>
          <div class="col-md-6">
              <form class="submit-form" action="https://formspree.io/f/xwkgbwrl" method="POST" name="contact-form">
              <div class="mb-3">
                  <label for="name" class="form-label d-flex justify-content-left mx-3" id="darker-1" style="color: white;">Your Name</label>
                  <input type="text" id="name" placeholder=" Your Name..." v-model="name" class="form-control" required name="name">
              </div>
              <div class="mb-3">
                  <label for="email" class="form-label d-flex justify-content-left mx-3" id="darker-1" style="color: white;">Your Email</label>
                  <input type="email" id="email" placeholder=" Your Email..."  v-model="email" class="form-control" required name="email">
              </div>
              <div class="mb-3">
                  <label for="message" class="form-label d-flex justify-content-left mx-3" id="darker-1" style="color: white;">Your Message</label>
                  <textarea id="message" placeholder=" Your Message..."   v-model="message" class="form-control" rows="4" required name="message"></textarea>
              </div>
              <br> <br>

              <button type="submit" class="d-flex justify-content-left" id="button-2">Submit</button>
              </form>
              
          </div>
          <div class="col-md-6">
              <h4 class="heading1">Get In Touch</h4>
              <p class="lead" id="para">Have questions or just want to chat about your furry friend's needs? We're here for you! Feel free to reach out to the PawCare team.</p> <br><br>

<a href="https://maps.app.goo.gl/GGoTrnTA9FsUwnqh7" target="_blank" rel="noopener noreferrer" class="mx-2"><svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14C15 21 10 29 10 29C10 29 5 21 2 14C-1 7 4 1 10 1C16 1 21 7 18 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a><span class="darker-2">Address</span> <br>
<span class="lighter-1">Cape Town, Mitchell's Plain</span> <br> <br> <br> 


<a href="tel:+27748861234" class="mx-2"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.052 0.787109L16.018 1.04811C17.1993 1.36779 18.2762 1.99161 19.1413 2.85735C20.0063 3.72309 20.6293 4.80049 20.948 5.98211L21.208 6.94711L19.278 7.46811L19.017 6.50311C18.7892 5.65908 18.3442 4.88952 17.7262 4.27118C17.1082 3.65284 16.3389 3.20734 15.495 2.97911L14.53 2.71711L15.052 0.787109ZM-6.8568e-06 1.00011H8.57999L10.067 7.69011L8.20699 9.55011C9.30013 11.2525 10.7473 12.6994 12.45 13.7921L14.31 11.9331L21 13.4201V22.0001H20C16.1504 22.0061 12.3816 20.896 9.14999 18.8041C6.76726 17.262 4.73808 15.2328 3.19599 12.8501C1.10419 9.61845 -0.00594029 5.84969 -6.8568e-06 2.00011V1.00011ZM2.02699 3.00011C2.19523 6.12008 3.17747 9.14161 4.87599 11.7641C6.26436 13.909 8.09107 15.7357 10.236 17.1241C12.8585 18.8227 15.88 19.805 19 19.9731V15.0241L14.947 14.1241L12.773 16.2991L12.11 15.9221C9.59272 14.4915 7.50865 12.4074 6.07799 9.89011L5.70099 9.22711L7.87599 7.05311L6.97599 3.00011H2.02699ZM14.138 4.16511L15.104 4.42611C15.6947 4.58595 16.2331 4.89786 16.6656 5.33073C17.0982 5.7636 17.4096 6.3023 17.569 6.89311L17.829 7.85811L15.899 8.37911L15.638 7.41411C15.5696 7.16089 15.436 6.93003 15.2505 6.74456C15.0651 6.55909 14.8342 6.4255 14.581 6.35711L13.616 6.09611L14.138 4.16511Z" fill="white"/>
</svg>
</a> <span class="darker-2">Call me</span> <br> 
<span class="lighter-1">(+27) 74 886 1234</span>  <br><br><br>

<a href="mailto:tamlincupido2402@gmail.com"><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-2">
<path d="M23 0H2C1.60218 0 1.22064 0.175595 0.93934 0.488155C0.658035 0.800716 0.5 1.22464 0.5 1.66667V18.3333C0.5 18.7754 0.658035 19.1993 0.93934 19.5118C1.22064 19.8244 1.60218 20 2 20H23C23.3978 20 23.7794 19.8244 24.0607 19.5118C24.342 19.1993 24.5 18.7754 24.5 18.3333V1.66667C24.5 1.22464 24.342 0.800716 24.0607 0.488155C23.7794 0.175595 23.3978 0 23 0ZM21.845 18.3333H3.245L8.495 12.3L7.415 11.1417L2 17.3667V2.93333L11.3225 13.2417C11.6035 13.5521 11.9837 13.7263 12.38 13.7263C12.7763 13.7263 13.1565 13.5521 13.4375 13.2417L23 2.675V17.2583L17.48 11.125L16.4225 12.3L21.845 18.3333ZM2.9825 1.66667H21.785L12.38 12.0583L2.9825 1.66667Z" fill="white"/>
</svg>
</a><span class="darker-2">Email</span> <br>
<span class="lighter-1">tamlincupido2402@gmail.com</span>
<br><br><br>

<span class="align-text-center" id="darker-1">Follow Me On</span> <br>
<div class="gap-2">
<a href="https://www.instagram.com/"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-2">
<path d="M6.03537 0.75C2.92825 0.75 0.375 2.9355 0.375 5.60175V12.3983C0.375 15.0615 2.92475 17.25 6.03537 17.25H13.9646C17.0718 17.25 19.625 15.0645 19.625 12.3983V5.6025C19.625 2.9385 17.0753 0.75 13.9646 0.75H6.03537ZM6.03537 2.25H13.9646C14.4783 2.24941 14.9871 2.3357 15.4619 2.50393C15.9366 2.67216 16.368 2.91903 16.7312 3.23038C17.0945 3.54174 17.3825 3.91147 17.5787 4.31839C17.775 4.72531 17.8757 5.16143 17.875 5.60175V12.3983C17.8757 12.8386 17.775 13.2747 17.5787 13.6816C17.3825 14.0885 17.0945 14.4583 16.7312 14.7696C16.368 15.081 15.9366 15.3278 15.4619 15.4961C14.9871 15.6643 14.4783 15.7506 13.9646 15.75H6.03625C5.52246 15.7507 5.01357 15.6645 4.53873 15.4963C4.06389 15.3281 3.63243 15.0812 3.26909 14.7699C2.90575 14.4585 2.61766 14.0888 2.42134 13.6818C2.22501 13.2748 2.12431 12.8386 2.125 12.3983V5.6025C2.12419 5.16211 2.22478 4.72592 2.421 4.31891C2.61722 3.9119 2.90521 3.54208 3.26847 3.23065C3.63173 2.91921 4.06312 2.67228 4.53792 2.504C5.01272 2.33572 5.52159 2.24941 6.03537 2.25ZM15.1678 3.891C15.0635 3.8906 14.9602 3.90791 14.8638 3.94192C14.7674 3.97592 14.6799 4.02596 14.6062 4.08914C14.5325 4.15231 14.4741 4.22738 14.4344 4.31C14.3947 4.39262 14.3745 4.48116 14.375 4.5705C14.375 4.9485 14.7268 5.25 15.1678 5.25C15.2721 5.2505 15.3754 5.23326 15.4719 5.1993C15.5684 5.16534 15.6561 5.11532 15.7299 5.05213C15.8037 4.98895 15.8622 4.91385 15.9019 4.83118C15.9416 4.74851 15.9618 4.65991 15.9614 4.5705C15.9618 4.48109 15.9416 4.39249 15.9019 4.30982C15.8622 4.22715 15.8037 4.15205 15.7299 4.08887C15.6561 4.02568 15.5684 3.97566 15.4719 3.9417C15.3754 3.90773 15.2721 3.8905 15.1678 3.891ZM10 4.5C7.1125 4.5 4.75 6.525 4.75 9C4.75 11.475 7.1125 13.5 10 13.5C12.8875 13.5 15.25 11.475 15.25 9C15.25 6.525 12.8875 4.5 10 4.5ZM10 6C11.9451 6 13.5 7.33275 13.5 9C13.5 10.6672 11.9451 12 10 12C8.05487 12 6.5 10.6672 6.5 9C6.5 7.33275 8.05487 6 10 6Z" fill="#D27C2C"/></svg></a>

<!-- =========================================================================== -->

<a href="https://twitter.com/"><svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-2">
<path d="M19.1667 1.92239C18.4795 2.19521 17.7518 2.37409 17.007 2.45323C17.7887 2.03592 18.3766 1.37415 18.6607 0.591559C17.92 0.983499 17.1122 1.25956 16.2709 1.40823C15.9167 1.0709 15.4906 0.802715 15.0185 0.620041C14.5465 0.437367 14.0385 0.34403 13.5255 0.345726C11.4483 0.345726 9.76443 1.85406 9.76443 3.71239C9.76443 3.97573 9.79743 4.23323 9.86159 4.47906C8.37162 4.41464 6.91278 4.06857 5.57816 3.46293C4.24355 2.85728 3.06246 2.00538 2.11026 0.961559C1.77643 1.47356 1.60097 2.05804 1.60243 2.65323C1.60307 3.20986 1.75627 3.75758 2.04819 4.24689C2.34012 4.73619 2.76156 5.15165 3.27443 5.45573C2.67812 5.43823 2.0947 5.2935 1.57126 5.03323V5.07489C1.57126 6.70656 2.86834 8.06739 4.58709 8.37739C4.26407 8.45531 3.93129 8.4948 3.59709 8.49489C3.35418 8.49489 3.11859 8.47406 2.88851 8.43239C3.13425 9.10566 3.60452 9.69265 4.23401 10.1118C4.8635 10.531 5.62095 10.7616 6.40118 10.7716C5.06291 11.7087 3.42001 12.2149 1.73076 12.2107C1.42643 12.2107 1.12759 12.1941 0.833344 12.1641C2.55783 13.1563 4.55739 13.6818 6.59826 13.6791C13.5163 13.6791 17.2985 8.54823 17.2985 4.09906L17.2857 3.66323C18.0235 3.19128 18.6608 2.60143 19.1667 1.92239Z" fill="#D27C2C"/>
</svg>
</a>

<a href="https://www.facebook.com/"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-2">
<path d="M16 8.04902C16 3.60302 12.418 -0.000976562 7.99999 -0.000976562C3.57999 2.34375e-05 -0.00201416 3.60302 -0.00201416 8.05002C-0.00201416 12.067 2.92399 15.397 6.74799 16.001V10.376H4.71799V8.05002H6.74999V6.27502C6.74999 4.25802 7.94499 3.14402 9.77199 3.14402C10.648 3.14402 11.563 3.30102 11.563 3.30102V5.28102H10.554C9.56099 5.28102 9.25099 5.90202 9.25099 6.53902V8.04902H11.469L11.115 10.375H9.24999V16C13.074 15.396 16 12.066 16 8.04902Z" fill="#D27C2C"/></svg></a>
</div>
          </div>
      </div>
      
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
    submitForm() {
      
    },
  },
};
</script>

<style scoped>
.heading1 {
    color: white;
    font-weight: 300;
}

#para {
    font-size: medium;
}

#button-2 {
    color: white;
    background-color: #EE6F12;
    border: #EE6F12;
    border-radius: 13px;
    size: 50px;
    padding: 10px 20px;
}

#name {
    border-radius:13px;
    border-color: #EE6F12;
}

#email {
    border-radius:13px;
    border-color: #EE6F12;
}

#message {
    border-radius:13px;
    border-color: #EE6F12;
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
</style>