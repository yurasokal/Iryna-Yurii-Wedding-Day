import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './navbar';
import { useTranslation, Trans } from 'react-i18next';
import logo from './Assets/logo.png';
import rings from './Assets/rings.png';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  ua: { nativeName: 'Ukrainian' }
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__home header__nav-name" href="#home">{t('navigation.home')}</div>
          <div className="header__story header__nav-name" href="#our-story">{t('navigation.our-story')}</div>
          <div className="header__venue header__nav-name">{t('navigation.venue')}</div>
          <div className="header__logo header__nav-name">
            <img
              src={logo}
              className="header__logo-wrapper"
              alt="logo iryna & yurii wedding"
            />
          </div>
          <div className="header__itinerary header__nav-name">{t('navigation.itinerary')}</div>
          <div className="header__faq header__nav-name">{t('navigation.FAQ')}</div>
          <div className="header__other header__nav-name">{t('navigation.other')}</div>
          {/* <div>
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))} 
          </div> */}   {/* switch language, will make this after everything */}
        </nav>
      </header>
      <main>
        <article className="home" id="home">
          <div className="home__join-us">{t('home.join')}</div>
          <div className="home__names">{t('home.name')}</div>
          <div className="home__details">{t('home.details')}</div>
          <div className="home__details">Iryna & Yurii photo >>> will be here</div>
        </article>
        <article className="our-story" id="our-story">
          <div className="our-story__wrapper">
            <div className="our-story__heading">{t('our-story.heading')}</div>
            <div className="our-story__text-wrapper">
              <p className="our-story__text">{t('our-story.text1')}</p>
              <p className="our-story__text">{t('our-story.text2')}</p>
              <p className="our-story__text">{t('our-story.text3')}</p>
            </div>
          </div>
          <img
              src={rings}
              className="header__logo-wrapper"
              alt="logo iryna & yurii wedding"
            />
        </article>
      </main>
    </>
  );
}

export default App;

{/* <>
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/our-story">Our story</Link>
    </li>
    <li>
      <Link to="/venue">Venue</Link>
    </li>
  </ul>
</nav>
<Routes>
  <Route path="/" element={<div>Home</div>} />
  <Route path="/our-story" element={<div>Our story</div>} />
  <Route path="/venue" element={<div>Venue</div>} />
  <Route path="/itinierary" element={<div>Itinierary</div>} />
  <Route path="/registry" element={<div>Registry</div>} />
  {/* <Route path="/" element={<Home />} /> */}

  // <Route />
  // <Route />
// </Routes> */}
  {/* <div>
    {Object.keys(lngs).map((lng) => (
      <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
        {lngs[lng].nativeName}
      </button>
    ))}
  </div>
  <div>{t('description.part2')}</div>
  <div>{t('description.part1')}</div> */}
{/* </> */}
