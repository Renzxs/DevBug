import { create } from 'zustand';

type UserStore = {
    username: string;
    email:string;
    password:string;   
}

type UserStoreActions = {
    setUsername: (value: string) => void;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
}

const useUserStore = create<UserStore & UserStoreActions>((set) => ({
    username: '',
    email: '',
    password: '',

    setUsername: (value: string) => set((state) => ({ username: value })),
    setEmail: (value: string) => set((state) => ({ email: value })),
    setPassword: (value: string) => set((state) => ({ password: value })),
}));

export default useUserStore;