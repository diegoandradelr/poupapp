import { IconSearch } from "../icons";

export const SearchInput = (props) => {
  return (
    <div className="flex items-center bg-neutral-header py-3 px-4 gap-4 rounded-lg">
      <IconSearch />
      <input
        type="text"
        className="w-full text-neutral-text text-[20px] leading-[125%] px-2 py-0.5 focus:outline-none focus:border focus:border-primary-highlight focus:rounded-md "
        {...props}
      />
    </div>
  );
};
