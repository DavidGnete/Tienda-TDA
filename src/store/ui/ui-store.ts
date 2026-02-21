import { create } from 'zustand'

interface State {
    IsSiMenuOpen: boolean;
    openSideMenu: () => void;

    CloseMenu: () => void;
}

export const useBearStore = create<State>()((set) => ({
    IsSiMenuOpen: false,

    openSideMenu: () => set({IsSiMenuOpen: true}),
    CloseMenu: () => set({IsSiMenuOpen: false}),

}));
