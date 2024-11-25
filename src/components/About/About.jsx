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
                            Hello 👋, I'm Aymen Khiari, a 23-year-old engineering student in my final year, specializing in Business Intelligence.
                        </p>
                        <p className={styles.description}>
                            With a passion for .NET development 🌍 and Angular 💻, I have experience in Full Stack and BI projects, from data collection to web application deployment. My studies and internships have sharpened my technical skills 🔧 and analytical thinking 📊, which I’m eager to apply in future projects.
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
                        <img src="/images/microsoft-azure.png" alt="Microsoft Azure Fundamentals Certificate" />
                        <h3>Microsoft Azure Fundamentals AZ-900 Exam Prep</h3>
                        <p>Issued by Microsoft via Coursera in November 2024. Description: Specialization comprising four courses:
                        <ul>
                            <li>Introduction to Microsoft Azure Cloud Services</li>
                            <li>Microsoft Azure Management Tools and Security Solutions</li>
                            <li>Microsoft Azure Services and Lifecycles</li>
                            <li>Preparing for the AZ-900 Microsoft Azure Fundamentals Exam</li>
                        </ul>
                        </p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/mlops-specialization.png" alt="MLOps Specialization Certificate" />
                        <h3>MLOps | Machine Learning Operations</h3>
                        <p>Issued by Duke University via Coursera in November 2024. Description: Specialization comprising four courses: 
                        <ul>
                            <li>Python Essentials for MLOps</li>
                            <li>DevOps, DataOps, MLOps</li>
                            <li>MLOps Platforms: Amazon SageMaker and Azure ML</li>
                            <li>MLOps Tools: MLflow and Hugging Face</li>
                        </ul>
                        </p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/advanced-kubernetes.png" alt="Advanced Kubernetes Certificate" />
                         <h3>Advanced Kubernetes</h3>
                        <p>Issued by LearnQuest via Coursera in November 2024. Description: Specialization comprising three courses:
                        <ul>
                         <li>Advanced Kubernetes Deployment Strategies and Networking</li>
                            <li>Securing, Monitoring, and Scaling Kubernetes Clusters</li>
                            <li>Kubernetes Integration and Advanced Orchestration Techniques</li>
                        </ul>
                        </p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/nvidia-ai-anomaly.png" alt="Applications of AI for Anomaly Detection Certificate" />
                        <h3>Applications of AI for Anomaly Detection</h3>
                        <p>Issued by NVIDIA in October 2024. Certificate ID: i7JipiKXSBSR3H6vTaE9nw. Description: Competence in AI applications for detecting anomalies.</p>
                    </div>

                    <div className={styles.certificate}>
                         <img src="/images/nvidia-transformer-nlp.png" alt="Building Transformer-Based NLP Applications Certificate" />
                         <h3>Building Transformer-Based NLP Applications</h3>
                         <p>Issued by NVIDIA in November 2024. Certificate ID: ZdEUMOEE5V-Hfh5jF-69gw. Description: Advanced NLP techniques using transformer-based architectures.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/hubspot-ticketing-system.png" alt="HubSpot Ticketing System Certificate" />
                        <h3>HubSpot: Working with a Ticketing System</h3>
                        <p>Issued by Coursera Project Network in May 2024. Description: Practical project on managing and working with ticketing systems using HubSpot.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/sap-solution.png" alt="Implementing SAP Solution Certificate" />
                         <h3>Implementing an SAP Solution</h3>
                        <p>Issued by SAP via Coursera in November 2024. Description: Comprehensive course on implementing solutions using SAP methodologies.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/hubspot-crm.png" alt="Introduction to CRM with HubSpot Certificate" />
                        <h3>Introduction to CRM with HubSpot</h3>
                        <p>Issued by Coursera Project Network in May 2024. Description: Foundational course on CRM systems and their practical applications using HubSpot.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/1.png" alt="Service-Oriented Architecture Certificate" />
                        <h3>Service-Oriented Architecture</h3>
                        <p>Issued by University of Alberta in November 2023. Certificate ID: 7WSEU8837BTJ. Description: Web services, Representational State Transfer (REST), Service-Oriented Architecture (SOA), Microservices.</p>
                    </div>

                    <div className={styles.certificate}>
                        <img src="/images/2.png" alt="HTML5 Essentials Certificate" />
                        <h3>HTML5 Essentials</h3>
                        <p>Issued by LinkedIn in July 2022. Certificate ID: AVgTXo9FKzKurwzyuuV01J6IBHk. Description: Fundamental concepts of HTML5.</p>
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

            <div className={styles.section}>
                <h1 className={styles.heading}>Recommendation</h1>
                <div className={styles.recommendation}>
                    <div className={styles.recommendation}>
                        <a href="https://drive.google.com/file/d/1YWM6fKHaPD6zyRThI8eNS1zAIVUy1yL8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src="/images/recomendation.png" alt="Recommendation from My .NET Teacher" />
                        </a>
                    </div>
                    
                    <div className={styles.recommendation}>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="/images/reco.png" alt="Recommendation" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
