import { useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SocialMediaGroup from "../../../../components/SocialMediaGroup/SocialMediaGroup";
import AnimatedItem from "../../../../components/AnimatedItem";
import AnimatedImage from "../../../../components/AnimatedImage";
import "./LandingPage.scss";

const LandingPage = () => {
  const themeButtonRef = useRef(null);

  useEffect(() => {
    const themeButton = themeButtonRef.current;
    const darkTheme = "darkTheme";
    const handleThemeToggle = () => {
      const oppositeTheme = document.body.classList.contains(darkTheme)
        ? "light"
        : "dark";
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle("theme-button-dark");
      localStorage.setItem("biltekTheme", oppositeTheme);
    };

    themeButton.addEventListener("click", handleThemeToggle);
  }, []);

  return (
    <section id="landing-page">
      <AnimatedImage
        className="bg-img"
        loading="eager"
        src="/media/bg-logo.png"
        alt="biltek logo"
        opacity={0.04}
      />
      <AnimatedImage
        className="ornament"
        loading="eager"
        src="/media/texture.png"
        alt="ornament"
      />
      <AnimatedItem
        className="container landing-page__container"
        origin="bottom"
        delay={1}
      >
        <div className="left-box">
          <p className="subtitle">Ankara Yıldırım Beyazıt Üniversitesi</p>
          <p className="big-title">
            BİLİM VE TEKNOLOJİ
            <br />
            TOPLULUĞU
          </p>
          <p className="text">
            Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji Topluluğu,
            2011’de bilimsel düşünceyi teşvik amacıyla kurulmuştur. 2000’den
            fazla üyesiyle, teknik bilgi ve becerileri geliştirmeyi, yenilikçi
            projeler üretmeyi ve teknoloji farkındalığını artırmayı hedefler.
          </p>
          <div className="landing-page__buttons">
            <a
              target="_blank"
              href="https://linktr.ee/biltek?fbclid=PAZXh0bgNhZW0CMTEAAaZUw6dBiC783GX44EDVC7QFXCa66PbbcBXXVObG1_cAGl9YpV_TdQXmzcg_aem_MhP_wy2OsfAMjoMen1OH3Q"
              className="register-btn"
              rel="noopener noreferrer"
            >
              <div className="arrow">
                <MdKeyboardArrowRight className="i" />
              </div>
              <span className="register-text">Kayıt Ol</span>
            </a>
          </div>
          <SocialMediaGroup
            instagram="https://www.instagram.com/aybubiltek/"
            youtube="https://www.youtube.com/c/ybubiltek"
            twitter="https://x.com/aybubiltek"
            linkedin="https://www.linkedin.com/company/aybubiltek/posts/?feedView=all"
          />
        </div>
        <div className="right-box">
          <img loading="eager" src="/media/outer-elips.png" alt="elips" />
          <img loading="eager" src="/media/inner-elips.png" alt="elips" />
          <AnimatedImage
            loading="eager"
            className="landing-page__logo"
            ref={themeButtonRef}
            src="/media/logo-no-text.png"
            alt="biltek logo"
            origin="bottom"
            delay={1.1}
            rotate={-100}
            distance={0}
          />
        </div>
      </AnimatedItem>
    </section>
  );
};

export default LandingPage;
