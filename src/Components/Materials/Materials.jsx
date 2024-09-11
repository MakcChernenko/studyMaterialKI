import css from "./Materials.module.css"
const Materials = ()=>{
return(
    <div className={css.materials}>
        <h1>Наші предмети</h1>
        <ul className={css.list}>
            <li className={css.item}>
                <h2>Вища математика</h2>
                <ul>
                    <li><a target="blank" href="./komplekcniChysla.pdf">Комплексні числа</a></li>
                </ul>
                </li>
            <li className={css.item}>
                <h2>Фізика</h2>
                <ul>
                    <li><a target="blank" href="./Electromagnetyzm.pdf" >Електромагнетизм</a></li>
                    <li><a target="blank" href="./physicsBook.pdf" >Фізика</a></li>
                    <li><a target="blank" href="./Laboratorka.pdf" >Лабораторні</a></li>
                </ul>
                
                </li>
            <li className={css.item}>
                <h2>Українська мова</h2>
                </li>
            <li className={css.item}>
                <h2>Історія</h2>
                <ul>
                    <li><a target="blank" href="./History.docx">Історія</a></li>
                </ul>
                </li>
            <li className={css.item}>
                <h2>IT право</h2>
                <ul>
                    <li><a target="blank" href="./ITPravo1lesson.txt">Конспект 1 урока</a></li>
                </ul>
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