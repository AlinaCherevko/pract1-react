import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format } from 'date-fns';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map((item, i) => (
          <Tr>
            <Td>{i}</Td>
            <Td>{item.price}</Td>
            <Td>{item.amount}</Td>
            <Td>{format(new Date(item.date), 'Pp', { addSuffix: true })}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
