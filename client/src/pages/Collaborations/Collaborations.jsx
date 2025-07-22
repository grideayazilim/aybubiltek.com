import TitleArea from "../../components/TitleArea/TitleArea";
import setPageTitle from '../../hooks/setPageTitle';
import Collaborators from '../../components/Collaborators/Collaborators';
import "./Collaborations.scss";

const Collaborations = () => {
  setPageTitle("İş Birliklerimiz");

  return (
    <>
      <TitleArea title="İŞ BİRLİKLERİMİZ" />
      <section className="white-container container ender">
        <Collaborators />
      </section>
    </>
  );
};

export default Collaborations;
