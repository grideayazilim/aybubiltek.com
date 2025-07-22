import { useEffect, useState } from "react";
import MemberCard from "../../components/MemberCard/MemberCard";
import TitleArea from "../../components/TitleArea/TitleArea";
import setPageTitle from "../../hooks/setPageTitle";
import AnimatedItem from "../../components/AnimatedItem";
import "./BoardMembers.scss";

const BoardMembers = () => {
  setPageTitle("Yönetim Ekibimiz");

  const [boardData, setBoardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/board-members.json")
      .then((res) => res.json())
      .then((json) => {
        setBoardData(json);

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Veri çekme hatası:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <TitleArea title="YÖNETİM EKİBİMİZ" />
      <section className="white-container">
        <div className="container members-container ender">
          {isLoading && <div className="page-placeholder__white"></div>}
          {!isLoading &&
            boardData.map((section) => (
              <>
                <AnimatedItem className="big-title" delay={0.6}>
                  {section.section}
                </AnimatedItem>
                <div className="members">
                  {section.members.map((member, i) => (
                    <MemberCard index={i} key={i} member={member} />
                  ))}
                </div>
              </>
            ))}
        </div>
      </section>
    </>
  );
};

export default BoardMembers;
