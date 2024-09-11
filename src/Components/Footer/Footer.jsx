import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>Шедевро - студенти</div>
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