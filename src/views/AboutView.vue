<template>
    <div class="container" id="about">
      <h2  class="justify-content-center d-flex"  id="aboutMe"><span>About me</span></h2> <br><br>
                
            <div class="row d-flex"> <br>
              <div class="col w-80 my-5">
                <!--img-->
                <div class="justify-content-center d-flex">
                    <img src="https://i.postimg.cc/Njq0m4bN/20240110-121622-1.jpg" alt="me" lazy="loading" class="rounded-circle my-img img-fluid">
                </div> <br><br>

            </div>

            <div class="col w-10">
               <p>I originate from Cape Town, South Africa.
                    I'm an aspiring full-stack developer who found an interest in coding through games specifically Genshin Impact. Seeing all these games inspired me to want to make me want to develop my own. I'm a bit of a perfectionist when it comes to certain designs but I do not see that as a picky but a just specific as how I envision my outcome to blend and look like. 
                    <br>
                    I have the utmost confidence in my ability to succeed in the fast-paced world of technology. My creativity thrives on diversity, allowing me to adapt to new challenges and situations with ease. Despite being a self-taught programmer, I have managed to carve out a niche for myself in the industry and contribute effectively to team projects.
                    <br>
                    In addition to my technical skills, I am an avid problem solver who thrives in pressure situations. I believe in the power of collaboration and always look for opportunities to learn from my peers. I am constantly refining my skills and seeking new challenges to further my knowledge and expertise.
                    <br>
                    As an ambitious individual with a strong passion for creating my own games, I am eager to take on new opportunities that will enable me to apply my skills and knowledge to real-world projects. I am excited about the possibility of joining a high-class, in-demand software company where I can further enhance my abilities and contribute to the growth and success of the company.
                    <br>
                    Overall, I am confident that my free-spirited yet dedicated approach to work, combined with my unwavering commitment to personal and professional growth, will make me a valuable asset to any team.
                    </p> <br> <br> <br>
                    
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

<style scoped>
img[alt="books"] {
  width: 200px;
}

#hob {
  font-weight: 400;
}

#aboutMe {
  padding-top: 1.7rem;
  font-weight: 400;
  color: white;
  font-size: 65px;
}

body {
  font-family: 'poppins';
  height: 100%;
}


img[alt="me"] {
  box-shadow: 0 0 20px 0px rgb(14,28,54);
}

</style>
