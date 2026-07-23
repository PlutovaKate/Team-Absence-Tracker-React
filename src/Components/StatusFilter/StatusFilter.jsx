import "./StatusFilter.css";

const options = ["all", "pending", "approved", "rejected"];

function StatusFilter({ active, handleFilterChange }) {
  return (
    <div className="status-filter" role="tablist" aria-label="Status filter">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={active === option ? "active" : ""}
          onClick={() => handleFilterChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default StatusFilter;
