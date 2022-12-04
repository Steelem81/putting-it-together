import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Bruce"} lastName={"Wayne"} age={63} hairColor={"Black"} />
      <PersonCard firstName={"Clark"} lastName={"Kent"} age={102} hairColor={"Black"} />
    </div>
  );
}

export default App;
