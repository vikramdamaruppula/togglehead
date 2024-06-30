import React ,{ useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Dropdown from './components/DropDown';
import Description from './components/Description';
import Slider1 from './components/Slider1';
import StaticData from './components/StaticData';
import Upcoming from './components/Upcoming';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import Faq from './components/Faq';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App">
     <header className="header">
      <div className="logo"> Logo</div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
      <nav className='nav'>
        <Dropdown title="Qualifications" />
        <Dropdown title="Organizations" />
        <Dropdown title="Research & Analysis" />
        <Dropdown title="Llorem Ipsum" />
        <Dropdown title="Llorem Ipsum" />
      </nav>
      <div className="search-icon">
      <i className="fas fa-search"></i>
    </div>
      <button className="enroll-button">Enrollment</button>
      </div>
    </header>

    <Description />
    <Upcoming />

    <Slider1 />
    <StaticData />
    <Faq />
    <Subscribe />
    <Footer />
    </div>
  );
}

export default App;
