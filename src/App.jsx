import AbsenceForm from "./Components/AbsenceForm/AbsenceForm";
import AbsenceList from "./Components/AbsenceList/AbsenceList";
import Header from "./Components/Header/Header";
import StatusFilter from "./Components/StatusFilter/StatusFilter";

function App() {
  return (
    <div>
      <Header />
      <AbsenceForm />
      <StatusFilter />
      <AbsenceList />
    </div>
  );
}

export default App;
