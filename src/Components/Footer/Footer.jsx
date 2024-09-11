import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href='https://study-material-ki.vercel.app/' className={styles.footerLogo}>Шедевро - студенти</a>
            <address>
                <a href="mailto:">email</a>
                <a href="tel:+097">tell</a>
            </address>
            <ul className={styles.footerSocial}>
                <li><a target="_blank" href="https://www.facebook.com/" className={styles.footerSocialLink}>Facebook</a></li>
                <li><a target="_blank" href="https://www.youtube.com/" className={styles.footerSocialLink}>YouTube</a></li>
                <li><a target="_blank" href="https://www.instagram.com/" className={styles.footerSocialLink}>Instagram</a></li>
            </ul>
        </footer>
    );
};

export default Footer;