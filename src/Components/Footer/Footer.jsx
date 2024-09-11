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
                <li><a href="#" className={styles.footerSocialLink}>Facebook</a></li>
                <li><a href="#" className={styles.footerSocialLink}>Twitter</a></li>
                <li><a href="#" className={styles.footerSocialLink}>Instagram</a></li>
            </ul>
        </footer>
    );
};

export default Footer;