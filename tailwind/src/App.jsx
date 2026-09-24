import { Accounts } from "./components/Accounts";
import { Aside } from "./components/Aside";
import Card, { CardBody, CardHeader } from "./components/Card";
import { Container } from "./components/Container";
import { DailyBudget } from "./components/DailyBudget";
import { Main } from "./components/Main";
import { SavingsStatus } from "./components/SavingsStatus";
import { SearchInput } from "./components/SearchInput";
import { Transactions } from "./components/Transactions";
import { Typography } from "./components/Typography";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput name="q" />
          <div>
            <Typography variant="h1">Olá, Diego</Typography>
            <Typography>Veja como estão suas finanças hoje.</Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch gap-6">
            <Card>
              <CardHeader>Orçamento diário disponível:</CardHeader>
              <CardBody>
                <DailyBudget value={90} />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Progresso da meta financeira</CardHeader>
              <CardBody>
                <SavingsStatus />
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
        </Main>
      </Container>
    </div>
  );
}

export default App;
