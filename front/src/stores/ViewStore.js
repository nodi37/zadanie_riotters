import { defineStore } from "pinia";

export const useViewStore = defineStore("viewStore", {
  state: () => ({
    sidebarVisible: false,
  }),
  actions: {
    changeSidebarState() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    openSidebar() {
      this.sidebarVisible = true;
    },
    closeSidebar() {
      this.sidebarVisible = false;
    },
  },
});
