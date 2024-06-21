"use client";

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [targetSection, setTargetSection] = useState(null);
    const pathname = usePathname();
    const router = useRouter();
    const button = useRef(null);

    useEffect(() => {
      if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        });
    }, []);

    useEffect(() => {
        if (pathname === '/' && targetSection) {
            scrollToSection(targetSection);
            setTargetSection(null);
        }
    }, [pathname]);

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigation = (section) => {
        if (pathname === '/') {
            scrollToSection(section);
        } else {
            setTargetSection(section);
            router.push('/');
        }
    };

    const navigateToAbout = () => {
        router.push('/about');
    };

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.RecodeBy}>ReCode by</p>
                    <p className={styles.khiari}>KHIARI</p>
                </div>
            </div>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el} onClick={() => handleNavigation('home')}>
                        <a>Home</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el} onClick={() => handleNavigation('work')}>
                        <a>Work</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el} onClick={navigateToAbout}>
                        <a>About</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el} onClick={() => handleNavigation('contact')}>
                        <a>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    );
}
