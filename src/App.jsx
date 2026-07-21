import AbsenceForm from "./Components/AbsenceForm/AbsenceForm";
import AbsenceList from "./Components/AbsenceList/AbsenceList";
import Header from "./Components/Header/Header";
import StatusFilter from "./Components/StatusFilter/StatusFilter";

import data from "./data/absences.json";

function App() {
  return (
    <div className="app">
      <Header text="Team Absence Tracker" />
      <AbsenceForm />
      <StatusFilter />
      <AbsenceList absences={data} />
    </div>
  );
}

export default App;
