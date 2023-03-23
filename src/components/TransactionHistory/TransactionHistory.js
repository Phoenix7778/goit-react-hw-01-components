import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTitleCells,
  TransactionCells,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <TransactionTitleCells>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionTitleCells>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionCells key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TransactionCells>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
