import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/admin/Login";
import LandingPage from "./pages/admin/LandingPage";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Profile from "./pages/Profile";
import Team from "./pages/team/Team";
import MyLeagues from "./pages/leagues/MyLeagues";
import Statistics from "./pages/Statistics";
import SearchLeagues from "./pages/leagues/SearchLeagues";
import CreateLeague from "./pages/leagues/CreateLeague";
import Trade from "./pages/team/Trade";
import League from './pages/leagues/League';
import Leaderboard from './pages/leaderboard';

function App() {

  return (
    <>
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/profile" element={<Profile />}/>
                        <Route path="/leagues" element={<MyLeagues />}/>
                        <Route path="/leagues/search" element={<SearchLeagues />}/>
                        <Route path="/leagues/create" element={<CreateLeague />}/>
                        <Route path="/team" element={<Team />}/>
                        <Route path="/team/trade" element={<Trade />}/>
                        <Route path="/statistics" element={<Statistics />}/>
                        <Route path="/league" element={<League />}/>
                        <Route path="/leaderboard" element={<Leaderboard />}/>
                    </Routes>
                </div>
            </Router>
        </div>
    </>
  )
}

export default App
