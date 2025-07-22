import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import TitleArea from "../../components/TitleArea/TitleArea";
import "./TextPage.scss";
import setPageTitle from "../../hooks/setPageTitle";

const TextPage = () => {
  const { type, id } = useParams();
  const [data, setData] = useState(null);
  const [others, setOthers] = useState([]);
  const [error, setError] = useState("");
  const isArticle = type === "Makaleler";

  setPageTitle(data?.title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = isArticle
          ? "/articles.json"
          : "/announcements.json";

        const res = await fetch(endpoint);
        const items = await res.json();

        const selected = items[parseInt(id) - 1];
        if (!selected) {
          setError("İçerik bulunamadı.");
          return;
        }

        setData(selected);
        setOthers(items.slice(0, 8).filter((_, i) => i !== parseInt(id) - 1));

        ScrollReveal().reveal(".left-box, .right-box", {
          delay: 700,
          interval: 700,
        });
      } catch (err) {
        console.error(err);
        setError("Veri çekilirken bir hata oluştu.");
      }
    };

    fetchData();
    ScrollReveal().reveal(".title-area");
  }, [id, type]);

  if (error) return <div className="system-message error-message">{error}</div>;
  if (!data) return null;

  return (
    <>
      <TitleArea title={isArticle ? "MAKALELER" : "DUYURULAR"} />

      <section className="white-container text-page__container">
        <div className="container ender">
          <div className="left-box load-hidden">
            <div className={`content${!isArticle ? " announcement-content" : ""}`}>
              {isArticle && (
                <div className="author">
                  <img
                    src={data.authorLogo}
                    alt="author-logo"
                    className="logo"
                  />
                  <div className="name">{data.authorName}</div>
                  <div className="article-date">{data.date}</div>
                </div>
              )}

              <div className="text-area">
                <div className="subtitle">{data.title}</div>
                {!isArticle && (
                  <div className="announcement-date">{data.date}</div>
                )}
                <div className="aa-text">{isArticle ? data.articleItself : data.announcementItself}</div>
              </div>
            </div>
          </div>

          <div className="right-box load-hidden">
            <div className="subtitle">
              {isArticle ? "Diğer Makaleler" : "Diğer Duyurular"}
            </div>

            <div className="others">
              {others.map((item, index) => (
                <Link
                  key={index}
                  to={`/${type}/${index + 1}`}
                  className="item aa-link"
                >
                  <img
                    src={
                      isArticle ? item.authorLogo : "/media/logo-no-text.png"
                    }
                    alt="thumbnail"
                  />
                  <div className="title">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextPage;
