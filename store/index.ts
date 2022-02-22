import { createSlots } from "nuxt3/dist/app/compat/capi";
import { defineStore } from "pinia";
import fetchUser from "~~/api/fetchUser";

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface StoreState {
  userData: UserData | null;
}

const initState: StoreState = {
  userData: null,
};

const useStore = defineStore("main", {
  state: () => initState,
  actions: {
    setUser(userData: UserData) {
      this.userData = userData;
    },
    resetUser() {
      this.userData = initState.userData;
    },
    async fetchAndSetUser() {
      const user = await fetchUser();
      this.userData = user;
    },
  },
  getters: {
    getUserName: (state): string | undefined => state.userData?.name,
  },
});

export default useStore;
