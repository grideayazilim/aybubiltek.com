import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SocialMediaGroup from "../../components/SocialMediaGroup/SocialMediaGroup";
import MemberCard from "../../components/MemberCard/MemberCard";
import setPageTitle from "../../hooks/setPageTitle";
import AnimatedItem from "../../components/AnimatedItem";
import AnimatedImage from "../../components/AnimatedImage";
import "./TeamPage.scss";

const TeamPage = () => {
  const { teamName } = useParams();
  const [teamData, setTeamData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  setPageTitle(teamData?.name || "Takım Sayfası");

  useEffect(() => {
    fetch("/teams.json")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find(
          (team) => team.key.toLowerCase() === teamName.toLowerCase()
        );
        setTeamData(matched);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Veri alınamadı:", err);
        setIsLoading(false);
      });
  }, [teamName]);

  useEffect(() => {
    if (!teamData) return;

    const timeout = setTimeout(() => {
    }, 100); // DOM otursun

    return () => clearTimeout(timeout);
  }, [teamData]);

  if (!teamData) return <div className="page-placeholder"></div>;

  return (
    <>
      {isLoading && <div className="page-placeholder"></div>}

      <section className="sub-landing-page">
        <AnimatedImage
          src="/media/bg-logo.png"
          className="bg-image"
          opacity={0.04}
        />

        <AnimatedItem className="container" origin="bottom" delay={1}>
          <div className="content">
            <div className="team-logo">
              <img
                className="team-logo-img"
                src={teamData.logo}
                alt="takım logosu"
              />
            </div>
            <div className="main-description">
              <div className="big-title">{teamData.name}</div>
              <div className="descriptions-wrapper">
                {teamData.descriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          </div>

          <SocialMediaGroup
            instagram={teamData.social[0].instagram}
            youtube={teamData.social[0].youtube}
            twitter={teamData.social[0].twitter}
            linkedin={teamData.social[0].linkedin}
          />
        </AnimatedItem>
      </section>

      <section className="white-container team-container">
        <div className="container ender">
          {teamData.achievements?.length > 0 && (
            <AnimatedItem className="achievements">
              <div className="big-title">Neler Yaptık</div>
              <Swiper
                className="achievements-slider"
                modules={[Pagination, Navigation]}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                spaceBetween={8}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {teamData.achievements.map((ach, i) => (
                  <SwiperSlide key={i} className="achievements__card">
                    <img
                      src={ach.image}
                      alt={ach.title}
                      className="achievements__img"
                    />
                    <div className="achievements__title subtitle">
                      {ach.title}
                    </div>
                    <div className="achievements__description">
                      {ach.description}
                    </div>
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
            </AnimatedItem>
          )}

          {["leader", "core", "retired"].map((type) => {
            const members = teamData.members.filter((m) => m.type === type);
            if (members.length === 0) return null;
            const titleMap = {
              leader: "Kaptanlar Ve Core Team Üyeleri",
              core: null,
              retired: "Emeği Geçenler...",
            };
            return (
              <div
                className={`members-container ${
                  type === "retired" ? "retireds-outer-container" : ""
                }`}
                key={type}
              >
                {titleMap[type] && (
                  <AnimatedItem className="big-title">{titleMap[type]}</AnimatedItem>
                )}
                <div
                  className={`members ${
                    type === "core"
                      ? "cores"
                      : type === "retired"
                      ? "retireds"
                      : "leaders"
                  }`}
                >
                  {members.map((member, i) => (
                    <MemberCard key={i} member={member} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TeamPage;
