import css from './FilterResult.module.css';
const FilterResult = ({ renderArray }) => {
  console.log(renderArray);
  return (
    <div className={css.filterResult}>
      <ul className={css.filterList}>
        результат пошуку:
        {renderArray.map((link) => {
          return (
            <li className={css.filterItem} key={link.id}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FilterResult;
