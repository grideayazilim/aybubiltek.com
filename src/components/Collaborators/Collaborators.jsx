import AnimatedItem from "../AnimatedItem";
import "./Collaborators.scss";

const collaborators = [
  {
    href: "https://aiesec.org.tr/",
    src: "media/collaboration-logos/aisec.png",
    alt: "aisec logosu",
  },
  {
    href: "https://www.qampusapp.com/",
    src: "media/collaboration-logos/qampus.png",
    alt: "qampus logosu",
  },
  {
    href: "https://chocolabs.com.tr/",
    src: "media/collaboration-logos/choco-labs.jpg",
    alt: "chocolabs logosu",
  },
  {
    href: "https://www.colombiacoffeetr.com.tr/",
    src: "media/collaboration-logos/colombia-coffee.jpg",
    alt: "colombia coffee logosu",
  },
  {
    href: "https://www.coffeedemadrid.com.tr/",
    src: "media/collaboration-logos/madrid.png",
    alt: "coffee de madrid logosu",
  },
  {
    href: "https://www.instagram.com/meet.n.study/",
    src: "media/collaboration-logos/meet-n-study.png",
    alt: "meetnstudy logosu",
  },
  {
    href: "https://cartoonlabcoffee.com/",
    src: "media/collaboration-logos/cartoon-lab.jpg",
    alt: "cartoon lab coffee logosu",
  },
  {
    href: "https://ezgicafe.dijital.menu/",
    src: "media/collaboration-logos/ezgi-cafe.jpg",
    alt: "ezgi cafe logosu",
  },
  {
    href: "https://www.instagram.com/fafello.ankara/",
    src: "media/collaboration-logos/fafello.png",
    alt: "fafello logosu",
  },
  {
    href: "https://www.instagram.com/koicoffeetaiyaki/?hl=bn",
    src: "media/collaboration-logos/koi.png",
    alt: "koi coffee logosu",
  },
  {
    href: "https://www.zaytungzone.com/",
    src: "media/collaboration-logos/zaytung-zone.png",
    alt: "zaytung zone logosu",
  },
];

const Collaborators = () => {
  return (
    <div className="collaborators">
      {collaborators.map((item, index) => (
        <AnimatedItem
          hasInterval={true}
          motionIndex={index + 1}
          delay={0.8}
          key={index}
          className="collaborator"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.src} alt={item.alt} />
        </AnimatedItem>
      ))}
    </div>
  );
};

export default Collaborators;
