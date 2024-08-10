import { Container, Stack } from "react-bootstrap";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpenses from "./component/IncomeExpenses";
import AddTransaction from "./component/AddTransaction";
import { TransactionProvider } from "./context/transaction";
import TransactionListGroup from "./component/Transaction/TransactionListGroup";

function App() {
  return (
    <Container>
      <Stack style={{ width: "min(100vh,100%)" }} className="gap-1">
        <TransactionProvider>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionListGroup />
          <AddTransaction />
        </TransactionProvider>
      </Stack>
    </Container>
  );
}

export default App;
