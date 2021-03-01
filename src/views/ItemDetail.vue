<template>
  <div>
    <SearchBar />
    <div class="bg-gray-200 w-full h-full min-h-screen">
      <div class="px-12 py-8 bg-gray-200">
        <div class="flex flex-col bg-white pt-5">
          <div class="flex flex-row justify-between">
            <div v-if="!loading_img & !loading_desc">
              <div v-if="item.thumbnail">
                <img :src="item.thumbnail" width="360" />
              </div>
            </div>
            <div class="flex flex-col w-2/4 pr-36">
              <h2 class="text-xs" v-if="item.condition === 'new'">Nuevo - {{item.sold_quantity}} vendidos</h2>
              <h2 class="text-lg" v-if="item.title">{{ item.title }}</h2>
              <h2 v-else>Loading....</h2>
              <h3 class="text-3xl pb-10">{{ formatUSD() }}</h3>
              <button @click="buy(item)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Comprar
              </button>
            </div>
          </div>
          <div class="w-3/4 px-10 py-6">
            <h2 class="font-bold">Descripcion del producto</h2>
            <h4 class="text-base opacity-50" v-if="item.desc.plain_text">{{ item.desc.plain_text }}</h4>
            <p v-else>Loading....</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "ItemDetail",
  data() {
    return {
      id: "",
      loading_img: true,
      loading_desc: true,
    };
  },
  components: {
    SearchBar,
  },
  async created() {
    await this.getItemById(this.$route.params.id);
    await this.getItemDescriptionById(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getItemActions", "getItemDescriptionActions","addItemCartActions"]),
    async getItemById(id) {
      await this.getItemActions(id);
      this.loading_img = false;
      return;
    },
    async getItemDescriptionById(id) {
      await this.getItemDescriptionActions(id);
      this.loading_desc = false;
      return;
    },
    formatUSD() {
      return "$" + Number(this.item.base_price).toLocaleString();
    },
    buy(item) {
      this.addItemCartActions(item)
      let message = item.title + "\nAdded to cart";
      return alert(message);
    }
  },
  computed: mapState({
    item: (state) => state.item,
  }),
};
</script>
