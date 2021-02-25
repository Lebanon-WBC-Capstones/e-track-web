import Navbar from './Components/Navbar/Navbar.js';
import DashboardPage from './Pages/DashboardPage/DashboardPage.js';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Navbar />
      {/* <button
        onClick={() => {
          changeLanguage(
            window.localStorage.getItem('lng') === 'ar' ? 'en-US' : 'ar'
          );
        }}
      >
        change lang
      </button> */}
      <DashboardPage />
    </div>
  );
}

export default App;
