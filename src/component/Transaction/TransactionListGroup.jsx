import { useContext } from "react";
import { ListGroup, Stack } from "react-bootstrap";
import { TransactionContext } from "../../context/transaction";
import { TransactionListItem } from "./TransactionListItem";

export default function TransactionListGroup() {
  const { transactions } = useContext(TransactionContext);
  return (
    <Stack>
      <h3>History</h3>
      <ListGroup>
        {transactions.map((transaction) => (
          <TransactionListItem key={transaction.id} transaction={transaction} />
        ))}
      </ListGroup>
    </Stack>
  );
}
