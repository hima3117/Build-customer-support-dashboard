function PriorityBadge({ priority }) {
  const styles = {
    Low: "bg-gray-100 text-gray-700",
    Medium: "bg-orange-50 text-orange-700",
    High: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        styles[priority] || "bg-gray-100 text-gray-700"
      }`}
    >
      {priority}
    </span>
  );
}

export default PriorityBadge;