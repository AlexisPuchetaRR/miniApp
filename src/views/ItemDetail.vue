<template>
  <div>
    <SearchBar />
    <div class="flex flex-col">
      <div class="flex flex-row">
        <div v-if="!loading_img & !loading_desc">
          <div v-if="item.thumbnail">
            <img :src="item.thumbnail" width="420"/>
          </div>
          <p v-if="item.title">{{ item.title }}</p>
          <p v-else>Loading....</p>
        </div>
        <div>
          <h1 v-if="item.desc.plain_text">{{ item.desc.plain_text }}</h1>
          <p v-else>Loading....</p>
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
    ...mapActions(["getItemActions", "getItemDescriptionActions"]),
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
  },
  computed: mapState({
    item: (state) => state.item,
  }),
};
</script>
