import './App.css';
import GoalMountains from './containers/GoalMountains'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrophy, faMountain } from "@fortawesome/free-solid-svg-icons";

library.add(faTrophy, faMountain);


function App() {
const mountainData = require('./data/mountains.json');
const trophyData = require('./data/trophies.json');

  return (
    <GoalMountains mountainData={mountainData} trophyData={trophyData}/>
  );
}

export default App;
