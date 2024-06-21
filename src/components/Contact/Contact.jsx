// src/components/Contact/Contact.jsx
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div id="contact" className={styles.contactSection}>
            <a href="#contact" className={styles.link}>Contact</a>
            <p>Vous pouvez me contacter à l'adresse email suivante : aymenkhiari106@gmail.com</p>
            <button
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aymenkhiari106@gmail.com', '_blank')}
                className={styles.emailButton}
            >
                Envoyer un mail
            </button>
        </div>
    );
};

export default Contact;
