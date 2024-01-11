<template>
  <div class="container-fluid" id="gradient">
            <div class="container__item landing-page-container">
                <div class="content__wrapper">

                    <header class="header">
                        <h1 class="heading header__item"></h1>

                    </header>

                    <div class="ellipses-container-fluid">

                        <h2 class="greeting">Welcome<br> to my <em>Portfolio</em></h2>

                        <div class="ellipses ellipses__outer--thin">

                            <div class="ellipses ellipses__orbit" id="glow"></div>

                        </div>

                        <div class="ellipses ellipses__outer--thick" id="elli"></div>
                    </div>

                    <div class="scroller">

                        <div class="timeline">
                            <span class="timeline__unit"></span>
                            <span class="timeline__unit timeline__unit--active"></span>
                            <span class="timeline__unit"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  },
  // mounted() {
  //   var colors = [
  //     [251, 243, 246],
  //     [200, 220, 208],
  //     [111, 123, 140],
  //     [244, 226, 156],
  //     [141, 158, 170]
  //   ];

  //   var step = 0;
  //   var colorIndices = [0, 1, 2, 3];
  //   var gradientSpeed = 0.015;

  //   function updateGradient() {
  //     var c0_0 = colors[colorIndices[0]];
  //     var c0_1 = colors[colorIndices[1]];
  //     var c1_0 = colors[colorIndices[2]];
  //     var c1_1 = colors[colorIndices[3]];

  //     var istep = 1 - step;
  //     var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  //     var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  //     var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  //     var color1 = "#" + ((r1 << 16) | (g1 << 8) | b1).toString(16);

  //     var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  //     var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  //     var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  //     var color2 = "#" + ((r2 << 16) | (g2 << 8) | b2).toString(16);

  //     document.getElementById('gradient').style.background = `-webkit-radial-gradient(center, circle cover, ${color1},${color2})`;

  //     step += gradientSpeed;
  //     if (step >= 1) {
  //       step %= 1;
  //       colorIndices[0] = colorIndices[1];
  //       colorIndices[2] = colorIndices[3];

  //       colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  //       colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  //     }
  //   }

  //   setInterval(updateGradient, 10);

  //   document.body.style.margin = '0';
  //   document.body.style.height = '100vh';
  //   document.documentElement.style.height = '100vh';
  // },
};


</script>

<style scoped>
az

/* Color variables */
:root {
  --tiber: #09383E;
  --elephant: #0C383E;
  --white: #fff;
}

/* rem font sizing. */
h1 {
  font-size: 2.4rem; 
}

.container__item {
  margin: 0 auto 40px;
}

.landing-page-container {
  width: 100%;
  min-height: 100%;
  height: 90rem;
  background-image: url('https://s29.postimg.org/vho8xb2pj/landing_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  overflow: hidden;
  color: var(--tiber);
}

.content__wrapper {
  max-width: 1200px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

.header {
  width: 100%;
  height: 2rem;
  padding: 4.5rem 0;
  display: block;
}
.header__item {
  display: inline-block;
  
}
.heading {
  width: 90%;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  line-height: 1.7rem;
  text-align: center;
}

.coords {
  font-size: 1rem;
  color: darkblue ;  
  display: inline-block;
  transform: rotate(-90deg) translateY(50%);
  float: left;
  position: relative;
  top: 40%;
  letter-spacing: 0.2rem;
  left: -11.5rem;
  margin: 0;
}

.ellipses-container {
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  margin: 0;
  position: relative;
  top: 10.5rem;
}

.greeting {
  position: absolute;
  top: 11.6rem;
  left: 13rem;
  right: 0;
  margin: 0 auto;
  padding-top: 10%;
  text-transform: uppercase;
  letter-spacing: 2rem;
  font-size: 2.2rem;
  font-weight: 400;
  opacity: 0.5;
  color: #0C383E;
}

.greeting:after {
  content: '';
  font-weight: 500;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  display: inline-block;
  background-color: var(--elephant);
  position: relative;
  top: -0.65rem;
  left: -5.05rem;
}
 

/*the circle that is rotating */
.ellipses {
  border-radius: 50%;
  position: absolute;
  top: 0;
  border-style: solid;
}

.ellipses__outer--thin {
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-color: rgba(9, 56, 62, 0.1);
  animation: ellipsesOrbit 15s ease-in-out infinite;
}

.ellipses__outer--thin:after {
  content: "";
  background-image: url('https://s29.postimg.org/5h0r4ftkn/ellipses_dial.png');
  background-repeat: no-repeat;
  background-position: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  opacity: 0.15;
}

.ellipses__outer--thick {
  width: 99.5%;
  height: 99.5%;
  border-color: var(--tiber) transparent;
  border-width: 2px;
  transform: rotate(-45deg);
  animation: ellipsesRotate 15s ease-in-out infinite;
}


.ellipses__orbit {
  width: 2.5rem;
  height: 2.5rem;
  border-width: 2px;
  border-color: var(--tiber);
  top: 5rem;
  right: 6.75rem;
}

.ellipses__orbit:before {
  content: '';
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  display: inline-block;
  background-color: var(--tiber);
  margin: 0 auto;
  left: 0;
  right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

#glow {
      color: rgb(115, 115, 187); 
      border-radius: 50%;
      transition: box-shadow 0.3s ease-in-out;
}

.glow:hover {
      box-shadow: 0 0 10px 5px darkblue; 
    }
.scroller {
  width: 7.5rem;
  display: inline-block;
  float: right;
  position: relative;
  top: -15%;
  transform: translateY(50%);
  overflow: hidden;
}

.timeline {
  width: 1.5rem;
  height: 9rem;
  display: inline-block;
  float: right;
}

.timeline__unit {
  width: 100%;
  height: 0.1rem;
  display: block;
  background-color: var(--elephant);
  margin: 0 0 2rem;
  opacity: 0.2;
}

.timeline__unit--active {
  opacity: 1;
}

.timeline__unit--active:after {
  opacity: 0.2;
}

.timeline__unit:after {
  content: '';
  width: 70%;
  height: 0.1rem;
  display: block;
  position: relative;
  float: right;
  background-color: var(--elephant);
  top: 1rem;
}

@keyframes ellipsesRotate {
  0% {
    transform: rotate(-45deg);
  }

  100% {
    transform: rotate(-405deg);
  }
}

@keyframes ellipsesOrbit {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* the background img */
template{
	background-color: #000000;
  padding: 0px;
  margin: 0px;
  color: black;
 }

#gradient
{
  width: 100%;
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
  box-shadow: inset 0 0 200px hsla(0,0%,0%,.4);

}

h1 {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  font-family: 'Croissant One', sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: 2.5em;
  line-height: 1.25em;
  color: #2d2d2d;
}
h1 span {
  display: inline-block;
  border-top: 1px solid #2d2d2d;
  border-bottom: 1px solid #2d2d2d;
  padding: .5em .6em;
}



/* the media query for  the responsives */

</style>
