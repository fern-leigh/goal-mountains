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


export default function GoalMountains({data}) {
  return (

    <div>
      <header >
          <h1> Let's Climb Some Mountains! </h1>
      </header>
      <main>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home data={data} />} />
                  <Route path="/mountains" element={<Mountains />} />
                  <Route path="/trophy-room" element={<Trophies />} />
              </Routes>
            </BrowserRouter>
      </main>
    </div>

  );
}

