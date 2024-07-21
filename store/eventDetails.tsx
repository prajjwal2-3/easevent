import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type EventDetails = {
  title: string;
  description: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree?: boolean;
  url: string;
  category:string,
  categoryId: number;
  authorId: number;
  venue: string;
};

type EventDetailsState = {
  eventDetails: EventDetails;
  setEventDetails: (details: Partial<EventDetails>) => void;
};

const useEventDetailsStore = create<EventDetailsState>()(
  persist(
    (set) => ({
      eventDetails: {
        title: '',
        description: '',
        imageUrl: '',
        startDateTime: new Date(),
        endDateTime: new Date(),
        price: undefined,
        isFree: undefined,
        url: '',
        category:'',
        categoryId: 0,
        authorId: 0,
        venue: ''
      },
      setEventDetails: (details: Partial<EventDetails>) =>
        set((state) => ({
          eventDetails: { ...state.eventDetails, ...details }
        }))
    }),
    {
      name: 'event-details-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useEventDetailsStore;
