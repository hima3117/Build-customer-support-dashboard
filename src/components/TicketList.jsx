import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

function TicketList({ tickets, onSelectTicket, onStatusChange }) {
  if (tickets.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          No tickets found
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="hidden grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 md:grid">
        <div className="col-span-3">Customer</div>
        <div className="col-span-3">Issue</div>
        <div className="col-span-2">Priority</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Created</div>
      </div>

      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          onClick={() => onSelectTicket(ticket)}
          className="cursor-pointer border-b border-gray-100 px-5 py-4 transition hover:bg-gray-50 last:border-b-0"
        >
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:items-center md:gap-4">
            <div className="md:col-span-3">
              <p className="font-medium text-gray-900">
                {ticket.customer.name}
              </p>

              <p className="text-sm text-gray-500">
                {ticket.customer.email}
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="font-medium text-gray-900">{ticket.subject}</p>

              <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                {ticket.description}
              </p>
            </div>

            <div className="md:col-span-2">
              <PriorityBadge priority={ticket.priority} />
            </div>

            <div
              className="md:col-span-2"
              onClick={(e) => e.stopPropagation()}
            >
              <select
                value={ticket.status}
                onChange={(e) =>
                  onStatusChange(ticket.id, e.target.value)
                }
                className="rounded-lg border border-gray-300 px-2 py-1.5 text-sm"
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            <div className="text-sm text-gray-500 md:col-span-2">
              {new Date(ticket.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div className="mt-3 md:hidden">
            <StatusBadge status={ticket.status} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TicketList;