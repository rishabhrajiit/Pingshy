import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useAppStore = create(
  devtools(
    persist(
      (set, get) => ({
        // ---------- Global States ----------
        user: null,
        theme: 'light',
        notifications: [],

        // ---------- Actions ----------
        setUser: (userData) => set({ user: userData }),

        logout: () => set({ user: null }),

        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),

        addNotification: (msg) =>
          set((state) => ({
            notifications: [...state.notifications, msg],
          })),

        clearNotifications: () => set({ notifications: [] }),
      }),
      {
        name: 'app-storage', // key in localStorage
      }
    )
  )
);

export default useAppStore;
