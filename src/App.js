import './App.css';
import EduExperience from './Components/EduExperience/EduExperience';
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';
import WorkExperience from './Components/WorkExperience/WorkExperience';

function App() {
  return (
    <div className="App">
      <GeneralInfo />
      <EduExperience />
      <WorkExperience />
    </div>
  );
}

export default App;
