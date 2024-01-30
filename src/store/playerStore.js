import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: [] },
    setIsPlaying: (isPlaying) => set({ currentMusic }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));