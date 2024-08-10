import { Container, Stack } from "react-bootstrap";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpenses from "./component/IncomeExpenses";

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Stack
        className="d-flex flex-column gap-3"
        style={{ width: "min(100vh,100%)"}}
      >
        <Header />
        <Balance />
        <IncomeExpenses />
      </Stack>
    </Container>
  );
}

export default App;
