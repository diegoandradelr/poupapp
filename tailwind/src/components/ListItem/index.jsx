export const ListItem = ({ children, className, ...props }) => {
  return (
    <li
      className={`border-b border-neutral-header pb-4 mb-4 last:border-0 last:pb-0 last:mb-0 ${className || ""}`}
      {...props}
    >
      {children}
    </li>
  );
};
