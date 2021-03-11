import { useTranslation } from 'react-i18next';
import LandingPage from './Pages/LandingPage/LandingPage.js';
import AboutUs from './Pages/AboutPage/AboutUs.js';
import NotFound from './Pages/NotFound/NotFound.js';

import CollectionPage from './Pages/CollectionPage/CollectionPage.js';
import InterestPage from './Pages/InterestPage/InterestPage.js';
import Dashboard from './Pages/DashboardPage/DashboardPage.js';
import SpreadPage from './Pages/SpreadPage/SpreadPage.js';
import MoodPage from './Pages/MoodPage/MoodPage.js';
import TrackerPage from './Pages/TrackerPage/TrackerPage.js';
import ProfilePage from './Pages/ProfilePage/ProfilePage.js';

import Navbar from './Components/Navbar/Navbar.js';

import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let signedin = true;
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" exact>
            <AboutUs />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          {signedin ? (
            <div className="bg-lightGrey h-screen">
              <Navbar />
              <Route path="/collections" exact>
                <CollectionPage />
              </Route>
              <Route path="/profile" exact>
                <ProfilePage />
              </Route>
              <Route path="/trackers" exact>
                <TrackerPage />
              </Route>
              <Route path="/Mood" exact>
                <MoodPage />
              </Route>
              <Route path="/spread" exact>
                <SpreadPage />
              </Route>
              <Route path="/interest" exact>
                <InterestPage />
              </Route>
              <Route path="/home" exact>
                <Dashboard />
              </Route>
            </div>
          ) : (
            <Route path="*">
              <NotFound />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
