import { useEffect, useState } from "react";
import "./Articles.scss";
import TitleArea from "../../components/TitleArea/TitleArea";
import setPageTitle from "../../hooks/setPageTitle";
import AnimatedItem from "../../components/AnimatedItem";
import AnimatedLink from "../../components/AnimatedLink";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  setPageTitle("BİLTEK Makaleler");

  useEffect(() => {

    fetch("/articles.json")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Görüntülenecek makale yok. Henüz...");
        setIsLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <>
      <TitleArea title="MAKALELER" />
      <section className="white-container">
        <div className="articles container ender">
          {visibleArticles.map((article, index) => (
            <AnimatedLink
              hasInterval={true}
              origin="left"
              motionIndex={index + 1}
              delay={0.6}
              to={`/Makaleler/${index + 1}`}
              key={index}
              className="content-box article-link"
            >
              <div className="left-area">
                <div className="date">{article.date}</div>
                <div className="vertical-line"></div>
                <div className="title">{article.title}</div>
              </div>
              <div className="right-area">
                <div className="horizontal-line"></div>
                <div className="author">{article.authorName}</div>
              </div>
            </AnimatedLink>
          ))}
          {hasMore && (
            <div className="load-more-wrapper">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Daha Fazla
              </button>
            </div>
          )}
          {error && <AnimatedItem>{error}</AnimatedItem>}
        </div>
      </section>
    </>
  );
};

export default Articles;