<template>
  <div class="card py-5 pr-12 flex flex-row">
    <div class="px-6">
      <router-link :to="{ name: 'item-detail', params: { id: id } }">
        <img :src="img" width="160" height="160" />
      </router-link>
    </div>
    <div class="flex flex-col w-2/4">
      <div class="w-full">
        <router-link :to="{ name: 'item-detail', params: { id: id } }">
          <h2>
            {{ title }}
          </h2>
        </router-link>
      </div>
      <div class="flex flex-row h-full">
        <div class="w-2/4">
          <p>{{ formatUSD }}</p>
          <p
            v-if="free_shipping & today"
            class="bg-green-600 text-white w-32 px-1 text-center"
          >
            Llega gratis hoy
          </p>
          <p v-if="free_shipping & !today" class="text-green-500">
            Envio gratis
          </p>
        </div>
        <div class="w-2/4 text-right">
          <p>ESTRELLAS</p>
          <p>{{ city }}</p>
        </div>
      </div>
    </div>
    <div class="w-2/4 text-right">
      <p>CORAZON!</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBar",
  props: {
    img: {
      type: String,
      default: () => {},
    },
    title: {
      type: String,
      default: () => {},
    },
    price: {
      type: Number,
      default: () => {},
    },
    free_shipping: {
      type: Boolean,
      default: () => {},
    },
    today: {
      type: Boolean,
      default: () => {},
    },
    city: {
      type: String,
      default: () => {},
    },
    id: {
      type: String,
      default: () => {},
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["getDataActions"]),
    async save() {
      console.log(this.search);
      this.getDataActions(this.search);
      return this.$store.state.data;
    },
  },
  computed: {
    formatUSD() {
      return "$" + Number(this.price).toLocaleString();
    },
  },
};
</script>
