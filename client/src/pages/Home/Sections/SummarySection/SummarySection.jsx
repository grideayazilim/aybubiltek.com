import btkPhoto from "./media/btk.jpg";
import tanitimlarPhoto from "./media/tanitimlar.png";
import havelsanPhoto from "./media/havelsan.jpg";
import lemonPhoto from "./media/lemon.jpg";
import aisecPhoto from "./media/aisec.png";
import talkversityPhoto from "./media/talkversity.png";
import hidrojenPhoto from "./media/hidrojen.jpg";
import partiPhoto from "./media/parti.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import AnimatedItem from "../../../../components/AnimatedItem";
import "./SummarySection.scss";

const slideData = [
  [
    {
      img: btkPhoto,
      alt: "btk gezisi fotoğrafı",
      title: "BTK Teknik Gezisi",
      desc: "Teknolojinin kalbine doğru yol alan teknik gezilerimiz her yıl devam ediyor.",
    },
    {
      img: tanitimlarPhoto,
      alt: "bölüm tanıtımı fotoğrafı",
      title: "AYBÜ Bölüm Tanıtımı",
      desc: "AYBÜ öğrencisi ve mezunu konuklarımızın olduğu AYBÜ bölüm tanıtımlarımız YouTube kanalımızda!",
    },
  ],
  [
    {
      img: havelsanPhoto,
      alt: "havelsan gezisi fotoğrafı",
      title: "HAVELSAN Teknik Gezisi",
      desc: "Teknolojinin kalbine doğru yol alan teknik gezilerimiz her yıl devam ediyor.",
    },
    {
      img: lemonPhoto,
      alt: "lemon academy fotoğrafı",
      title: "Sınırların Ötesinde Eğitim",
      desc: "Lemon Academy yetkilileri ile eğitimde yurt dışı fırsatlarının konuşulduğu panelimiz.",
    },
  ],
  [
    {
      img: aisecPhoto,
      alt: "aisec x biltek fotoğrafı",
      title: "AISEC x BİLTEK",
      desc: "AISEC ile işbirliğimizi duyurmaktan büyük mutluluk duyuyoruz!",
    },
    {
      img: talkversityPhoto,
      alt: "talkversity fotoğrafı",
      title: "Talkversity",
      desc: "AYBÜ mezunlarımızın eğitim hayatı ve kariyerleri üzerine konuşup ilham aldığımız etkinlik serimiz YouTube kanalımızda!",
    },
  ],
  [
    {
      img: hidrojenPhoto,
      alt: "hidrojen yüzyılı fotoğrafı",
      title: "Hidrojen Yüzyılı",
      desc: "TENMAK başkanı ve AYBÜ profesörleriyle hidrojenin gelecekteki rolünün konuşulduğu panelimiz.",
    },
    {
      img: partiPhoto,
      alt: "parti fotoğrafı",
      title: "Future Fusion of Sci-Tech'12",
      desc: "Parti.",
    },
  ],
];

const SummarySection = () => {
  return (
    <AnimatedItem>
      <section className="summary container">
        <div className="big-title section-title">NELER YAPTIK</div>
        <div className="summary-slider">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={35}
            speed={800}
            slidesPerView={1}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              680: { slidesPerView: 2 },
              1150: { slidesPerView: 3 },
            }}
          >
            {slideData.map((group, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide column ${
                  index % 2 === 1 ? "even" : ""
                }`}
              >
                {group.map((item, i) => (
                  <article key={i} className="summary-item">
                    <img src={item.img} alt={item.alt} />
                    <div className="subtitle">{item.title}</div>
                    <div className="description">{item.desc}</div>
                  </article>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev">
            <FaArrowLeft className="i" />
          </div>
          <div className="swiper-button-next">
            <FaArrowRight className="i" />
          </div>
        </div>
      </section>
    </AnimatedItem>
  );
};

export default SummarySection;
