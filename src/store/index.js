import { createStore } from 'vuex'
const dataUrl = 'https://tlcgeyer.github.io/vue.portfolioData-tlg/data/'

export default createStore({
  state: { //allow us to access any variable
    education: null,
    skills: null ,
    projects: null ,
    testimonials: null,
  },
  getters: {
  },
  mutations: { //allow us to update the state
    setEducation(state, value){
      state.education = value
    },
    setSkills(state, value){
      state.skills = value
    },
    
    setProjects(state, value){
      state.projects = value
    },
    
    setTestimonials(state, value){
      state.testimonials = value
    },
    
  },
  actions: { //allows us to fetch de data

    async fetchEducation(context) {
      let res = await fetch(dataUrl)
      let {education} = await res.json()
      context.commit('setEducation', education)
    },
    async fetchSkills(context){ //need to make use of await each time u make use of async 
      let res = await fetch(dataUrl) //the destructing
      let {skills} = await res.json()    //targeting this specific data & grabbing the data from the json
      context.commit('setSkills', skills) //you change something and need to save it permanently
      
    },
    async fetchProjects(context) {
      let res = await fetch(dataUrl)
      let {projects} = await res.json()
      context.commit('setProjects',projects)
    },
    async fetchTestimonials(context) {
      let res = await fetch(dataUrl)
      let {testimonials} = await res.json()
      context.commit('setTestimonials',testimonials)
    }
  },
  modules: {
  }
})
