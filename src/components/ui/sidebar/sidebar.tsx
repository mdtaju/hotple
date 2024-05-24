import { TbSmartHome } from "react-icons/tb";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoThumbsup } from "react-icons/go";
import { PiLinktreeLogo } from "react-icons/pi";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <div className="sidebar_outer_container">
      <div className="sidebar_inner_container">
        {/* list container start */}
        <div className="sidebar_list_container">
          {/* discover */}
          <div className="sidebar_list_item_container">
            <TbSmartHome style={{ width: "1.5rem", height: "1.5rem" }} />
            <span>발견하다</span>
          </div>
          {/* release */}
          <div className="sidebar_list_item_container">
            <TbSquareRoundedPlus
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            <span>풀어 주다</span>
          </div>
          {/* notify */}
          <div className="sidebar_list_item_container">
            <IoNotificationsOutline
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            <span>통지하다</span>
          </div>
          {/* login button */}
          <button className="sidebar_login_button">로그인</button>
          {/* login info banner */}
          <div className="sidebar_login_info_banner_container">
            <p>지금 로그인하십시오</p>
            <div className="sidebar_login_info_banner_inner_container">
              {/* point 1 */}
              <div className="sidebar_banner_point_container">
                <GoThumbsup className="custom-size-icon" />
                <span>귀하를 더 잘 이해하는 고품질 콘텐츠를 얻으세요</span>
              </div>
              {/* point 1 */}
              <div className="sidebar_banner_point_container">
                <PiLinktreeLogo className="custom-size-icon" />
                <span>식재 및 제초에 관한 최신 정보를 검색해 보세요</span>
              </div>
            </div>
          </div>
        </div>
        {/* list container end */}
        {/* menu start */}
        <Menu />
        {/* menu end */}
      </div>
    </div>
  );
}
