<template>
    <div class="container" id="about">
      <h2  class="justify-content-center d-flex"  id="aboutMe"><span>About me</span></h2>
            <div class="row">
                <div class="pBorder">
                    <p>I'm a 19 year old from Cape Town, South Africa.
                    I'm an aspiring full-stack developer who found an interest in coding through games specifically Genshin Impact. 
                    Seeing all these games inspired me to want to make me want to develop my own. I'm abit of a perfectionist when it
                    comes to certain designs but I do not see that as a weakness but a strength. 
                </p>
                </div><br>
                
                <div class="pBorder">
                    <p>In my free time I do enjoy learning about other programming languages, reading web novels, listening to music 
                    and a walk on the weekends with my dogs. I do exploring nature because it gives me a sense of inspiration when 
                    it comes to designing.
                    </p>
                </div> <br>

                <div>
                    <img src="https://i.postimg.cc/d1HF3p7y/IMG-20231102-WA0036.jpg" alt="me" lazy="loading" class="rounded-circle my-img">
                </div>
            </div>
    </div>

    <!-- Thinking of adding more on the about page about my hobbies, talents, what is tend to do in my free time like baking, reading etc. Mention favorite authors and top 3 books I like to read. Make it on the left side so the about is on the right with the necessary info. Where to add picture.. -->
</template>



<script>
    export default {
        name: 'AboutView'
    }
</script>

<style scope>
#aboutMe {
  padding-top: 1.7rem;
  font-weight: 400;
  color: white;
}
.pBorder {
  flex-basis: 31%;
  background: #D9DBF1;
  border-radius: 10px;
  margin: 1%;
  padding: 20px 12px;
  box-sizing: border-box;
  box-shadow: darkblue;
  transition: 0.5s;
  text-align: justify;
}
.pBorder:hover {
  box-shadow: 0 0 20px 0px rgb(14,28,54);
}

body {
  background-color: black;
  font-family: 'poppins';
  height: 100%;
}
</style>
