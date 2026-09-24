import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { SearchInput } from "./components/SearchInput";
import { Main } from "./components/Main";
import { Typography } from "./components/Typography";
import Card, { CardBody, CardHeader } from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";
import { SavingsStatus } from "./components/SavingsStatus";
import styles from "./app.module.css";
import { Transactions } from "./components/Transactions";
import { Accounts } from "./components/Accounts";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <SearchInput />
          <div>
            <Typography variant="h1">Olá, Diego!</Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <CardHeader>Orçamento diário disponível:</CardHeader>
              <CardBody>
                <DailyBudget value={250} />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Progresso da meta financeira</CardHeader>
              <CardBody>
                <SavingsStatus percent={60} />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Movimentação financeira</CardHeader>
              <CardBody>
                <Transactions />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Minhas contas</CardHeader>
              <CardBody>
                <Accounts />
              </CardBody>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
