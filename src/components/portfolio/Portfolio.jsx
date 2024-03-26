import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const items = [
  {
    id: 1,
    title: "E-Commerce-Webanwendung",
    img: [
      "ecommerce1.png",
      "ecommerce2.png",
      "ecommerce3.png",
      "ecommerce4.png",
      "ecommerce5.png",
      "ecommerce6.png",
      "ecommerce7.png",
    ],
    desc: "Entwicklung einer eigenständigen E-Commerce-Webanwendung mit integrierter Stripe-Zahlungsplattform für sichere und reibungslose Transaktionen. Die Plattform bietet eine Vielzahl von Kosmetikprodukten und Elektromaterialien wie Haartrockner, Haarmaschinen, Shampoos und Cremes usw. an. Die Anwendung ist vollständig responsiv.",
    link: "https://github.com/yassel998/hairstyle-aesthetics-ecommerce",
    tech: "React, SCSS, Redux Toolkit, Strapi (CMS)",
  },
  {
    id: 2,
    title: "Abschlussprojekt-Webanwendung",
    img: [
      "Abschlussprojekt1.png",
      "Abschlussprojekt2.png",
      "Abschlussprojekt3.png",
    ],
    desc: "Mein Abschlussprojekt für den Bachelor umfasst die Entwicklung einer Webanwendung, die zur Verwaltung und Bestätigung von Abschlussprojekten dient. Bei der Planung des Projekts werden UML-Diagramme eingesetzt. Das System ist darauf ausgelegt, vier verschiedene Benutzerrollen zu unterstützen: Professoren, Abteilungsleiter, Studenten und Administratoren. ",
    link: "https://github.com/yassel998/fypManagementPro",
    tech: "React, SCSS, MUI, Formik, Express, MySQL, JWT",
  },
  {
    id: 3,
    title: "Sichere Chat-App",
    img: ["chatApp1.png", "chatApp2.png"],
    desc: "Entwicklung einer sicheren Chat-Anwendung unter Verwendung der AES-Verschlüsselung (Advanced Encryption Standard ) für Datenschutz und Sicherheit.",
    link: "https://github.com/yassel998/secured-chat-application",
    tech: "React, Java",
  },
  {
    id: 4,
    title: "Aktivitätsberichts-Webanwendung",
    img: ["activity2.png", "activity1.png", "activity3.png"],
    desc: (
      <div>
        Entwicklung einer Webanwendung zur Erstellung von Aktivitätsberichten
        mit integrierter Funktion zur Erfassung von Arbeitstagen. Automatische
        Auslassung von Wochenenden und Feiertagen mithilfe der API
        'api.gouv.fr'. Die Anwendung bietet außerdem Administratoren die
        Möglichkeit, Mitarbeiter und Projekte zu verwalten. <br />
        *Die Arbeitstagtabelle ist die ältere Version und wird verbessert,
        während ich an einem besseren UI/UX arbeite.
      </div>
    ),
    link: "https://github.com/yassel998/activity-report-pro",
    tech: "React, SCSS, MUI, Express.js, MySQL",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <Carousel showThumbs={false} autoPlay infiniteLoop stopOnHover>
              {item.img.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))}
            </Carousel>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <span>Tech : {item.tech}</span>
            {/* <button>Code</button> */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Code</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Meine Projekte</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
