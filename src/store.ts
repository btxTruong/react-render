import { PageTypes } from '@:constants.ts';
import { create } from 'zustand';

interface AppStore {
  currentPage: PageTypes;
  actions: {
    setCurrentPage: (page: PageTypes) => void;
  };
}


const useAppStore = create<AppStore>((set) => (
  {
    currentPage: PageTypes.MainPage,
    actions: {
      setCurrentPage: (page: PageTypes) => set({ currentPage: page })
    }
  }
));

export const useAppStoreActions = () => useAppStore((state) => state.actions);
export const useAppStoreCurrentPage = () => useAppStore((state) => state.currentPage);
