import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import "./SocialMediaGroup.scss";

const SocialMediaGroup = ({
  instagram = "#",
  youtube = "#",
  twitter = "#",
  linkedin = "#",
}) => {
  const links = [
    {
      name: "Instagram",
      href: instagram,
      icon: <FaInstagram className="i" />,
    },
    {
      name: "Youtube",
      href: youtube,
      icon: <FaYoutube className="i" />,
    },
    {
      name: "X",
      href: twitter,
      icon: <FaXTwitter className="i" />,
    },
    {
      name: "Linkedin",
      href: linkedin,
      icon: <FaLinkedin className="i" />,
    },
  ];

  return (
    <div className="social-media-area">
      {links
        .filter((link) => link.href !== "#")
        .map((link) => (
          <a
            key={link.name}
            target="_blank"
            href={link.href}
            className="social-media-button"
            rel="noopener noreferrer"
            onMouseEnter={(e) => {
              const text = e.currentTarget.querySelector(".social-text");
              text.style.width = text.scrollWidth + "px";
            }}
            onMouseLeave={(e) => {
              const text = e.currentTarget.querySelector(".social-text");
              text.removeAttribute("style");
            }}
          >
            <div className="icon">{link.icon}</div>
            <p className="social-text">{link.name}</p>
          </a>
        ))}
    </div>
  );
};

export default SocialMediaGroup;
