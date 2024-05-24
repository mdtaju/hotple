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
    <div className="header_main_container">
      <div className="header_inner_container">
        {/* logo and search container */}
        {!searchActive && (
          <div className="logo_and_search_container">
            {/* logo */}
            <div className="logo_container">Logo</div>
            {/* search */}
            <div className="search_container">
              <Search />
            </div>
          </div>
        )}
        {/* mobile search input start */}
        {searchActive && (
          <div className="search_container_small_view">
            <div className={`search_inner_container_small`}>
              {/* search input start */}
              <div className="search_input_outer_container">
                <div className="search_input_inner_container">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="더 자세히 알아보려면 로그인하세요."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                <button aria-label="search">
                  <CiSearch className="custom-size-icon" />
                </button>
              </div>
              {/* search input end */}
              <span
                onClick={() => setSearchActive(false)}
                style={{ fontSize: "14px" }}>
                Cancel
              </span>
            </div>
          </div>
        )}
        {/* mobile search input end */}
        {/* menu mobile */}
        <div className="mobile_search_menu_container">
          {!searchActive && (
            <>
              <button onClick={searchActiveHandler} style={{ padding: "8px" }}>
                <CiSearch className="custom-size-icon" />
              </button>
              <MenuMobile />
            </>
          )}
        </div>
        {/* menu */}
        {!searchActive && (
          <div className="desktop_menu_container">
            <div
              className="desktop_menu_inner_container"
              style={{ marginRight: "8px" }}>
              <span>창작센터</span>
            </div>
            <div className="desktop_menu_inner_container">
              <span>사업 협력</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
