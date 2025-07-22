import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import TitleArea from "../../components/TitleArea/TitleArea";
import "./Gallery.scss";
import AnimatedItem from "../../components/AnimatedItem";

const galleries = [
  {
    title: "2024-2025 Galerisi",
    images: [
      {
        src: "media/gallery/2024-2025/img1.jpg",
        description: "BTK Teknik Gezisi'nden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img2.jpg",
        description: "BTK Teknik Gezisi'nden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img3.jpg",
        description: "BTK Teknik Gezisi'nden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img4.jpg",
        description: "BTK Teknik Gezisi'nden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img5.jpg",
        description: "BTK Teknik Gezisi'nden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img6.jpg",
        description: "Tanışma kahvesinde Biltek.",
      },

      {
        src: "media/gallery/2024-2025/img7.jpg",
        description:
          "Başkanımız, başkan yardımcımız ve etkinlik koordinatörlüğünden bir üyemiz; tanışma kahvesinde Biltek kartlarını dağıtıyor.",
      },

      {
        src: "media/gallery/2024-2025/img8.jpg",
        description: "Tanışma kahvesinden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img9.jpg",
        description:
          "Üyelerimiz, ayrıcalıklı Biltek kartlarını almak için bekliyor.",
      },

      {
        src: "media/gallery/2024-2025/img10.jpg",
        description:
          "Etkinlik ve İletişim-Medya direktörlerimiz üyelerle konuşuyor.",
      },

      {
        src: "media/gallery/2024-2025/img11.jpg",
        description: "Tanışma kahvesinden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img12.jpg",
        description: "Tanışma kahvesinden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img15.jpg",
        description:
          "Yıldırım Team, Gridea Tasarım ve BiltekCyber kaptanlarımız bir arada.",
      },

      {
        src: "media/gallery/2024-2025/img16.jpg",
        description: "Tanışma kahvesinden bir kare.",
      },

      {
        src: "media/gallery/2024-2025/img17.jpg",
        description:
          "Etkinlik Koordinatörümüz üyelerle konuşmaya hazırlanıyor.",
      },

      {
        src: "media/gallery/2024-2025/img19.jpg",
        description: "Sponsorluk Direktörümüz üyelerle beraber.",
      },

      {
        src: "media/gallery/2024-2025/img20.jpg",
        description:
          "Yıldırım Team kaptanlarından bir üyemiz, yeni üyelerle beraber.",
      },

      {
        src: "media/gallery/2024-2025/img21.jpg",
        description: "Typhoon Helikopter kaptanımız üyelerle konuşuyor.",
      },

      {
        src: "media/gallery/2024-2025/img22.jpg",
        description: "Gridea Yazılım ekibimiz.",
      },

      {
        src: "media/gallery/2024-2025/img23.jpg",
        description: "BiltekAI kaptanımız üyelerle konuşuyor.",
      },

      {
        src: "media/gallery/2024-2025/img24.jpg",
        description: "BiltekCyber kaptanımız üyelerle konuşuyor.",
      },

      {
        src: "media/gallery/2024-2025/img25.jpg",
        description:
          "Typhoon Helikopter kaptan yardımcımız üyelerle konuşuyor.",
      },

      {
        src: "media/gallery/2024-2025/img26.jpg",
        description:
          "Başkan yardımcımız ayrıcalıklı Biltek kartlarını dağıtıyor.",
      },

      {
        src: "media/gallery/2024-2025/img27.jpg",
        description: "BiltekAI ekibinden arkadaşlarımız.",
      },

      {
        src: "media/gallery/2024-2025/img28.jpg",
        description: "Yıldırım Team kaptanlarımız üyelerle konuşuyor.",
      },

      {
        src: "media/gallery/2024-2025/img29.jpg",
        description: "Gridea Yazılım ekibinden arkadaşlarımız.",
      },

      {
        src: "media/gallery/2024-2025/img30.jpg",
        description:
          "Yıldırım Team kaptanlarından bir üyemiz, yeni üyelere bilgi veriyor.",
      },

      {
        src: "media/gallery/2024-2025/img31.jpg",
        description: "Gridea Yazılım kaptanımız üyelerle beraber.",
      },

      {
        src: "media/gallery/2024-2025/img32.jpg",
        description: "Yönetim kurulundan arkadaşlarımız tanışma toplantısında.",
      },

      {
        src: "media/gallery/2024-2025/img33.jpg",
        description: "Yönetim kurulumuz tanışma toplantısında.",
      },

      {
        src: "media/gallery/2024-2025/img34.jpg",
        description: "Yıldırım Team, tanışma toplantısında kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2024-2025/img35.jpg",
        description:
          "Typhoon Helikopter, tanışma toplantısında kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2024-2025/img36.jpg",
        description: "Gridea Yazılım, tanışma toplantısında kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2024-2025/img37.jpg",
        description: "BiltekCyber, tanışma toplantısında kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2024-2025/img38.jpg",
        description: "BiltekAI, tanışma toplantısında kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2024-2025/img39.jpg",
        description: "Gridea Tasarım, tanışma toplantısında kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2024-2025/img41.jpg",
        description: "Gridea Yazılım ekibimiz tanışma toplantısında.",
      },

      {
        src: "media/gallery/2024-2025/img43.jpg",
        description: "BiltekAI ekibimiz tanışma toplantısında.",
      },

      {
        src: "media/gallery/2024-2025/img42.jpg",
        description:
          "Yıldırım Team kaptanlarından olan üyemiz, tanışma toplantısında yeni üyelerle birlikte.",
      },

      {
        src: "media/gallery/2024-2025/img44.jpg",
        description: "Gridea tutulması.",
      },
    ],
  },
  {
    title: "2023-2024 Galerisi",
    images: [
      {
        src: "media/gallery/2023-2024/img1.jpg",
        description: "HAVELSAN Teknik Gezisi'nden bir kare.",
      },
      {
        src: "media/gallery/2023-2024/img5.jpg",
        description: "HAVELSAN Teknik Gezisi'ne yolculuk.",
      },
      {
        src: "media/gallery/2023-2024/img2.jpg",
        description: "Hidrojen Yüzyılı etkinliğinden bir kare.",
      },

      {
        src: "media/gallery/2023-2024/img3.jpg",
        description: "Lemon Academy etkinliğinden bir kare.",
      },

      {
        src: "media/gallery/2023-2024/img4.jpg",
        description: "Lemon Academy etkinliğinden bir kare.",
      },

      {
        src: "media/gallery/2023-2024/img6.jpg",
        description: "Tanışma kahvemiz.",
      },

      {
        src: "media/gallery/2023-2024/img7.jpg",
        description:
          "Gridea Tasarım kaptanımız tanışma kahvesinde üyelere bilgi veriyor.",
      },

      {
        src: "media/gallery/2023-2024/img8.jpg",
        description:
          "Departmanımız tanışma kahvesinde ayrıcalıklı üye kartlarını dağıtıyor.",
      },

      {
        src: "media/gallery/2023-2024/img9.jpg",
        description: "Departman direktörlerimiz tanışma kahvesinde.",
      },

      {
        src: "media/gallery/2023-2024/img10.jpg",
        description: "Tanışma kahvesinden bir kare.",
      },

      {
        src: "media/gallery/2023-2024/img11.jpg",
        description:
          "Etkinlik direktörümüz tanışma kahvesinde yeni üyelere bilgi veriyor.",
      },

      {
        src: "media/gallery/2023-2024/img12.jpg",
        description: "Tanışma kahvemizden bir kare.",
      },

      {
        src: "media/gallery/2023-2024/img13.jpg",
        description:
          "Yönetim kurulundan arkadaşlarımız tanışma kahvesinde yeni üyelerle konuşuyor.",
      },

      {
        src: "media/gallery/2023-2024/img14.jpg",
        description: "Tanışma kahvemizden bir kare.",
      },

      {
        src: "media/gallery/2023-2024/img15.jpg",
        description: "2023-2024 Biltek ailesi.",
      },

      {
        src: "media/gallery/2023-2024/img16.jpg",
        description: "2023-2024 tanışma toplantısından bir kare.",
      },

      {
        src: "media/gallery/2023-2024/img17.jpg",
        description: "Etkinlik departmanımız kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2023-2024/img18.jpg",
        description:
          "İletişim ve Sosyal Medya departmanımız kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2023-2024/img19.jpg",
        description: "Sponsorluk departmanımız kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2023-2024/img20.jpg",
        description: "Yıldırım Roket takımımız kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2023-2024/img21.jpg",
        description: "BiltekCyber takımımız kendini tanıtıyor.",
      },

      {
        src: "media/gallery/2023-2024/img22.jpg",
        description: "Gridea Yazılım takımımız kendini tanıtıyor.",
      },
    ],
  },
];

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [activeGallery, setActiveGallery] = useState([]);

  const handleOpen = (images, index) => {
    setActiveGallery(images);
    setOpenIndex(index);
  };

  return (
    <>
      <TitleArea title="GALERİ" />
      <div className="white-container container ender gallery-container">
        {galleries.map((gallery, gIndex) => (
          <AnimatedItem viewport={{ once: true }} delay={0.6} className="photo-section" key={gIndex}>
            <div className="big-title">{gallery.title}</div>

            <div className="photo-area">
              {gallery.images.map((img, i) => (
                <img
                  className="photo-thumbnail"
                  key={i}
                  src={img.src}
                  alt=""
                  onClick={() => handleOpen(gallery.images, i)}
                />
              ))}
            </div>
          </AnimatedItem>
        ))}

        <Lightbox
          open={openIndex >= 0}
          close={() => setOpenIndex(-1)}
          index={openIndex}
          slides={activeGallery}
          plugins={[Thumbnails]}
          thumbnails={{ border: 2, borderColor: "#000" }}
          render={{
            slide: ({ slide }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "40px",
                }}
              >
                <img
                  src={slide.src}
                  alt=""
                  style={{
                    maxHeight: "70vh",
                    maxWidth: "90vw",
                    objectFit: "contain",
                  }}
                />
                <p
                  style={{
                    marginTop: "1rem",
                    textAlign: "center",
                    fontSize: "1rem",
                    color: "#fff",
                  }}
                >
                  {slide.description}
                </p>
              </div>
            ),
          }}
        />
      </div>
    </>
  );
};

export default Gallery;
