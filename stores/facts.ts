export const useFactsStore = defineStore("facts", {
  state: () => ({
    current: "",
  }),
  getters: {
    getCurrent: (state) => state.current,
  },
  actions: {
    setCurrent(state: string) {
      this.current = state;
    },
  },
});
