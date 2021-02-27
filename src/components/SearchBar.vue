<template>
  <div class="bg-primary flex flex-row justify-around items-center">
    <div>
      <a href="/">
        <img
          src="../assets/logo.png"
          width="96px"
          height="32px"
          alt="Mercado libre logo"
          class="py-2"
      /></a>
    </div>
    <div class="bg-white px-1 h-12 relative">
      <input
        type="text"
        placeholder=" Nunca dejes de buscar"
        size="120"
        name="search"
        v-model="search"
        v-on:keyup.enter="save()"
        class="py-3"
      />
      <div class="h-6 float-right p-2">
        <button @click="save()">
          <img src="../assets/lupa.png" width="30px"/>
        </button>
      </div>
    </div>
    <ModalCart />
  </div>
</template>

<script>
import { mapActions} from "vuex";
import ModalCart from './ModalCart.vue';
export default {
  name: "SearchBar",
  components: {
    ModalCart,
    },
  data() {
    return {
      search: "",
    };
  },
  created() {},
  methods: {
    ...mapActions(["getDataActions"]),
    async save() {
      await this.getDataActions(this.search);
      this.$router.push("/").catch(() => {});
      return this.$store.state.data;
    },
  },
};
</script>
