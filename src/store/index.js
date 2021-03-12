import Vue from 'vue'
import Vuex from 'vuex'
import sanityClient, { query } from '@/sanity'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
    isProjectMenuOpen: false
  },
  mutations: {
    SET_PROJECTS(state, payload) {
      state.projects = payload
    },
    SET_PROJECTS_MENU_OPEN(state, value) {
      state.isProjectMenuOpen = value
    }
  },
  actions: {
    async fetchProjects({ commit }) {
      const projects = await sanityClient.fetch(query)
      // console.log({ projects })
      commit('SET_PROJECTS', projects)
    },
    setProjectsMenuOpen({ commit }, value) {
      commit('SET_PROJECTS_MENU_OPEN', value)
    }
  },
  modules: {
  }
})
