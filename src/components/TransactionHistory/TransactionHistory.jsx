import css from './TransactionHistory.module.css';
console.log(css);

const tableHeaders = ['Type', 'Amount', 'Currency'];

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.theadTr}>
          {tableHeaders.map((el, i) => (
            <th key={i}>{el}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tbodyTr} key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
