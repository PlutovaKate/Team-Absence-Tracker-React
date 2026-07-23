import AbsenceForm from "./Components/AbsenceForm/AbsenceForm";
import AbsenceList from "./Components/AbsenceList/AbsenceList";
import Header from "./Components/Header/Header";
import StatusFilter from "./Components/StatusFilter/StatusFilter";

import data from "./data/absences.json";

import { useState } from "react";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [absenceData, setAbsenceData] = useState(data);

  function changeStatusPending(id, newStatus) {
    const employeeWithNewStatus = absenceData.map((absentEmployee) => {
      if (absentEmployee.id === id) {
        return { ...absentEmployee, status: newStatus };
      } else {
        return absentEmployee;
      }
    });

    setAbsenceData(employeeWithNewStatus);
  }

  const filteredAbsences =
    activeFilter === "all"
      ? absenceData
      : absenceData.filter((absence) => absence.status === activeFilter);

  function addAbsenceFromForm(newAbsenceFromForm) {
    const newAbsenceWithId = { ...newAbsenceFromForm, id: Date.now() };
    setAbsenceData([...absenceData, newAbsenceWithId]);
  }

  return (
    <div className="app">
      <Header text="Team Absence Tracker" />
      <AbsenceForm onAddAbsence={addAbsenceFromForm} />
      <StatusFilter
        active={activeFilter}
        handleFilterChange={setActiveFilter}
      />
      <AbsenceList
        absences={filteredAbsences}
        handleChangeStatus={changeStatusPending}
      />
    </div>
  );
}

export default App;
