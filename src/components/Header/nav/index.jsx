import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import Rounded from '../../../common/RoundedButton';
import Magnetic from '../../../common/Magnetic';

const navItems = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "Work",
    id: "work",
  },
  {
    title: "About",
    id: "about",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

export default function Index() {
  const path = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(path);
  const router = useRouter();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('work');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === "work") {
      scrollToProjects();
    } else if (sectionId === "contact") {
      scrollToContact();
    } else if (sectionId === "about") {
      router.push('/about');
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleClick = (id) => {
    setSelectedIndicator(id);
    scrollToSection(id);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(path); }} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Magnetic key={index}>
              <div
                className={styles.el}
                onClick={() => handleClick(data.id)}
              >
                <a>{data.title}</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
