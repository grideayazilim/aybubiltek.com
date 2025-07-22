import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./AboutSection.scss";
import AnimatedItem from "../../../../components/AnimatedItem";

import aboutUsPhoto1 from "./media/giris-foto.JPG";
import aboutUsPhoto2 from "./media/img10.jpg";
import aboutUsPhoto3 from "./media/img3.jpg";
import aboutUsPhoto4 from "./media/kahve-toplu-foto.png";

const aboutUsPhotos = [
  aboutUsPhoto1,
  aboutUsPhoto2,
  aboutUsPhoto3,
  aboutUsPhoto4,
];

const AboutSection = () => {
  const [counter, setCounter] = useState(500);
  const hasCounted = useRef(false);

  const startCounter = () => {
    if (hasCounted.current) return;

    hasCounted.current = true;
    let count = 500;
    const targetCount = 2000;
    const increment = 9;
    const speed = 15;

    const tick = () => {
      if (count < targetCount) {
        count += increment;
        setCounter(count);
        setTimeout(tick, speed);
      } else {
        setCounter(targetCount);
      }
    };

    tick();
  };

  return (
    <section className="white-container">
      <div className="about-section container">
        <div className="left-box">
          <AnimatedItem
            className="about-us-slider-wrapper"
            origin="bottom"
            delay={0.6}
          >
            <Swiper
              className="about-us-slider"
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={2000}
              allowTouchMove={false}
              autoplay={{ delay: 8000 }}
              loop={true}
            >
              {aboutUsPhotos.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`hakkımızda fotoğrafı ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedItem>
        </div>

        <AnimatedItem
          onViewportEnter={startCounter}
          className="about-content"
        >
          <div className="big-title section-title">HAKKIMIZDA</div>
          <p className="description">
            Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji Topluluğu,
            2011 yılında bilimsel düşünceyi teşvik etmek amacıyla kurulmuş
            öğrenci topluluğudur. Amacımız, üyelerimizin teknik bilgi ve
            becerilerini geliştirirken inovatif projeler üretmelerine olanak
            sağlamaktır. Öğrenciler arasında bilimsel araştırmaları
            yaygınlaştırmak ve teknoloji dünyasındaki yenilikleri takip ederek
            farkındalık yaratmak için çeşitli etkinlikler, seminerler ve
            atölyeler düzenliyoruz. Bilim ve teknolojiyi hayatın her alanına
            entegre etmek için çalışan dinamik ve yenilikçi bir ekibiz.
            Geleceğin lider mühendisleri, bilim insanları ve teknoloji uzmanları
            olarak sorumluluklarımızın bilincindeyiz ve bu doğrultuda hareket
            ediyoruz.
          </p>
          <div className="counter big-title">{counter}+ BİLTEK'li</div>
          <Link to="Hakkımızda" className="animated-button">
            Daha Fazla
          </Link>
        </AnimatedItem>
      </div>
    </section>
  );
};

export default AboutSection;
