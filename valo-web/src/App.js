import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext";
import { ThemeProvider } from "./context/ThemeContext";
import Account from "./routes/Account";
import Agents from "./routes/Agents";
import Home from "./routes/Home";
import Leaderboards from "./routes/LeaderBoard";
import Maps from "./routes/Maps";
import Profile from "./routes/Profile";
import Weapons from "./routes/Weapons";

function App() {
  return (
    <PlayerProvider>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/leaderboard' element={<Leaderboards />} />
          <Route path='/weapons' element={<Weapons />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/agents' element={<Agents />} />
          <Route path='/maps' element={<Maps />} />
        </Routes>
      </ThemeProvider>
    </PlayerProvider>
  );
}

export default App;
