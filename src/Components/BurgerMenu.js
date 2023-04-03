import React, { useEffect, useRef, useState } from 'react';
import "./../Styles/BurgerMenu.scss";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function BurgerMenu({setIsOpen, isOpen, lngs}) {
  const { i18n } = useTranslation();
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuRef]);

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
