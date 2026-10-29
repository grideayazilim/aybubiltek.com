import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SocialMediaGroup from "../../../../components/SocialMediaGroup/SocialMediaGroup";
import AnimatedItem from "../../../../components/AnimatedItem";
import AnimatedImage from "../../../../components/AnimatedImage";
import "./LandingPage.scss";

const darkTheme = "darkTheme";

// Logo dönüşü ve tema dalgası aynı süre ve eğriyle ilerlesin
const themeSwitchDuration = 0.9;
const themeSwitchEase = [0.65, 0, 0.35, 1];

const LandingPage = () => {
  const [isDark, setIsDark] = useState(() =>
    document.body.classList.contains(darkTheme)
  );
  const [hasToggled, setHasToggled] = useState(false);

  // Logoya tıklayınca logo döner, yeni tema logodan dışarı doğru yayılır
  const handleThemeToggle = (event) => {
    const nextIsDark = !isDark;
    const applyTheme = () => {
      document.body.classList.toggle(darkTheme, nextIsDark);
      localStorage.setItem("biltekTheme", nextIsDark ? "dark" : "light");
    };

    setIsDark(nextIsDark);
    setHasToggled(true);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!document.startViewTransition || reduceMotion) {
      applyTheme();
      return;
    }

    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(applyTheme);
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: themeSwitchDuration * 1000,
          easing: `cubic-bezier(${themeSwitchEase.join(", ")})`,
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <section id="landing-page">
      <AnimatedImage
        className="bg-img"
        loading="eager"
        src="/media/bg-logo.png"
        alt="biltek logo"
        opacity={0.04}
        animateOnMount={true}
      />
      <AnimatedImage
        className="ornament"
        loading="eager"
        src="/media/texture.png"
        alt="ornament"
        animateOnMount={true}
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
            src="/media/logo-no-text.png"
            alt="biltek logo"
            origin="bottom"
            delay={1.1}
            rotate={-100}
            targetRotate={isDark ? 360 : 0}
            distance={0}
            onClick={handleThemeToggle}
            style={{ cursor: "pointer" }}
            {...(hasToggled && {
              transition: {
                duration: themeSwitchDuration,
                ease: themeSwitchEase,
              },
            })}
          />
        </div>
      </AnimatedItem>
    </section>
  );
};

export default LandingPage;
