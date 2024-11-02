export const useTempStore = defineStore('temp', {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
