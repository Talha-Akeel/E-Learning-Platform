import { create } from 'zustand';
import { persist } from "zustand/middleware";

// export const use_user_store = create((set) => ({
//     user: null,
//     is_authenticated: false,
//     set_is_authenticated: (res_data) => {set({is_authenticated:res_data})},
// }))

export const use_user_store = create(
    persist(
        (set) => ({
            user: null,
            is_authenticated: false,
            set_is_authenticated: (res_data) => { set({ is_authenticated: res_data }) },
        }),
        {
            name: "user api",
            getStorage:()=> localStorage,
        }
    )
);