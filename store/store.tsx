import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Event = {
  id: number;
};

type FavEvent = {
  events: Event[];
  addFavEvent: (id: number) => void;
  removeFavEvent: (id: number) => void;
  removeAllFavEvent: () => void;
};

const useFavEventStore = create<FavEvent>()(
  persist(
    (set) => ({
    events: [],
    addFavEvent: (id) => {
      set((state) => ({
        events: [
          ...state.events,
          {
            id: id,
          },
        ],
      }));
    },
    removeFavEvent: (id) => {
      set((state) => ({
        events: state.events.filter((event) => event.id !== id),
      }));
    },
    removeAllFavEvent: () => {
      set((state) => ({
        events: (state.events = []),
      }));
    },
  }),
  {
    name: "favevent-storage",
    storage: createJSONStorage(() => localStorage),
  }
)
);

export default useFavEventStore;