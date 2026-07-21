import AbsenceItem from "../AbsenceItem/AbsenceItem";
import "./AbsenceList.css";

function AbsenceList({ absences }) {
  return (
    <ul className="absence-list">
      {absences.map((absence) => (
        <li className="absence-list-item" key={absence.id}>
          <AbsenceItem
            employeeName={absence.employeeName}
            employeeSurname={absence.employeeSurname}
            type={absence.type}
            startDate={absence.startDate}
            endDate={absence.endDate}
            status={absence.status}
          />
        </li>
      ))}
    </ul>
  );
}

export default AbsenceList;
