import React from 'react'
import PropTypes from 'prop-types'

const TransactionHistory = ({ transactions }) => (
  
  <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
      {transactions.map(({id, type, amount, currency}) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
      ))}
  </tbody>
</table>
)

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired
}

export default TransactionHistory