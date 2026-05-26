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
      { label: "Misyon & Vizyon", to: "/hakkimizda" },
      { label: "Ekibimiz", to: "/ekibimiz" },
      { label: "İş Birliklerimiz", to: "/isbirliklerimiz" },
    ],
  },
  {
    label: "Takımlarımız",
    sublist: [
      { label: "Yıldırım Team", to: "/takim/yildirim-team" },
      { label: "Typhoon Helikopter", to: "/takim/typhoon-helikopter" },
      { label: "BiltekCyber", to: "/takim/biltek-cyber" },
      { label: "Gridea", to: "/takim/gridea" },
      { label: "BiltekAI", to: "/takim/biltek-ai" },
      { label: "Stride", to: "/takim/stride" },
    ],
  },
  {
    label: "Galeri",
    to: "/galeri",
  },
];

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isHomePage = path === "/" || path.startsWith("/takim");

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
    setMenuOpen(false);
    if (isHomePage) {
      document.body.classList.remove("body__second-color");
    } else {
      document.body.classList.add("body__second-color");
    }

    const navbar = document.querySelector(".nav");
    const blurDivs = document.querySelectorAll(".blur-div");

    const handleNavbarBackground = (forcedScrollY) => {
      const scrollY = typeof forcedScrollY === "number" ? forcedScrollY : window.scrollY;
      if (scrollY >= 50) {
        blurDivs.forEach((div) => div.classList.remove("anti-blur"));
        if (!isHomePage) navbar.classList.remove("white-container");
      } else {
        blurDivs.forEach((div) => div.classList.add("anti-blur"));
        if (!isHomePage) navbar.classList.add("white-container");
      }
    };

    // Force scroll position to 0 on initial page load / route change
    // to prevent navbar flashing/lagging before ScrollToTop executes
    handleNavbarBackground(0);

    const onScroll = () => handleNavbarBackground();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname, isHomePage]);

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
              key={index}
              onMouseEnter={() => handleSublistOpen(index)}
              onMouseLeave={() => handleSublistClose(index)}
            >
              <Link
                to={to}
                className="nav-link activator-item-title"
                onClick={() => {
                  if (!sublist) {
                    setMenuOpen(false);
                  }
                }}
              >
                {label}
                {sublist && <i className="ri-arrow-down-s-line"></i>}
              </Link>
              {sublist && (
                <Sublist
                  ref={(el) => (sublistRefs.current[index] = el)}
                  items={sublist}
                  onItemClick={() => setMenuOpen(false)}
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
