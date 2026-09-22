import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

function TicketDetails({ ticket, onClose, onStatusChange }) {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30">
      <div className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto bg-white shadow-xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div>
            <p className="text-sm text-gray-500">
              Ticket #{ticket.id}
            </p>
            <h2 className="mt-1 text-xl font-bold text-gray-900">
              Ticket Details
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-xl text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6">

          {/* Customer */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Customer Information
            </h3>

            <div className="mt-3 rounded-lg border border-gray-200 p-4">
              <p className="font-semibold text-gray-900">
                {ticket.customer.name}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                {ticket.customer.email}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                {ticket.customer.phone}
              </p>
            </div>
          </section>

          {/* Issue */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Issue Details
            </h3>

            <div className="mt-3 rounded-lg border border-gray-200 p-4">
              <h4 className="font-semibold text-gray-900">
                {ticket.subject}
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {ticket.description}
              </p>
            </div>
          </section>

          {/* Status & Priority */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Ticket Status
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <StatusBadge status={ticket.status} />
              <PriorityBadge priority={ticket.priority} />

              <select
                value={ticket.status}
                onChange={(e) =>
                  onStatusChange(ticket.id, e.target.value)
                }
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </section>

          {/* Date */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Created
            </h3>

            <p className="mt-2 text-sm text-gray-700">
              {new Date(ticket.createdAt).toLocaleString()}
            </p>
          </section>

          {/* Conversation */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Previous Conversation
            </h3>

            <div className="mt-3 space-y-3">
              {ticket.messages.map((message, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">
                      {message.sender}
                    </p>

                    <p className="text-xs text-gray-500">
                      {new Date(message.timestamp).toLocaleString()}
                    </p>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default TicketDetails;