export const useFactsStore = defineStore("facts", {
  state: () => ({
    list: [""],
    current: "",
  }),
  getters: {
    getList: (state) => state.list,
    getCurrent: (state) => state.current,
  },
  actions: {
    setCurrent(state: string) {
      this.current = state;
    },
    setRandomCurrentFromList() {
      // TODO: maybe check if the new current is actually new
      this.current = this.list[generateRandomNumber()];
    },
    setList(state: string[]) {
      this.list = state;
    },
  },
});
