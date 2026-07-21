import "./AbsenceForm.css";

function AbsenceForm() {
  return (
    <section className="absence-form-section">
      <h2 className="absence-form-title">Add absence</h2>

      <form className="absence-form">
        <label className="absence-form-field">
          Employee name
          <input type="text" />
        </label>

        <label className="absence-form-field">
          Employee Surname
          <input type="text" />
        </label>

        <label className="absence-form-field">
          Absence type
          <select>
            <option value="">Select absence type</option>
            <option value="vacation">Vacation</option>
            <option value="sick-leave">Sick leave</option>
            <option value="remote-work">Remote work</option>
          </select>
        </label>

        <label className="absence-form-field">
          Start date
          <input type="date" />
        </label>

        <label className="absence-form-field">
          End date
          <input type="date" />
        </label>

        <label className="absence-form-field">
          Status
          <select>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>

        <button className="absence-form-button" type="submit">
          Add absence
        </button>
      </form>
    </section>
  );
}

export default AbsenceForm;
