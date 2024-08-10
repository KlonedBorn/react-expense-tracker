import { Container, Stack } from "react-bootstrap";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpenses from "./component/IncomeExpenses";
import TransactionList from "./component/Transaction/TransactionList";
import AddTransaction from "./component/AddTransaction";

function App() {
  return (
    <Container>
      <Stack style={{ width: "min(100vh,100%)" }} className="gap-3">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Stack>
    </Container>
  );
}

export default App;
