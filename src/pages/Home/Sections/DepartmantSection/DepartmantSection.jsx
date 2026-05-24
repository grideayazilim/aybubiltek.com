import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AnimatedItem from "../../../../components/AnimatedItem";
import "./DepartmantSection.scss";

const departmantInfos = [
  {
    title: "Etkinlik Koordinatörlüğü Departmanı",
    description: `Yaratıcı fikirleri takım çalışmasıyla gerçeğe dönüştürerek Biltek’in etkinliklerini birlikte üretiyoruz. Sosyal ve iletişim becerilerini geliştirip topluluğa katkı sağlamak, etkinliklerde aktif rol almak isteyenleri bekliyoruz.`,
  },
  {
    title: "İletişim Ve Medya Departmanı",
    description: `Biltek’in İletişim ve Medya Departmanı, topluluğun etkinliklerinin tanıtımını yapar; sosyal medya yönetimi, içerik üretimi ve topluluk içi iletişimi güçlendirerek Biltek’in görünürlüğünü artırmayı hedefler.`,
  },
  {
    title: "Dış İlişkiler Ve Sponsorluk Departmanı",
    description: `Sektördeki paydaşlarla güçlü ilişkiler ve stratejik iş birlikleri kurarak BİLTEK projelerine finansal ve lojistik destek sağlıyoruz. Yenilikçi projelere öncülük eden departmanımız, uzun vadeli kazanç sağlayan ortaklıklar geliştirmektedir.`,
  },
];

const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const DepartmantSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleDepartmantArea = () => {
      const swiperInstance = swiperRef.current?.swiper;
      if (!swiperInstance) return;

      if (window.innerWidth >= 1025) {
        swiperInstance.slideTo(1);
        swiperInstance.autoplay?.stop();
        swiperInstance.allowTouchMove = false;
      } else {
        swiperInstance.autoplay?.start();
        swiperInstance.allowTouchMove = true;
      }
    };

    const throttledHandler = throttle(handleDepartmantArea, 200);

    window.addEventListener("load", throttledHandler);
    window.addEventListener("resize", throttledHandler);
    handleDepartmantArea(); // ilk açılışta çalıştır

    return () => {
      window.removeEventListener("load", throttledHandler);
      window.removeEventListener("resize", throttledHandler);
    };
  }, []);

  return (
    <section className="white-container">
      <AnimatedItem className="container departmants">
        <div className="big-title section-title">DEPARTMANLARIMIZ</div>

        <div className="cards-container departmant-slider">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={25}
            initialSlide={1}
            centeredSlides={true}
            slidesPerView={3.2}
            speed={800}
            allowTouchMove={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                allowTouchMove: true,
              },
              768: {
                slidesPerView: 1.8,
                allowTouchMove: true,
              },
              1025: {
                slidesPerView: 2.9,
                allowTouchMove: false,
              },
              1400: {
                slidesPerView: 3.2,
                allowTouchMove: false,
              },
            }}
          >
            {departmantInfos.map(({ title, description }, i) => (
              <SwiperSlide className="card departmant-card">
                <img src="media/logo-no-text.png" alt="biltek logosu" />
                <div className="subtitle">{title}</div>
                {description}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AnimatedItem>
    </section>
  );
};

export default DepartmantSection;
