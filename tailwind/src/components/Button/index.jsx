export const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-transparent border border-neutral-text rounded-full text-neutral-text px-6 py-3 flex items-center justify-center gap-2 cursor-pointer text-base font-medium leading-[120%] hover:opacity-80"
      {...props}
    >
      {children}
    </button>
  );
};
