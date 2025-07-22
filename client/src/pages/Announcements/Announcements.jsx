import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleArea from "../../components/TitleArea/TitleArea";
import setPageTitle from "../../hooks/setPageTitle";
import "./Announcements.scss";
import AnimatedItem from "../../components/AnimatedItem";

const cutDescription = (description) => {
  return description.length > 90
    ? description.substring(0, 80) + "..."
    : description;
};

const Announcements = () => {
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  setPageTitle("BİLTEK Duyurular");

  useEffect(() => {
    fetch("/announcements.json")
      .then((res) => res.json())
      .then((data) => {
        setAllAnnouncements(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Görüntülenecek duyuru yok. Henüz...");
        setIsLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleAnnouncements = allAnnouncements.slice(0, visibleCount);
  const hasMore = visibleCount < allAnnouncements.length;

  return (
    <>
      <TitleArea title="DUYURULAR" />
      <section className="white-container">
        <div className="announcements-container container ender">
          <div className="announcements">
            {visibleAnnouncements.length > 0 ? (
              visibleAnnouncements.map((announcement, index) => (
                <AnimatedItem
                  hasInterval={true}
                  motionIndex={index + 1}
                  delay={0.6}
                  key={index}
                  className="announcement"
                >
                  <div className="img-container">
                    <img src={announcement.photo} alt="duyuru fotoğrafı" />
                  </div>

                  <div className="content">
                    <p className="content-title">{announcement.title}</p>
                    <p className="content-description">
                      {cutDescription(announcement.announcementItself)}
                    </p>
                    <div className="info">
                      <div className="when">
                        <i className="fa-regular fa-clock"></i>
                        <p>{announcement.date}</p>
                      </div>
                      <Link
                        to={`/Duyurular/${index + 1}`}
                        className="announcement-link"
                      >
                        Devamı
                      </Link>
                    </div>
                  </div>
                </AnimatedItem>
              ))
            ) : (
              <div className="page-placeholder__white"></div>
            )}
          </div>

          {hasMore && (
            <AnimatedItem delay={0.6} className="load-more-wrapper">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Daha Fazla
              </button>
            </AnimatedItem>
          )}

          {error && <AnimatedItem>{error}</AnimatedItem>}
        </div>
      </section>
    </>
  );
};

export default Announcements;
