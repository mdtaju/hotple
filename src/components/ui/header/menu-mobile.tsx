"use client";
import ThemeSwitcher from "@/components/common/theme-switcher/theme-switcher";
import { Popover } from "@mui/material";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

export default function MenuMobile() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [menuSubList, setMenuSubList] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "menu-popover-mobile" : undefined;
  return (
    <>
      <div className="mobile_search_menu_container_02">
        <button aria-describedby={id} onClick={handleClick}>
          <HiOutlineMenu className="custom-size-icon" />
        </button>
      </div>

      {/* popover */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        // sx={{ width: "260px" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <div className="sidebar_popover_main_container">
          {menuSubList === "개인 정보 보호 계약" && (
            <>
              {/* sub list header */}
              <div className="sidebar_popover_sub_list_header">
                <button onClick={() => setMenuSubList("")} aria-label="back">
                  <RiArrowLeftSLine className="custom-size-icon" />
                </button>
                <span>{menuSubList}</span>
              </div>
              {/* divider */}
              <div
                className="sidebar_popover_divider"
                style={{ marginBottom: "4px" }}></div>
              {/* sub lists */}
              <div>
                {/* item 1 */}
                <div className="sidebar_sub_list_item_container">
                  <span>사용자 계약</span>
                  <RiArrowRightUpLine className="sub_list_icon" />
                </div>
                {/* item 2 */}
                <div className="sidebar_sub_list_item_container">
                  <span>개인 정보 정책</span>
                  <RiArrowRightUpLine className="sub_list_icon" />
                </div>
                {/* item 3 */}
                <div className="sidebar_sub_list_item_container">
                  <span>핫스팟 규칙</span>
                  <RiArrowRightUpLine className="sub_list_icon" />
                </div>
              </div>
            </>
          )}

          {!menuSubList && (
            <>
              {/* top lists start */}
              <div>
                {/* item 1 */}
                <div
                  onClick={() => setMenuSubList("개인 정보 보호 계약")}
                  className="sidebar_top_lists_top_item">
                  <span className="">개인 정보 보호 계약</span>
                  <MdOutlineArrowForwardIos />
                </div>
                {/* item 2 */}
                <div className="sidebar_top_lists_bottom_item">
                  <span>도움말 및 고객 서비스</span>
                </div>
              </div>
              {/* top lists end */}
              {/* divider */}
              <div className="sidebar_popover_divider"></div>
              {/* middle list start */}
              <div>
                <div style={{ padding: "8px 12px" }}>
                  <span className="sidebar_popup_setup_title">면접방법</span>
                </div>
                {/* item 1 */}
                <div className="sidebar_top_lists_bottom_item">
                  <span>키보드 단축키</span>
                </div>
                {/* item 2 */}
                <div className="sidebar_top_lists_bottom_item">
                  <span>데스크탑에 핫플 추가</span>
                </div>
                {/* item 3 */}
                <div className="sidebar_top_lists_bottom_item">
                  <span>작은 창 모드 열기</span>
                </div>
              </div>
              {/* middle list end */}
              {/* divider */}
              <div
                className="sidebar_popover_divider"
                style={{ marginTop: "4px" }}></div>
              {/* setup start */}
              <div style={{ padding: "8px 12px" }}>
                <span className="sidebar_popup_setup_title">설정</span>
                <div className="sidebar_popover_setup_inner_container">
                  <span>다크 모드</span>
                  {/* modes start */}
                  <div>
                    <ThemeSwitcher />
                  </div>
                  {/* modes end */}
                </div>
              </div>
              {/* setup end */}
            </>
          )}
        </div>
      </Popover>
    </>
  );
}
