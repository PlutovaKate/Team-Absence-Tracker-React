import AbsenceItem from "../AbsenceItem/AbsenceItem";
import "./AbsenceList.css";

function AbsenceList() {
  return (
    <ul className="absence-list">
      <li className="absence-list-item">
        <AbsenceItem />
      </li>
    </ul>
  );
}

export default AbsenceList;
