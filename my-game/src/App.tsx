import { motion } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import './styles/App.css';
import routes from "./routes/routes";
import StartPage from "./components/StartPage";
import Game from "./components/Game";

function App() {
  return (
      <Router>
        <Routes>
          {/*<Route path={routes.notFoundPage()} element={<NotFound />} />*/}
          <Route path={routes.mainPage()} element={<StartPage />} />
            <Route path={routes.game()} element={<Game />} />
            {/*<Route path={routes.loginPage()} element={<Login />} />*/}
          {/*<Route path={routes.signUpPage()} element={<Signup />} />*/}
        </Routes>
      </Router>
  );
}

export default App;
