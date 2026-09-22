function StatsCards({ tickets }) {
  const stats = [
    {
      label: "Total Tickets",
      value: tickets.length,
    },
    {
      label: "Open",
      value: tickets.filter((ticket) => ticket.status === "Open").length,
    },
    {
      label: "In Progress",
      value: tickets.filter((ticket) => ticket.status === "In Progress").length,
    },
    {
      label: "Resolved",
      value: tickets.filter((ticket) => ticket.status === "Resolved").length,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium text-gray-500">{stat.label}</p>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;