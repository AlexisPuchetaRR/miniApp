import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { GET_DATA, GET_ITEM, GET_ITEM_DESCRIPTION } from "./mutation-types";

Vue.use(Vuex);

const state = () => ({
  data: [],
  item: {
    desc: {}
  },
});

const mutations = {
  [GET_DATA](state, data) {
    state.data = data;
  },
  [GET_ITEM](state, item) {
    state.item = item;
  },
  [GET_ITEM_DESCRIPTION](state, description) {
  state.item.desc = description
  }
};
const actions = {
  async getDataActions({ commit }, payload) {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${payload}`
    );
    commit(GET_DATA, response.data.results);
  },
  async getItemActions({ commit }, payload) {
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${payload}`
    );
    commit(GET_ITEM, response.data);
  },
  async getItemDescriptionActions({ commit }, payload) {
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${payload}/description`
    );
    commit(GET_ITEM_DESCRIPTION, response.data);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
