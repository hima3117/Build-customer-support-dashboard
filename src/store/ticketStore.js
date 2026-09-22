import { create } from "zustand";
import { fetchTickets } from "../services/ticketApi";

const useTicketStore = create((set) => ({
  tickets: [],
  loading: false,
  error: null,
  selectedTicket: null,

  fetchAllTickets: async () => {
    set({ loading: true, error: null });

    try {
      const data = await fetchTickets();

      set({
        tickets: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: "Failed to load tickets.",
        loading: false,
      });
    }
  },

  updateTicketStatus: (ticketId, newStatus) => {
    set((state) => ({
      tickets: state.tickets.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, status: newStatus }
          : ticket
      ),
    }));
  },

  setSelectedTicket: (ticket) => {
    set({ selectedTicket: ticket });
  },

  clearSelectedTicket: () => {
    set({ selectedTicket: null });
  },
}));

export default useTicketStore;