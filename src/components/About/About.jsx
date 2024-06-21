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
                            Salut 👋 , je suis Khiari Aymen, j'ai 23 ans.
                        </p>
                        <p className={styles.description}>
                            Je suis un ingénieur en quatrième année spécialisé en Business Intelligence 📊, passionné par le développement logiciel en .NET 🌐 et Angular ⚛️. J'ai travaillé sur des projets Full Stack 💻 et en BI 📈, créant des solutions de la collecte de données à la mise en œuvre d'applications web. Mon parcours académique et mes stages m'ont permis de développer une expertise technique 🛠️ et analytique 📉 que je suis impatient d'appliquer.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h1 className={styles.heading}>Academic background</h1>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineIcon}>
                            <FaGraduationCap />
                        </div>
                        <div className={styles.timelineContent}>
                            <h3>Diplôme d’ingénieur en Informatique </h3>
                            <p>ESPRIT (Ecole Supérieure Privée d’ingénierie et de Technologie)</p>
                            <span>Septembre 2022 - Juillet 2025, Tunis, Tunisie</span>
                            <p>Spécialité analyse et visualisation de données et systèmes d’information.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineIcon}>
                            <FaSchool />
                        </div>
                        <div className={styles.timelineContent}>
                            <h3>Licence en Electronique, Electrotechnique et Automatique</h3>
                            <p>FST (Faculté des Sciences de Tunis)</p>
                            <span>Septembre 2019 - Juillet 2022, Tunis, Tunisie</span>
                            <p>Informatique industrielle et système embarqué.</p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineIcon}>
                            <FaProjectDiagram />
                        </div>
                        <div className={styles.timelineContent}>
                            <h3>Baccalauréat en Sciences Technique</h3>
                            <p>Lycée Et Chebbi</p>
                            <span>Septembre 2018 - Juillet 2019, Tunis, Tunisie</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h1 className={styles.heading}>Certificats</h1>
                <div className={styles.certificates}>
                    <div className={styles.certificate}>
                        <img src="/images/1.png" alt="Service-Oriented Architecture Certificate" />
                        <h3>Service-Oriented Architecture</h3>
                        <p>Issued by University of Alberta in November 2023. Certificate ID: 7WSEU8837BTJ. Description: Services web, Representational State Transfer (REST), Architecture orientée services (SOA), Microservices.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/2.png" alt="L'essentiel du HTML5 Certificate" />
                        <h3>L'essentiel du HTML5</h3>
                        <p>Issued by LinkedIn in July 2022. Certificate ID: AVgTXo9FKzKurwzyuuV01J6IBHk-  Description: Fundamental concepts of HTML5.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/3.png" alt="Les fondements de la programmation Certificate" />
                        <h3>Les fondements de la programmation</h3>
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
