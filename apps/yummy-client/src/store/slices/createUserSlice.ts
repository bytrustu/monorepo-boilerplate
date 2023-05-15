import { StateCreator } from 'zustand';

type User = {
  name: string;
  email: string;
}

type State = {
  user: User | null;
};

type Action = {
  setUser: (user: User) => void;
  initUser: () => void;
};

export type UserSlice = State & Action;

const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  initUser: () => set({ user: null }),
});

export default createUserSlice;
