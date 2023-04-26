import create from "zustand";

interface LinkState {
    router: any;
    dom: any;
}

const useStore = create<LinkState>((set, get) => ({
    router: null,
    dom: null,
}));

export default useStore;
