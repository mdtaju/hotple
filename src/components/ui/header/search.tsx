import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  const handleTextClear = () => {
    setSearchText("");
  };
  return (
    <div className="search_outer_container_2">
      <div className="search_inner_container_2">
        <input
          type="text"
          name=""
          placeholder="더 자세히 알아보려면 로그인하세요."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && (
          <button onClick={handleTextClear} aria-label="clear">
            <IoCloseOutline className="custom-size-icon" />
          </button>
        )}
      </div>
      <button aria-label="search">
        <CiSearch className="custom-size-icon" />
      </button>
    </div>
  );
}
