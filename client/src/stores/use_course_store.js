import { create } from "zustand";
import { persist } from "zustand/middleware";

export const use_course_store = create(
    persist(
        (set) => ({
            course_data: null,
            course_id:null,
            set_course_data: (res_data) => {
                console.log(res_data);
                
                set({course_data:res_data})},
            
        })
    )
);