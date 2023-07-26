// colorStore.js
import {create} from 'zustand';

const useColorStore = create((set) => ({
  activeBodyColor: {
    hex: '#338895', // Set the default body color hex code here
  },
  activeRimColor: {
    hex: '#000', // Set the default rim color hex code here
  },
  activeRoofColor: {
    hex: '#fff', // Set the default roof color hex code here
  },
  setActiveBodyColor: (color) => set({ activeBodyColor: color }),
  setActiveRimColor: (color) => set({ activeRimColor: color }),
  setActiveRoofColor: (color) => set({ activeRoofColor: color }),
}));

export { useColorStore };

