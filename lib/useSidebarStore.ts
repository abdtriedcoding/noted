import { create } from "zustand";

interface SidebarState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
