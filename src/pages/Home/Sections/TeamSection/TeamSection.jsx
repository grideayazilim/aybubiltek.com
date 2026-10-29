import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedItem from "../../../../components/AnimatedItem";
import "./TeamSection.scss";
import { fetchActiveTeams } from "../../../../utils/teams";

const breakpoints = {
  0: { slidesPerView: 1.2 },
  576: { slidesPerView: 1.8 },
  876: { slidesPerView: 2.6 },
  1101: { slidesPerView: 3 },
  1484: { slidesPerView: 3.2 },
};

// Ortalanmış loop modunda Swiper, görünen slaytların iki yanında yedek slayt ister.
// Yetmezse döngü bozulur ve kaydırıcı uçlarda takılır. Swiper'ın loopFix hesabıyla aynı.
const minLoopSlides = Math.max(
  ...Object.values(breakpoints).map(({ slidesPerView }) => {
    let visible = Math.ceil(slidesPerView);
    if (visible % 2 === 0) visible += 1;
    return visible + Math.ceil(visible / 2);
  }),
);

// Aktif takım sayısı her yıl değişir; liste döngüye yetecek kadar tekrarlanır
const repeatForLoop = (items) => {
  if (items.length === 0) return items;
  const copies = Math.ceil(minLoopSlides / items.length);
  return Array.from({ length: copies }, () => items).flat();
};

const TeamSection = () => {
  // teams.json'daki aktif takımlar
  const [teams, setTeams] = useState([]);
  const slides = repeatForLoop(teams);

  useEffect(() => {
    fetchActiveTeams()
      .then(setTeams)
      .catch((err) => console.error("Takımlar alınamadı:", err));
  }, []);

  return (
    <AnimatedItem>
      <section className="team-area">
        <div className="container">
          <div className="big-title">TAKIMLARIMIZ</div>
          <div className="swiper team-area-slider">
            {slides.length > 0 && (
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
                breakpoints={breakpoints}
              >
                {slides.map((team, index) => (
                  <SwiperSlide
                    key={index}
                    className={`swiper-slide team-area-slide${
                      team.mostHeight ? " most-height" : ""
                    }`}
                  >
                    <div className="team-area-slide-img">
                      <img src={team.logo} alt="takım logosu" />
                    </div>
                    <p className="subtitle">{team.name}</p>
                    <div className="team-description">{team.summary}</div>
                    <Link to={`/takim/${team.key}`} className="animated-button">
                      Daha Fazla
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>
    </AnimatedItem>
  );
};

export default TeamSection;
