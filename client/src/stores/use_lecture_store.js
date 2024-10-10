import { create } from "zustand";
import { persist } from "zustand/middleware";

export const use_lecture_store = create(
    persist(
        (set) => ({
            lecture_data: null,
            lecture_id: null,
            set_lecture_id: (res_data) => {set({lecture_id:res_data})},
            set_lecture_data: (res_data) => {set({lecture_data:res_data})},
            })
    )
);