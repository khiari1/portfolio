import React from 'react';
import styles from './About.module.scss';
import { FaGraduationCap, FaSchool, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h1 className={styles.heading}>About Me</h1>
                <div className={styles.aboutMe}>
                    <div className={styles.aboutMeImage}>
                        <img src="/images/aymen2.png" alt="KHIARI Aymen" className={styles.image} />
                    </div>
                    <div className={styles.aboutMeText}>
                        <p className={styles.description}>
                            Hi 👋 , I am Khiari Aymen, I am 23 years old.
                        </p>
                        <p className={styles.description}>
                            I am a fourth-year engineer specializing in Business Intelligence 📊, passionate about .NET software development 🌐 and Angular ⚛️. I have worked on Full Stack 💻 and BI 📈 projects, creating solutions from data collection to web application implementation. My academic journey and internships have enabled me to develop technical 🛠️ and analytical 📉 expertise that I am eager to apply.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h1 className={styles.heading}>Academic Background</h1>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineIcon}>
                            <FaGraduationCap />
                        </div>
                        <div className={styles.timelineContent}>
                            <h3>Engineering Degree in Computer Science</h3>
                            <p>ESPRIT (Ecole Supérieure Privée d’ingénierie et de Technologie)</p>
                            <span>September 2022 - July 2025, Tunis, Tunisia</span>
                            <p>Specialized in data analysis and visualization and information systems.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineIcon}>
                            <FaSchool />
                        </div>
                        <div className={styles.timelineContent}>
                            <h3>Bachelor's Degree in Electronics, Electrotechnics, and Automation</h3>
                            <p>FST (Faculty of Sciences of Tunis)</p>
                            <span>September 2019 - July 2022, Tunis, Tunisia</span>
                            <p>Industrial computing and embedded systems.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineIcon}>
                            <FaProjectDiagram />
                        </div>
                        <div className={styles.timelineContent}>
                            <h3>Baccalaureate in Technical Sciences</h3>
                            <p>Lycée Et Chebbi</p>
                            <span>September 2018 - July 2019, Tunis, Tunisia</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h1 className={styles.heading}>Certificates</h1>
                <div className={styles.certificates}>
                    <div className={styles.certificate}>
                        <img src="/images/1.png" alt="Service-Oriented Architecture Certificate" />
                        <h3>Service-Oriented Architecture</h3>
                        <p>Issued by University of Alberta in November 2023. Certificate ID: 7WSEU8837BTJ. Description: Web services, Representational State Transfer (REST), Service-Oriented Architecture (SOA), Microservices.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/2.png" alt="HTML5 Essentials Certificate" />
                        <h3>HTML5 Essentials</h3>
                        <p>Issued by LinkedIn in July 2022. Certificate ID: AVgTXo9FKzKurwzyuuV01J6IBHk-  Description: Fundamental concepts of HTML5.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/3.png" alt="Programming Foundations Certificate" />
                        <h3>Programming Foundations</h3>
                        <p>Issued by LinkedIn in June 2022. Certificate ID: AYmI8k5WQ8FdPNZC8qBCndWO3LM. Description: Basics of programming principles.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/4.png" alt="Data Visualization With Power BI Certificate" />
                        <h3>Data Visualization With Power BI</h3>
                        <p>Issued by Great Learning Academy in October 2023. Expiry Date: October 2023.Description: Data visualization techniques using Power BI.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
