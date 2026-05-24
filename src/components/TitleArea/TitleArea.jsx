import AnimatedItem from "../AnimatedItem";
import "./TitleArea.scss";

const TitleArea = ({ title = "BİLİM VE TEKNOLOJİ TOPLULUĞU" }) => {
  return (
    <AnimatedItem className="title-area">
      <img src="/media/logo-no-text.png" alt="biltek logo" />
      <img src="/media/logo-no-text.png" alt="biltek logo" />
      <div className="bigger-title">{title}</div>
    </AnimatedItem>
  );
};

export default TitleArea;
