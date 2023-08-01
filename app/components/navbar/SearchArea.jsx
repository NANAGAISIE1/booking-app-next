import { SearchIcon } from "lucide-react";

import { Input } from "../ui/input";

const SearchArea = () => {
  return (
    <div className="items-center flex flex-grow bg-bars rounded-full pl-4 justify-between sm:flex-grow-0 sm:w-[45%]">
      <SearchIcon />
      <Input
        type="email"
        placeholder={` Search hostels to book...`}
        className="rounded-full bg-bars border-none focus-visible:ring-0 ring-offset-bars focus:border-none placeholder:text-primary focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default SearchArea;
