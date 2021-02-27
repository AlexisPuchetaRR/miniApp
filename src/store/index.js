import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import {
  ADD_ITEM_CART,
  GET_DATA,
  GET_ITEM,
  GET_ITEM_DESCRIPTION,
} from "./mutation-types";

Vue.use(Vuex);

const state = () => ({
  data: [],
  item: {
    desc: {},
  },
  buy: {id:'', title:'', price:'', thumbnail:''},
  buys: [],
});

const mutations = {
  [GET_DATA](state, data) {
    state.data = data;
  },
  [GET_ITEM](state, item) {
    state.item = item;
  },
  [GET_ITEM_DESCRIPTION](state, description) {
    state.item.desc = description;
  },
  [ADD_ITEM_CART](state, item) {
    Vue.set(state.buy, "id", item.id);
    Vue.set(state.buy, "title", item.title);
    Vue.set(state.buy, "price", item.base_price);
    Vue.set(state.buy, "thumbnail", item.thumbnail);
    state.buys.push(state.buy);
  },
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
  async addItemCartActions({ commit }, payload) {
    commit(ADD_ITEM_CART, payload);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
