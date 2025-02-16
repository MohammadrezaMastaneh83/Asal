import { create } from "zustand";

interface LayoutState {
  showHeaderFooter: boolean; // وضعیت نمایش Header و Footer
  showNavbar: boolean;       // وضعیت نمایش Navbar
  toggleHeaderFooter: () => void; // تابع تغییر وضعیت Header و Footer
  toggleNavbar: () => void;       // تابع تغییر وضعیت Navbar
}

const useLayoutStore = create<LayoutState>((set) => ({
  showHeaderFooter: true,
  showNavbar: true,
  toggleHeaderFooter: () =>
    set((state) => ({ showHeaderFooter: !state.showHeaderFooter })),
  toggleNavbar: () => set((state) => ({ showNavbar: !state.showNavbar })),
}));

export default useLayoutStore;
