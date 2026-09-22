function StatusBadge({ status }) {
  const styles = {
    Open: "bg-blue-50 text-blue-700",
    "In Progress": "bg-yellow-50 text-yellow-700",
    Resolved: "bg-green-50 text-green-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;