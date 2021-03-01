import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import {
  ADD_ITEM_CART,
  DELETE_ITEM_CART,
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
  buy: {id:'', title:'', price:'', thumbnail:'', total: 0},
  buys: [],
  total:0,
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
    let sum = item.base_price + state.total;
    state.total = sum;
    state.buys.push(state.buy);
  },
  [DELETE_ITEM_CART](state, id) {
    let index = state.buys.findIndex(buy => buy.id == id)
    state.buys.splice(index, 1);
    state.total = state.total - state.buys[index].price;
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
  async addItemCartActions({ commit }, payload) {
    commit(ADD_ITEM_CART, payload);
  },
  async deleteItemCartActions({ commit }, payload) {
    commit(DELETE_ITEM_CART, payload);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
