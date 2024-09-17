import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* <a href='https://study-material-ki.vercel.app/' className={styles.footerLogo}>Шедевро - студенти</a>
            <address>
                <a href="mailto:">email</a>
                <a href="tel:+097">tell</a>
            </address> */}
            <form>
                <label>email
                    <input type="email"/>
                    </label>
                <label>password
                    <input type="password"/>
                    </label>
                {/* <button>Log in</button> */}
                </form>
                <ul className={styles.footerSocial}>
    <li>
        <a target="_blank" href="https://www.facebook.com/" className={styles.footerSocialLink}>
            <svg className={styles.icon}>
                <use href="/img/sprites.svg#icon-facebook"></use>
            </svg>
            Facebook
        </a>
    </li>
    <li>
        <a target="_blank" href="https://www.youtube.com/" className={styles.footerSocialLink}>
            <svg className={styles.icon}>
                <use href="./public/img/sprites.svg#icon-youtube"></use>
            </svg>
            YouTube
        </a>
    </li>
    <li>
        <a target="_blank" href="https://www.instagram.com/" className={styles.footerSocialLink}>
            <svg className={styles.icon}>
                <use href="./public/img/sprites.svg#icon-insta"></use>
            </svg>
            Instagram
        </a>
    </li>
    <li>
        <a target="_blank" href="https://www.tiktok.com/?lang=uk-UA" className={styles.footerSocialLink}>
            <svg className={styles.icon}>
                <use href="./public/img/sprites.svg#icon-tiktok"></use>
            </svg>
            tik-tok
        </a>
    </li>
</ul>
        </footer>
    );
};

export default Footer;