import sliderPhoto1 from "./media/SliderPhoto1.JPG";
import sliderPhoto2 from "./media/SliderPhoto2.jpg";
import sliderPhoto3 from "./media/SliderPhoto3.png";
import sliderPhoto4 from "./media/SliderPhoto4.jpg";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import TitleArea from "../../components/TitleArea/TitleArea";
import "./AboutUs.scss";
import setPageTitle from "../../hooks/setPageTitle";
import AnimatedItem from "../../components/AnimatedItem";
import Collaborators from "../../components/Collaborators/Collaborators";

const sliderPhotos = [sliderPhoto1, sliderPhoto2, sliderPhoto3, sliderPhoto4];

const sections = [
  {
    title: "Hakkımızda",
    description: `Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji Topluluğu, 2011 yılında bilimsel düşünceyi teşvik etmek amacıyla kurulmuş öğrenci topluluğudur. Amacımız, üyelerimizin teknik bilgi ve becerilerini geliştirirken inovatif projeler üretmelerine olanak sağlamaktır. Öğrenciler arasında bilimsel araştırmaları yaygınlaştırmak ve teknoloji dünyasındaki yenilikleri takip ederek farkındalık yaratmak için çeşitli etkinlikler, seminerler ve atölyeler düzenliyoruz. Bilim ve teknolojiyi hayatın her alanına entegre etmek için çalışan dinamik ve yenilikçi bir ekibiz. Geleceğin lider mühendisleri, bilim insanları ve teknoloji uzmanları olarak sorumluluklarımızın bilincindeyiz ve bu doğrultuda hareket ediyoruz.`,
  },
  {
    title: "Misyonumuz",
    description: `Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji Topluluğu olarak misyonumuz, öğrencilere bilimsel ve teknolojik bilgi birikimlerini artıracak bir ortam sunmak ve onları kariyer hayatına en iyi şekilde hazırlamaktır. Çeşitli teknik geziler, söyleşiler, yurt dışı programları ve eğitimlerle üyelerimizin akademik ve profesyonel gelişimini destekliyoruz. CV hazırlama, mülakat hazırlıkları gibi kariyer odaklı eğitimler düzenleyerek, öğrencilerin iş dünyasına güçlü adımlar atmalarını sağlıyoruz. Amacımız, bilimsel araştırmaları ve teknolojik inovasyonları teşvik ederek, öğrencilerimizin kişisel ve mesleki başarılarına katkı sağlamaktır.`,
  },
  {
    title: "Vizyonumuz",
    description: `Topluluğumuzun vizyonu, Ankara Yıldırım Beyazıt Üniversitesi'ni bilim ve teknoloji alanında ulusal ve uluslararası arenada tanınan bir merkez haline getirmektir. Öğrencilerimizi, teknik bilgi ve becerilerle donatarak kariyerlerine emin adımlarla hazırlamayı, yurt içi ve yurt dışı programlarla küresel bakış açısı kazandırmayı hedefliyoruz. Bilimsel söyleşiler, teknik geziler ve kariyer odaklı eğitimlerle üyelerimizi geleceğin lider bilim insanları ve teknoloji uzmanları olarak yetiştirmeyi amaçlıyoruz. Yenilikçi projelerle topluma katkı sunan, sürdürülebilir çözümler üreten bir topluluk olma yolunda ilerliyoruz.`,
  },
];

const collaborators = [
  { link: "https://aiesec.org.tr/", img: "aisec.png", alt: "AIESEC logosu" },
  {
    link: "https://www.qampusapp.com/",
    img: "qampus.png",
    alt: "Qampus logosu",
  },
  {
    link: "https://chocolabs.com.tr/",
    img: "choco-labs.jpg",
    alt: "Chocolabs logosu",
  },
  {
    link: "https://www.colombiacoffeetr.com.tr/",
    img: "colombia-coffee.jpg",
    alt: "Colombia Coffee logosu",
  },
  {
    link: "https://www.coffeedemadrid.com.tr/",
    img: "madrid.png",
    alt: "Coffee de Madrid logosu",
  },
  {
    link: "https://www.instagram.com/meet.n.study/",
    img: "meet-n-study.png",
    alt: "Meet n Study logosu",
  },
  {
    link: "https://cartoonlabcoffee.com/",
    img: "cartoon-lab.jpg",
    alt: "Cartoon Lab logosu",
  },
  {
    link: "https://ezgicafe.dijital.menu/",
    img: "ezgi-cafe.jpg",
    alt: "Ezgi Cafe logosu",
  },
  {
    link: "https://www.instagram.com/fafello.ankara/",
    img: "fafello.png",
    alt: "Fafello logosu",
  },
  {
    link: "https://www.instagram.com/koicoffeetaiyaki/?hl=bn",
    img: "koi.png",
    alt: "Koi Coffee logosu",
  },
  {
    link: "https://www.zaytungzone.com/",
    img: "zaytung-zone.png",
    alt: "Zaytung Zone logosu",
  },
];

const AboutUs = () => {
  setPageTitle("Hakkımızda");

  const [activeIndex, setActiveIndex] = useState(0);
  const descriptionSwiperRef = useRef(null);
  const lineRef = useRef(null);

  // Alt çizgiyi (line) aktif başlığa göre hareket ettiren fonksiyon
  const updateLine = (index) => {
    const line = lineRef.current;
    if (!line || !line.parentElement) return;
    const slideWidth = line.parentElement.clientWidth / 3.0;
    line.style.width = `${slideWidth}px`;
    line.style.transform = `translateX(${slideWidth * index}px)`;
  };

  // Aktif başlık değiştiğinde veya pencere boyutu değiştiğinde alt çizgiyi güncelle
  useEffect(() => {
    updateLine(activeIndex);
    const handleResize = () => updateLine(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, updateLine]);

  return (
    <div className="about-us-wrapper">
      <TitleArea />
      <section className="white-container">
        <div className="container about-us ender">
          <AnimatedItem className="content" delay={0.6}>
            {/* Fotoğraf slider alanı */}
            <Swiper
              className="image-slider"
              modules={[Autoplay, EffectFade]}
              loop={true}
              slidesPerView={1}
              spaceBetween={8}
              allowTouchMove={false}
              speed={3000}
              autoplay={{ delay: 5000 }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
            >
              {sliderPhotos.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`Hakkımızda fotoğrafı ${i + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Başlıklı açıklama alanı */}
            <div className="description-area">
              <div className="titles">
                {sections.map(({ title }, i) => (
                  <div
                    key={i}
                    className={`subtitle${
                      i === activeIndex ? " active-title" : ""
                    }`}
                    onClick={() => {
                      setActiveIndex(i);
                      if (descriptionSwiperRef.current) {
                        descriptionSwiperRef.current.slideTo(i);
                      }
                    }}
                  >
                    {title}
                  </div>
                ))}
              </div>
              {/* Aktif başlığın altındaki çizgi */}
              <div className="line-slider">
                <div className="current-line" ref={lineRef}></div>
              </div>
              {/* Açıklama slider alanı */}
              <Swiper
                className="description-slider"
                onSwiper={(swiper) => (descriptionSwiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {sections.map(({ description }, i) => (
                  <SwiperSlide key={i}>
                    <div className="description">{description}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </AnimatedItem>
          <Collaborators />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
