import SocialMediaGroup from "../SocialMediaGroup/SocialMediaGroup";
import AnimatedItem from "../AnimatedItem";
import "./Footer.scss";

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const btn = e.currentTarget;
    btn.classList.add("animate");

    setTimeout(() => {
      btn.classList.remove("animate");
      window.open("https://linktr.ee/biltek?fbclid=...", "_blank");
    }, 400);
  };

  return (
    <AnimatedItem className="footer">
      <div className="text-button-container">
        <div className="text">
          Geleceğe açılan kapıya bilim ve teknoloji ışığında sen de bir adım at!
        </div>
        <button className="button" onClick={handleClick}>
          BİLTEK'li Ol
        </button>
      </div>

      <div className="container-logo-icons">
        <div className="logo">
          <img src="/media/logo-text.png" alt="biltek logo" />
        </div>
        <div className="text">
          <p id="text1">AYBÜ Bilim ve Teknoloji Topluluğu</p>
          <p id="text2">© 2024 AYBÜ BİLTEK. Tüm hakları saklıdır.</p>
        </div>

        <SocialMediaGroup
          className="wrapper"
          instagram="https://www.instagram.com/aybubiltek/"
          youtube="https://www.youtube.com/c/ybubiltek"
          twitter="https://x.com/aybubiltek"
          linkedin="https://www.linkedin.com/company/aybubiltek/posts/?feedView=all"
        />
      </div>
    </AnimatedItem>
  );
};

export default Footer;
