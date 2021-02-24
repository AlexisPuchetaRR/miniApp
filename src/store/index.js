import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import { GET_DATA } from './mutation-types'


Vue.use(Vuex)

const state = () => ({
  data: [],
});

const mutations = {
  [GET_DATA](state, data) {
    state.data = data;
  }
};
const actions = {
  async getDataActions ({ commit }, payload) {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${payload}`);
    commit(GET_DATA, response.data.results);
  }      
};

export default new Vuex.Store({
state,
mutations,
actions,
});
