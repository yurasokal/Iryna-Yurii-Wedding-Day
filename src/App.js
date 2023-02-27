import './App.scss';
import { useState } from 'react';
import Itinerary from './Components/Itinerary';
import { useTranslation, Trans } from 'react-i18next';
import FAQ from './Components/FAQ';
import CarouselSlider from './Components/CarouselSlider';

import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';


import logo from './Assets/logo.png';
// import rings from './Assets/rings.png';
// import walking2 from './Assets/walking2.jpg';
import ourStory from './Assets/walking3.jpg';
import venue1 from './Assets/venue1.png';
import venue2 from './Assets/venue2.png';
import venue3 from './Assets/venue3.png';
import venueVector from './Assets/venueVector.svg';
import churchVector from './Assets/churchVector.svg';
import mainPhoto from './Assets/mainPhotoAnalog2.jpg';
import churchInside from './Assets/churchInside.jpg';

const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
  de: { nativeName: 'DE' }
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <a className="header__home header__nav-name" href="#home">{t('navigation.home')}</a>
          <a className="header__story header__nav-name" href="#our-story">{t('navigation.our-story')}</a>
          <a className="header__venue header__nav-name" href="#venue">{t('navigation.venue')}</a>
          <div className="header__logo">
            <img
              src={logo}
              className="header__logo-wrapper"
              alt="logo iryna & yurii wedding"
            />
          </div>
          <a className="header__itinerary header__nav-name" href="#itinerary">{t('navigation.itinerary')}</a>
          <a className="header__faq header__nav-name" href="#faq">{t('navigation.FAQ')}</a>
          <a className="header__other header__nav-name" href="#photos">{t('navigation.photos')}</a>
          <div className="language">
            {Object.keys(lngs).map((lng) => (
              <button key={lng} className="language__button" style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))} 
          </div>
        </nav>
      </header>
      <main>
        <article className="home" id="home">
          <div className="home__join-us">{t('home.join')}</div>
          <div className="home__names">{t('home.name')}</div>
          <div className="home__details">{t('home.details')}</div>
          <img
              src={mainPhoto}
              className="home__img"
              alt="logo iryna & yurii wedding"
          />
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
              src={ourStory}
              className="our-story__img"
              alt="logo iryna & yurii wedding"
            />
        </article>
        <article className="venue" id="venue">
          <div className="venue__wrapper">
            <p className="venue__venue">{t('venue.venue')}</p>
            <p className="venue__villa-name">{t('venue.villa-name')}</p>
            <p className="venue__text">{t('venue.text')}</p>
            <p className="venue__address">{t('venue.address')}</p>
            <p className="venue__address">{t('venue.address2')}</p>
          </div>
          <div className="venue__img">
            <img
                src={venue2}
                className="venue__img2"
                alt="villa giani venue wedding flowers"
              />
            <img
                src={venue3}
                className="venue__img3"
                alt="villa giani venue wedding flowers"
              />
            <img
                src={venue1}
                className="venue__img1"
                alt="villa giani venue wedding flowers"
              />
          </div>
        </article>
        <article className="church">
          <div className="venue__img venue__img--church">
            <img
                src={churchInside}
                className="venue__img4"
                alt="villa giani venue wedding flowers"
              />
          </div>
          <div className="venue__wrapper venue__wrapper--church">
            <p className="venue__venue">{t('church.church')}</p>
            <p className="venue__villa-name">{t('church.church-name')}</p>
            <p className="venue__text">{t('church.text')}</p>
            <p className="venue__address">{t('church.address')}</p>
            <p className="venue__address">{t('church.address2')}</p>
          </div>
        </article>
        <img
          src={churchVector}
          className="venue__vector"
          alt="church wedding flowers"
        />
        <article className="accomodation">
          <div className="accomodation__place">
            <div className="accomodation__name">{t('accomodation.apartment1')}</div>
            <div className="accomodation__description">{t('accomodation.apartment1-description')}</div>
          </div>
          <div className="accomodation__place">
            <div className="accomodation__name">{t('accomodation.apartment2')}</div>
            <div className="accomodation__description">{t('accomodation.apartment2-description')}</div>
          </div>
        </article>
        <img
          src={venueVector}
          className="venue__vector"
          alt="villa giani venue wedding flowers"
        />
        <article className="itinerary" id="itinerary">
          <Itinerary />
        </article>
        <img
          src={venueVector}
          className="venue__vector"
          alt="villa giani venue wedding flowers"
        />
        <FAQ />
        <article className="slider__heading" id="photos">{t('slider.heading')}</article>
        <CarouselSlider />
      </main>
      <footer className="footer">
        <p className="footer__text footer__rights">
          <span className="footer__copyright">
            2023 
          </span>
            © Yurii Chabarenko
        </p>
      </footer>
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
