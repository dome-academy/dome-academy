import { create } from "zustand";
import { Persistor } from ".";
import { persist } from "zustand/middleware";

type WailistState = {
  showModal: boolean;
  email: string;
  setWaitlistStore: (toggle: boolean) => void;
};

export const useWaitlistStore = create<WailistState>((set) => ({
  showModal: false,
  email: "",
  setWaitlistStore: (toggle) => set({ showModal: toggle }),
}));
