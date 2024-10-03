import { create } from "zustand";
import { persist } from "zustand/middleware";

export const use_course_store = create(
    persist(
        (set) => ({
            data: null,
            set_token: (token) => set(() => ({ token: token })),
            course_id:null,
            set_data: (res_data) => {
                console.log(res_data);
                
                set({data:res_data})},
            
        }),
        {
            name:"Course api data storage",
            getStorage: () => localStorage
        }
    )
);