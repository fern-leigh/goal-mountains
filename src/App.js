import './App.css';
import GoalMountains from './containers/GoalMountains'

function App() {
const mountainData = require('./data/mountains.json');
const trophyData = require('./data/trophies.json');

  return (
    <GoalMountains mountainData={mountainData} trophyData={trophyData}/>
  );
}

export default App;
