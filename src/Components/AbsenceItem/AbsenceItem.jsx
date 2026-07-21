import "./AbsenceItem.css";

function AbsenceItem({
  employeeName,
  employeeSurname,
  type,
  startDate,
  endDate,
  status,
}) {
  const normalizedStatus = status.toLowerCase();
  const isPending = normalizedStatus === "pending";

  return (
    <article className="absence-item-card">
      <div className="absence-item-header">
        <div>
          <h3>
            {employeeName} {employeeSurname}
          </h3>

          <p className="absence-item-type">{type}</p>
        </div>
        <span className={`absence-item-status ${normalizedStatus}`}>
          {status}
        </span>
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

      {isPending && (
        <div className="absence-item-actions">
          <button type="button" className="absence-item-btn approve">
            Approve
          </button>
          <button type="button" className="absence-item-btn reject">
            Reject
          </button>
        </div>
      )}
    </article>
  );
}

export default AbsenceItem;
