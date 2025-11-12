import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useAppStore = create(
  devtools(
    persist(
      (set, get) => ({
        // ---------- Global States ----------
        user: null,
        theme: 'light',
        userData: {},

        // ---------- Actions ----------
        setUser: (userData) => set({ user: userData }),

        logout: () => set({ user: null }),

        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),

        addData: (msg) =>
          set((state) => ({
            userData: {...state.userData, msg},
          })),

        clearData: () => set({ notifications: [] }),
      }),
      {
        name: 'pingshy-app-storage', // key in localStorage
      }
    )
  )
);

export default useAppStore;
