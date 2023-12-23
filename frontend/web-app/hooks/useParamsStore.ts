import { create } from "zustand";

type State = {
  searchTerm: string;
  orderBy: string;
  seller: string;
  winner: string;
  filterBy: string;
};

type Actions = {
  setParams: (_params: Partial<State>) => void;
  reset: () => void;
};

const initialState: State = {
  searchTerm: "",
  orderBy: "make",
  seller: "",
  winner: "",
  filterBy: "",
};

export const useParamsStore = create<State & Actions>()((set) => ({
  ...initialState,
  setParams: (params) => {
    set((state) => {
      return { ...state, ...params };
    });
  },
  reset: () => set(initialState),
}));
