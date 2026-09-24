const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const DailyBudget = ({ value }) => {
  return (
    <p className="m-0 text-primary-highlight text-center font-bold text-[39px] leading-[125%]">
      {formatter.format(value)}
    </p>
  );
};
