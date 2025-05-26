import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePractitionerStore = create(
  persist(
    (set) => ({
      practitioner: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        data: null,
      },
      setPractitioner: (newState) => set({ practitioner: newState }),
    }),
    {
      name: "practitioner-storage", // clave de LocalStorage
    }
  )
);
