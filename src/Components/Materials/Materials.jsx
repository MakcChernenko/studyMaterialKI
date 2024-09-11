import css from "./Materials.module.css"
const Materials = ()=>{
return(
    <div className={css.materials}>
        <h1>Наші предмети</h1>
        <ul className={css.list}>
            <li className={css.item}>
                <h2>Вища математика</h2>
                <p><a href="./rozklad.pdf" download>конспект 1-2урок</a>
                <a href="./Electromagnetyzm.pdf" >фізика</a>
                </p>
                </li>
            <li className={css.item}>
                <h2>Фізика</h2>
                </li>
            <li className={css.item}>
                <h2>Українська мова</h2>
                </li>
            <li className={css.item}>
                <h2>Історія</h2>
                </li>
            <li className={css.item}>
                <h2>IT право</h2>
                </li>
            <li className={css.item}>
                <h2>Комп'юторна інженерія</h2>
                </li>
            <li className={css.item}>
                <h2>Мови програмування</h2>
                </li>
            <li className={css.item}>
                <h2>ще щось буде</h2>
                </li>
        </ul>
    </div>
)
}
export default Materials