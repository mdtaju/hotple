import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  const handleTextClear = () => {
    setSearchText("");
  };
  return (
    <div className="w-[512px] bg-lightGray dark:bg-darkSecondary h-[40px] rounded-full flex items-center justify-between">
      <div className="flex items-center justify-between grow">
        <input
          type="text"
          name=""
          id=""
          className="bg-transparent outline-none px-4 caret-primary h-[40px] grow"
          placeholder="登录以探索更多"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && (
          <button
            onClick={handleTextClear}
            aria-label="clear"
            className="h-full px-1">
            <IoCloseOutline className="w-5 h-5" />
          </button>
        )}
      </div>
      <button aria-label="search" className="h-full pl-1 pr-4">
        <CiSearch className="w-5 h-5" />
      </button>
    </div>
  );
}
