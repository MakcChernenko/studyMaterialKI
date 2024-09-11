import css from "./Header.module.css"

const Header = () =>{
    return (

        <div className={css.header} >
            <nav className={css.nav} >
                <a className={css.logo} href="">Шедевро - студенти</a>
                <ul className={css.navList}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
            <form className={css.form} action=""><input type="text" placeholder="Матеріал" /><button type="button">Пошук</button></form>
        </div>
    )
}
export default Header