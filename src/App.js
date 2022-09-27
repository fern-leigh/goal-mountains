import './App.css';
import GoalMountains from './containers/GoalMountains'

function App() {
const data = require('./data/mountains.json');

  return (
    <GoalMountains data={data} />
  );
}

export default App;
