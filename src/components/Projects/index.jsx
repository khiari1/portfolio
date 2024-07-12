'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from '../../common/Magnetic/index';

const Card = ({i, title, description, description2, description3, src, link, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer} id='work'>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <p>{description2}</p>
            <p>{description3}</p>
            {title === "Contact" && (
              <div className={styles.contactLinks}>
                <button
                  onClick={() => window.open('mailto:aymenkhiari106@gmail.com')}
                  className={styles.emailButton}
                >
                  Envoyer un mail
                </button>
                <div className={styles.socialLinks}>
                  <Magnetic>
                    <a href='https://www.linkedin.com/in/aymen-khiari-047280203/' target='_blank'>
                      <Image src="/images/linkedin.png" alt="LinkedIn" width={30} height={30} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href='https://github.com/khiari1' target='_blank'>
                      <Image src="/images/github.png" alt="GitHub" width={30} height={30} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href='https://x.com/KhiariAymen106' target='_blank'>
                      <Image src="/images/x.png" alt="X" width={30} height={30} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href='https://drive.google.com/file/d/1IfVpT8vAdVIJ5Te1lX13CX4KBT0INhaV/view?usp=sharing' target='_blank'>
                      <Image src="/images/resume.png" alt="Resume" width={30} height={30} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href='tel:+21626895867' target='_blank'>
                      <Image src="/images/phone.png" alt="Phone" width={30} height={30} />
                    </a>
                  </Magnetic>
                </div>
              </div>
            )}
          </div>
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt="image" 
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card;