<template>
  <div>
    <SearchBar />
    <div class="bg-gray-200 w-full h-full min-h-screen">
      <div class="px-12 py-8 bg-gray-200">
        <div class="bg-white flex flex-col">
          <ul>
            <li v-for="value in list" :key="value.id">
              <Item
                :img="value.thumbnail"
                :title="value.title"
                :price="value.price"
                :free_shipping="value.shipping.free_shipping"
                :today="delivery(value)"
                :city="value.seller_address.state.name"
                :id="value.id"
              />
              <hr>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import Item from "@/components/Item.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    SearchBar,
    Item,
  },
  methods: {
    delivery(value) {
      return value.shipping.logistic_type == "cross_docking" ? true : false;
  }
  },
  computed: mapState({
    list: (state) => state.data,
  }),
};
</script>
