import { useState } from "react";
import "./AbsenceForm.css";

function AbsenceForm({ onAddAbsence }) {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeSurname: "",
    type: "",
    startDate: "",
    endDate: "",
    status: "pending",
  });

  function handleFieldChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddAbsence(formData);

    setFormData({
      employeeName: "",
      employeeSurname: "",
      type: "",
      startDate: "",
      endDate: "",
      status: "pending",
    });
  }

  return (
    <section className="absence-form-section">
      <h2 className="absence-form-title">Add absence</h2>

      <form className="absence-form" onSubmit={handleSubmit}>
        <label className="absence-form-field">
          Employee name
          <input
            type="text"
            name="employeeName"
            onChange={handleFieldChange}
            value={formData.employeeName}
          />
        </label>

        <label className="absence-form-field">
          Employee Surname
          <input
            type="text"
            name="employeeSurname"
            onChange={handleFieldChange}
            value={formData.employeeSurname}
          />
        </label>

        <label className="absence-form-field">
          Absence type
          <select
            name="type"
            onChange={handleFieldChange}
            value={formData.type}
          >
            <option value="">Select absence type</option>
            <option value="vacation">Vacation</option>
            <option value="sick-leave">Sick leave</option>
            <option value="remote-work">Remote work</option>
          </select>
        </label>

        <label className="absence-form-field">
          Start date
          <input
            type="date"
            name="startDate"
            onChange={handleFieldChange}
            value={formData.startDate}
          />
        </label>

        <label className="absence-form-field">
          End date
          <input
            type="date"
            name="endDate"
            onChange={handleFieldChange}
            value={formData.endDate}
          />
        </label>

        <button className="absence-form-button" type="submit">
          Add absence
        </button>
      </form>
    </section>
  );
}

export default AbsenceForm;
