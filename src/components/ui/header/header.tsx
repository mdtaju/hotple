"use client";
import { useState } from "react";
import MenuMobile from "./menu-mobile";
import Search from "./search";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  // mobile search active handler
  const searchActiveHandler = () => {
    setSearchActive(true);
  };
  return (
    <div className="w-full h-[72px] grid place-items-center sticky top-0 bg-white dark:bg-darkThemeColor">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between h-fit">
        {/* logo and search container */}
        {!searchActive && (
          <div className="flex items-center justify-between grow">
            {/* logo */}
            <div className="bg-primary text-white p-2 rounded-lg text-sm">
              Logo
            </div>
            {/* search */}
            <div className="pr-0 md:pr-[100px] hidden md:block">
              <Search />
            </div>
          </div>
        )}
        {/* mobile search input start */}
        {searchActive && (
          <div className="grow block md:hidden">
            <div className={`flex items-center gap-2`}>
              {/* search input start */}
              <div className="grow bg-lightGray dark:bg-darkSecondary h-[40px] rounded-full flex items-center justify-between">
                <div className="flex items-center justify-between grow">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-transparent outline-none px-4 caret-primary h-[40px] grow max-w-[170px]"
                    placeholder="登录以探索更多"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                <button aria-label="search" className="h-full pl-1 pr-4">
                  <CiSearch className="w-5 h-5" />
                </button>
              </div>
              {/* search input end */}
              <span onClick={() => setSearchActive(false)} className="text-sm">
                Cancel
              </span>
            </div>
          </div>
        )}
        {/* mobile search input end */}
        {/* menu mobile */}
        <div className="flex items-center gap-2 md:hidden">
          {!searchActive && (
            <>
              <button onClick={searchActiveHandler} className="p-2">
                <CiSearch className="w-5 h-5" />
              </button>
              <MenuMobile />
            </>
          )}
        </div>
        {/* menu */}
        {!searchActive && (
          <div className="hidden md:flex items-center">
            <div className="py-2 px-5 hover:bg-lightGray dark:hover:bg-darkSecondary rounded-full cursor-pointer">
              <span className="text-sm text-gray-500 dark:text-gray-300">
                创作中心
              </span>
            </div>
            <div className="py-2 px-5 hover:bg-lightGray dark:hover:bg-darkSecondary rounded-full cursor-pointer">
              <span className="text-sm text-gray-500 dark:text-gray-300">
                商务合作
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
