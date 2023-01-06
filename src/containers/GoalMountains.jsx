import React from 'react';
import ReactDOM from 'react-dom/client';
import {
BrowserRouter,
Routes,
  Route
} from "react-router-dom";


import Home from '../components/Home'
import Mountains from '../components/Mountains'
import Trophies from '../components/Trophies'


export default function GoalMountains({mountainData, trophyData}) {
  return (

    <div>
      <header >
          <h1> Let's Climb Some Mountains! </h1>
      </header>
      <main>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/mountains" element={<Mountains data={mountainData} />} />
                  <Route path="/trophy-room" element={<Trophies data={trophyData} />} />
              </Routes>
            </BrowserRouter>
      </main>
    </div>

  );
}

