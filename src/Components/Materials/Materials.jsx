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
                <ul>
                    <li><a href="./Ukrainian/book.pdf">Підручник</a>
                    </li>
                    <li><a href="./Ukrainian/pravopys.pdf">Список публічних виступів</a>
                    </li>
                    <li><a href="./Ukrainian/speachList.docx">Підручник</a>
                    </li>
                    <li><a href="./Ukrainian/Tests.docx">Тести</a>
                    </li>
                    <li><a href="https://goroh.pp.ua/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%86%D1%96%D1%8F/">Словник</a>
                    </li>
                </ul>
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