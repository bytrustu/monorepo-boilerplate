import { StateCreator } from 'zustand';

type Restaurant = {
  name: string;
}

type State = {
  restaurant: Restaurant | null;
};

type Action = {
  setRestaurant: (user: Restaurant) => void;
  initRestaurant: () => void;
};

export type RestaurantSlice = State & Action;

const createRestaurantSlice: StateCreator<RestaurantSlice> = (set) => ({
  restaurant: null,
  setRestaurant: (restaurant: Restaurant) => set({ restaurant }),
  initRestaurant: () => set({ restaurant: null }),
});

export default createRestaurantSlice;
