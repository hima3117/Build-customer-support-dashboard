import { tickets } from "../data/tickets";

export const fetchTickets = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tickets);
    }, 800);
  });
};