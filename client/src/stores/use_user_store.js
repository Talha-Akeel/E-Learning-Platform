import { create } from 'zustand';

export const use_user_store = create((set) => ({
    user: null,
    token: null,
    set_token: (token) => set(() => ({ token: token }))
}))