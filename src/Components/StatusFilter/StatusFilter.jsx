import "./StatusFilter.css";

const options = ["All", "Pending", "Approved", "Rejected"];

function StatusFilter({ active = "All" }) {
  return (
    <div className="status-filter" role="tablist" aria-label="Status filter">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={active === option ? "active" : ""}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default StatusFilter;
