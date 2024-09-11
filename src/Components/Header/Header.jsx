import css from "./Header.module.css"

const Header = ({handleSubmit}) =>{

    return (
        <div className={css.header} >
            <nav className={css.nav} >
                <a className={css.logo} href="https://study-material-ki.vercel.app/">Шедевро - студенти</a>
                <ul className={css.navList}>
                <li><a href="https://study-material-ki.vercel.app/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
            <form onSubmit={handleSubmit} className={css.form}><input name="filtr" type="text" placeholder="Матеріал" /><button type="submit">Пошук</button></form>
        </div>
    )
}
export default Header