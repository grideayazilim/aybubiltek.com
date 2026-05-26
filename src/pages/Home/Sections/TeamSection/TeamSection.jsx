import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Link } from "react-router-dom";
import AnimatedItem from "../../../../components/AnimatedItem";
import "./TeamSection.scss";

const teamInfos = [
  {
    name: "Typhoon",
    image: "media/team-logos/typhoon.png",
    desc: "TEKNOFEST Helikopter Tasarım Yarışması’nda yenilikçi çözümler üretir ve öğrencilerin mühendislik becerilerini geliştirmeye öncülük eder.",
    path: "typhoon-helikopter",
  },
  {
    name: "Biltek AI",
    image: "media/team-logos/biltekai.png",
    desc: "Yapay zeka alanında farkındalık yaratan projeler, eğitimler ve araştırmalar ortaya koyarak üyelerine ve topluma fayda sağlamayı amaçlar.",
    path: "biltek-ai",
  },
  {
    name: "BiltekCyber",
    image: "media/team-logos/biltekcyber.png",
    desc: "Geleceğin dünyası Siber dünyanın dinamiklerini merak mı ediyorsun? BiltekCyber ile bu yeni dünyada kendini nasıl koruyacağını öğren.",
    path: "biltek-cyber",
  },
  {
    name: "Gridea",
    image: "media/team-logos/gridea.png",
    desc: 'Web alanında nitelikli frontend ve backend eğitimi verir. Onların tabiriyle: "Kodla site boyayıp tablolara bağlıyoruz arkadaşlar, gelin."',
    path: "gridea",
    mostHeight: true,
  },
  {
    name: "Yıldırım Team",
    image: "media/team-logos/yildirim-team.png",
    desc: "Projelerinde mükemmelliği hedefleyerek ulusal ve uluslararası yarışmalarda üstün performans sergilemeye odaklıdır.",
    path: "yildirim-team",
  },
  {
    name: "Stride",
    image: "media/team-logos/stride.png",
    desc: "BİLTEK'in yepyeni oyun geliştirme takımı. Hayal gücü bu takımda gerçekliğe dönüşüyor.",
    path: "stride",
  },
];

const TeamSection = () => {
  return (
    <AnimatedItem>
      <section className="team-area">
        <div className="container">
          <div className="big-title">TAKIMLARIMIZ</div>
          <div className="swiper team-area-slider">
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              centeredSlides={true}
              loop={true}
              slidesPerView={3.2}
              speed={500}
              autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                576: { slidesPerView: 1.8 },
                876: { slidesPerView: 2.6 },
                1101: { slidesPerView: 3 },
                1484: { slidesPerView: 3.2 },
              }}
            >
              {teamInfos.map((team, index) => (
                <SwiperSlide
                  key={index}
                  className={`swiper-slide team-area-slide${
                    team.mostHeight ? " most-height" : ""
                  }`}
                >
                  <div className="team-area-slide-img">
                    <img src={team.image} alt="takım logosu" />
                  </div>
                  <p className="subtitle">{team.name}</p>
                  <div className="team-description">{team.desc}</div>
                  <Link to={`/takim/${team.path}`} className="animated-button">
                    Daha Fazla
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </AnimatedItem>
  );
};

export default TeamSection;
