<template>
    <div class="container" id="about">
      <h2  class="justify-content-center d-flex"  id="aboutMe"><span>About me</span></h2> <br><br>
                
            <div class="row d-flex "> <br>
              <div class="col-lg-4 col-md-7 w-80 my-5">
                <!--img-->
                <div class="justify-content-center d-flex">
                    <img src="https://i.postimg.cc/Njq0m4bN/20240110-121622-1.jpg" alt="me" lazy="loading" class="rounded-circle my-img img-fluid">
                </div> <br><br>

            </div>

            <div class="col w-10" style="font-family: 'Saira'; " id="infos">
               <p>I originate from Cape Town, South Africa.
                    I'm an aspiring full-stack developer who found an interest in coding through games specifically Genshin Impact. Seeing all these games inspired me to want to make me want to develop my own. I'm a bit of a perfectionist when it comes to certain designs but I do not see that as a picky but a just specific as how I envision my outcome to blend and look like. 
                    <br><br>
                    I have the utmost confidence in my ability to succeed in the fast-paced world of technology. My creativity thrives on diversity, allowing me to adapt to new challenges and situations with ease. Despite being a self-taught programmer, I have managed to carve out a niche for myself in the industry and contribute effectively to team projects.
                    In addition to my technical skills, I am an avid problem solver who thrives in pressure situations. I believe in the power of collaboration and always look for opportunities to learn from my peers. I am constantly refining my skills and seeking new challenges to further my knowledge and expertise.
                    <br><br>
                    As an ambitious individual with a strong passion for creating my own games, I am eager to take on new opportunities that will enable me to apply my skills and knowledge to real-world projects. I am excited about the possibility of joining a high-class, in-demand software company where I can further enhance my abilities and contribute to the growth and success of the company.
                    <br>
                    Overall, I am confident that my free-spirited yet dedicated approach to work, combined with my unwavering commitment to personal and professional growth, will make me a valuable asset to any team.
                    </p> <br> <br> <br>
                    
            
          </div>
    </div>
    <div class="justify-content-center">
      <button>
        <a href="hhttps://docs.google.com/document/d/1CXAmhHSl0oUZMmWvDhoenXiwUTdrtF0DTGD0YjsoaSY/edit?usp=sharing" class="yes" target="_blank" style="text-decoration: none; color: black;">
		Download CV</a>
      </button>
    </div>
    <br><br>
</div>
</template>



<script>
    export default {
        name: 'AboutView'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

img[alt="books"] {
  width: 200px;
}


#hob {
  font-weight: 400;
}

#aboutMe {
  padding-top: 1.7rem;
  font-weight: 400;
  color: black;
  font-size: 65px;
  font-family: 'Saira';
  text-shadow: 2px 2px 2px  #BFCC94;
}


img[alt="me"] {
  box-shadow: 2px 2px 2px #84A59D ;
}

/* #about {
  display: flex !important;
  justify-content: center !important;
  flex-wrap: wrap !important;
} */

</style>
