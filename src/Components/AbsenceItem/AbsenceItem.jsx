import "./AbsenceItem.css";

function AbsenceItem({
  employeeName,
  employeeSurname,
  type,
  startDate,
  endDate,
  status,
  id,
  handleChangeStatus,
}) {
  return (
    <article className="absence-item-card">
      <div className="absence-item-header">
        <div>
          <h3>
            {employeeName} {employeeSurname}
          </h3>

          <p className="absence-item-type">{type}</p>
        </div>
        <span className={`absence-item-status ${status}`}>{status}</span>
      </div>

      <div className="absence-item-dates">
        <div className="absence-item-date">
          <span>Start date</span>
          <p>{startDate}</p>
        </div>
        <div className="absence-item-date">
          <span>End date</span>
          <p>{endDate}</p>
        </div>
      </div>

      {status === "pending" && (
        <div className="absence-item-actions">
          <button
            type="button"
            className="absence-item-btn approve"
            onClick={() => handleChangeStatus(id, "approved")}
          >
            Approve
          </button>
          <button
            type="button"
            className="absence-item-btn reject"
            onClick={() => handleChangeStatus(id, "rejected")}
          >
            Reject
          </button>
        </div>
      )}
    </article>
  );
}

export default AbsenceItem;
