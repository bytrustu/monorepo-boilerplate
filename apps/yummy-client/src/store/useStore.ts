import { create } from 'zustand';

import createUserSlice, { UserSlice } from '@/store/slices/createUserSlice';
import createRestaurantSlice, { RestaurantSlice } from '@/store/slices/createRestaurantSlice';

type Store = UserSlice & RestaurantSlice;

const useStore = create<Store>((set, get, api) => ({
  ...createUserSlice(set, get, api),
  ...createRestaurantSlice(set, get, api),
}));

export default useStore;
