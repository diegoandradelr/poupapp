const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const TransactionItem = ({ item }) => {
  const valueColor =
    item.value >= 0 ? "text-secondary-income" : "text-secondary-expense";

  return (
    <div className="flex justify-between">
      <div
        className={`flex flex-col gap-2 text-[15px] leading-[120%] font-bold ${valueColor}`}
      >
        <p className="m-0">{item.description}</p>
        <p className="m-0 font-normal">{formatter.format(item.value)}</p>
      </div>

      <div className="text-neutral-text text-[14px] leading-5">
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};
