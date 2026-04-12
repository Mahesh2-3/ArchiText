import { create } from "zustand";

export const useAppStore = create((set, get) => ({
  user: null,
  theme: "light",
  session: {
    isAuthenticated: false,
    token: null,
    expiresAt: null,
  },

  //actions
  setUser: (user) => set({ user }),
  setTheme: (theme) => set({ theme }),
  setSession: (session) => set({ session }),
  clearSession: () =>
    set({ session: { isAuthenticated: false, token: null, expiresAt: null } }),

  //getters
  getUser: () => get().user,
  getTheme: () => get().theme,
  getSession: () => get().session,
  isAuthenticated: () => get().session.isAuthenticated,
  getToken: () => get().session.token,
  getExpiresAt: () => get().session.expiresAt,
}));
