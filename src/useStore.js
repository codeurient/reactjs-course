import { create } from 'zustand';

const useStore = create((set) => ({
  // count adlı state yaradırıq, inc() və dec() funksiyaları isə count dəyərini artırıb-azaldır.
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),

  decrement: () => set((state) => ({ count: state.count - 1 })),

}));

export default useStore;