import React from 'react';
import Select from '@material-ui/core/Select';
import './OrderListTable.css';
const OrderListTable = ({
  order,
  handleChange,
  handleUpdate,
  updateLoader,
}) => {
  const { _id, serviceName, userName, email, payWith, orderStatus } = order;
  let className;
  switch (orderStatus) {
    case 'Pending':
      className = 'pending';
      break;
    case 'Done':
      className = 'done';
      break;
    case 'On-going':
      className = 'ongoing';
      break;
    default:
      className = 'default';
      break;
  }
  return (
    <tr>
      <td>{serviceName}</td>
      <td>{userName}</td>
      <td>{email}</td>
      <td style={{ textTransform: 'capitalize' }}>{payWith}</td>
      <td>
        <Select
          className={className}
          native
          value={orderStatus}
          onChange={handleChange}
          onClick={() => handleUpdate(_id)}
          inputProps={{
            name: 'status',
          }}
        >
          <option value={orderStatus}>{orderStatus}</option>
          <option value="Pending">Pending</option>
          <option value="On-going">On Going</option>
          <option value="Done">Done</option>
        </Select>
      </td>
    </tr>
  );
};

export default OrderListTable;
