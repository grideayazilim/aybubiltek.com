import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import Sublist from "./Sublist/Sublist";
import AnimatedItem from "../AnimatedItem";

const navLinks = [
  {
    label: "Ana Sayfa",
    to: "/",
  },
  {
    label: "Hakkımızda",
    sublist: [
      { label: "Misyon & Vizyon", to: "/Hakkımızda" },
      { label: "Ekibimiz", to: "/Ekibimiz" },
      { label: "İş Birliklerimiz", to: "/İşbirliklerimiz" },
    ],
  },
  {
    label: "Takımlarımız",
    sublist: [
      { label: "Yıldırım Team", to: "/Takım/YıldırımTeam" },
      { label: "Typhoon Helikopter", to: "/Takım/TyphoonHelikopter" },
      { label: "BiltekCyber", to: "/Takım/BiltekCyber" },
      { label: "Gridea", to: "/Takım/Gridea" },
      { label: "BiltekAI", to: "/Takım/BiltekAI" },
      { label: "Stride", to: "/Takım/Stride" },
    ],
  },
  {
    label: "Makaleler",
    to: "/Makaleler",
  },
  {
    label: "Duyurular",
    to: "/Duyurular",
  },
  {
    label: "Galeri",
    to: "/Galeri",
  },
];

const Navbar = () => {
  const location = useLocation();
  const path = decodeURIComponent(location.pathname).toLocaleLowerCase("tr");
  const isHomePage = path === "/" || path.startsWith("/takım");

  const [menuOpen, setMenuOpen] = useState(false);
  const sublistRefs = useRef([]);

  const handleSublistOpen = (index) => {
    const el = sublistRefs.current[index];
    if (el) el.style.height = el.scrollHeight + "px";
  };

  const handleSublistClose = (index) => {
    const el = sublistRefs.current[index];
    if (el) el.removeAttribute("style");
  };

  useEffect(() => {
    document.body.classList.remove("body__second-color", "no-transition");
    if (!isHomePage) {
      document.body.classList.add("no-transition");
      document.body.classList.add("body__second-color");
    }

    const navbar = document.querySelector(".nav");
    const blurDivs = document.querySelectorAll(".blur-div");

    const handleNavbarBackground = () => {
      if (window.scrollY >= 50) {
        blurDivs.forEach((div) => div.classList.remove("anti-blur"));
        if (!isHomePage) navbar.classList.remove("white-container");
      } else {
        blurDivs.forEach((div) => div.classList.add("anti-blur"));
        if (!isHomePage) navbar.classList.add("white-container");
      }
    };

    handleNavbarBackground();
    window.addEventListener("scroll", handleNavbarBackground);

    return () => {
      window.removeEventListener("scroll", handleNavbarBackground);
    };
  }, [location.pathname]);

  return (
    <AnimatedItem className={`nav${isHomePage ? "" : " white-container"}`}>
      <div className="blur-container anti-blur blur-div" id="blur-div"></div>

      <div className="nav-logo">
        <img src="/media/logo-text.png" alt="biltek logo" className="nav-img" />
      </div>

      <div className={`nav-menu ${menuOpen ? "show-menu" : ""}`}>
        <ul className="nav-list">
          {navLinks.map(({ to, label, sublist }, index) => (
            <li
              className="nav-item"
              onMouseEnter={() => handleSublistOpen(index)}
              onMouseLeave={() => handleSublistClose(index)}
            >
              <Link to={to} className="nav-link activator-item-title">
                {label}
                {sublist && <i className="ri-arrow-down-s-line"></i>}
              </Link>
              {sublist && (
                <Sublist
                  ref={(el) => (sublistRefs.current[index] = el)}
                  items={sublist}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="nav-close" onClick={() => setMenuOpen(false)}>
          <i className="ri-close-line"></i>
        </div>
      </div>

      <div className="button-area">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linktr.ee/biltek?fbclid=PAZXh0bgNhZW0CMTEAAaZUw6dBiC783GX44EDVC7QFXCa66PbbcBXXVObG1_cAGl9YpV_TdQXmzcg_aem_MhP_wy2OsfAMjoMen1OH3Q"
          className="register-button"
        >
          BİLTEK'li Ol
        </a>

        <div className="nav-toggle" onClick={() => setMenuOpen(true)}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </AnimatedItem>
  );
};

export default Navbar;
