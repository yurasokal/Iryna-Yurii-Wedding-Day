import React, { useEffect, useRef, useState } from 'react';
import "./../Styles/BurgerMenu.scss";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useTranslation, Trans } from 'react-i18next';
import { SidebarData } from './../SidebarData';
import { IconContext } from 'react-icons';

function BurgerMenu({setIsOpen, isOpen, lngs}) {
  const { t, i18n } = useTranslation();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

  let daysPlanData = [
    [
      {
        time1: t("day1.time1"),
        text1: t("day1.text1"),
        time2: t("day1.time2"),
        text2: t("day1.text2"),
        time3: t("day1.time3"),
        text3: t("day1.text3"),
        time4: t("day1.time4"),
        text4: t("day1.text4"),
        time5: t("day1.time5"),
        text5: t("day1.text5"),
        id: "f0001"
      }
    ],
    [
      {
        time1: t("day2.time1"),
        text1: t("day2.text1"),
        time2: t("day2.time2"),
        text2: t("day2.text2"),
        time3: t("day2.time3"),
        text3: t("day2.text3"),
        time4: t("day2.time4"),
        text4: t("day2.text4"),
        time5: t("day2.time5"),
        text5: t("day2.text5"),
        time6: t("day2.time6"),
        text6: t("day2.text6"),
        time7: t("day2.time7"),
        text7: t("day2.text7"),
        id: "f0002"
      }
    ],
    [
      {
        time1: t("day3.time1"),
        text1: t("day3.text1"),
        time2: t("day3.time2"),
        text2: t("day3.text2"),
        time3: t("day3.time3"),
        text3: t("day3.text3"),
        id: "f0003"
      }
    ],
    [
      {
        time1: t("day4.time1"),
        text1: t("day4.text1"),
        id: "a0004"
      }
    ]
  ]; 

  return (
    <div className="burger">
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="burger__icon">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
        <nav className={sidebar ? "burger__nav burger__nav--active active" : "burger__nav"}>
          <ul className="burger__items" onClick={showSidebar}>
            <li className="burger__toggle">
              <a className="burger__home burger__item" href="#home">
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            {SidebarData.map((menu, index) => {
              return (
                <li key={index} className={menu.cName}>
                  <a className="burger__nav-item" href={menu.href}>
                    <div className="burger__nav-icon">{menu.icon}</div>
                    <span className="burger__title">{menu.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="burger__language">
          {Object.keys(lngs).map((lng) => (
            <button 
              key={lng}
              className="language__button" 
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', background: i18n.resolvedLanguage === lng ? '#ebe5e0' : '#fff' }} 
              type="submit" onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default BurgerMenu;
