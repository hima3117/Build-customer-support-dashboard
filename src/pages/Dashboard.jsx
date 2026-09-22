import { useEffect, useMemo, useState } from "react";
import useTicketStore from "../store/ticketStore";

import StatsCards from "../components/StatsCards";
import TicketFilters from "../components/TicketFilters";
import TicketList from "../components/TicketList";
import TicketDetails from "../components/TicketDetails";

function Dashboard() {
  const {
    tickets,
    loading,
    error,
    selectedTicket,
    fetchAllTickets,
    setSelectedTicket,
    updateTicketStatus,
  } = useTicketStore();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // Fetch tickets
  useEffect(() => {
    fetchAllTickets();
  }, [fetchAllTickets]);

  // Search + Filters
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        ticket.customer.name.toLowerCase().includes(searchText) ||
        ticket.subject.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" ||
        ticket.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        ticket.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [tickets, search, statusFilter, priorityFilter]);

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-600">
          Loading tickets...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-red-600">
          {error}
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Customer Support Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            View and manage customer support tickets.
          </p>
        </div>

        {/* Statistics */}
        <StatsCards tickets={tickets} />

        {/* Filters */}
        <div className="mt-6">
          <TicketFilters
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
          />
        </div>

        {/* Ticket List */}
        <div className="mt-6">
          <TicketList
            tickets={filteredTickets}
            onSelectTicket={setSelectedTicket}
            onStatusChange={updateTicketStatus}
          />
        </div>

        {/* Ticket Details Side Panel */}
        <TicketDetails
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onStatusChange={updateTicketStatus}
        />

      </div>
    </main>
  );
}

export default Dashboard;