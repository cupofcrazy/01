import Vue from 'vue'
import Vuex from 'vuex'
import sanityClient, { query } from '@/sanity'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    SET_PROJECTS(state, payload) {
      state.projects = payload
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      const projects = await sanityClient.fetch(query)
      console.log({ projects })
      commit('SET_PROJECTS', projects)
    }
  },
  modules: {
  }
})
