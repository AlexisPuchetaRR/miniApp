<template>
  <div>
    <button @click="openModal()">
      <div
        class="font-sans block mt-4 lg:idivne-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700"
      >
        <div class="relative flex">
          <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
            <path
              d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
            />
          </svg>
          <div v-if="qty() > 0">
            <span
              class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center"
              >{{ qty() }}
            </span>
          </div>
        </div>
      </div>
    </button>
    <div v-if="open" class="fixed right-56">
      <div class="p-5" v-if="buys[0]">
        <div class="relative">
          <div class="absolute w-screen  rounded-b border-t-0 z-10">
            <div class="shadow-xl w-64">
              <div
                class="p-2 flex bg-white w-full hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              >
                <div class="p-2 w-96 flex flex-col">
                  <div v-for="item in buys" :key="item.id">
                    <div class="w-full flex flex-row">
                      <div class="px-2 py-5 border-black border-2">
                        <img :src=item.thumbnail height="160px"/>
                      </div>
                      <p class="font-bold  px-2">
                        {{ item.title }}
                      </p>
                      <div class="justify-between py-5">
                        <button @click="deleteItem(item.id)">
                          <div
                            class="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-trash-2 "
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                              ></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <p class="text-right">{{ formatUSD(item.price) }}</p>
                  </div>
                  <hr class="py-1" />
                  <div>
                    <div
                      class="text-center undefined  hover:scale-110 focus:outline-none px-4 py-2 rounded font-bold cursor-pointer 
                        hover:bg-teal-700 hover:text-teal-100 
                        bg-teal-100 
                        text-teal-700 
                        border duration-200 ease-in-out 
                        border-teal-600 transition"
                    >
                      Total: {{ formatUSD(total) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ModalCart",
  data() {
    return {
      open: false,
      imagen: '',
    };
  },
  methods: {
    ...mapActions(["deleteItemCartActions"]),
    async deleteItem(id) {
      await this.deleteItemCartActions(id);
      let message = id + "\nDeleted to the cart";
      alert(message);
      return;
    },
    openModal() {
      this.open = !this.open;
      return;
    },
    formatUSD(param) {
      return "$" + Number(param).toLocaleString();
    },
    qty() {
      return this.buys.length;
    },
  },
  computed: mapState({
    buys: (state) => state.buys,
    total: (state) => state.total,
  }),
};
</script>
