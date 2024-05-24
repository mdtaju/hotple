import { TbSmartHome } from "react-icons/tb";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export default function BottomMenuMobile() {
  return (
    <div className="bottom_menu_mobile">
      <div className="bottom_menu_mobile_inner_container">
        <button className="bottom_menu_item">
          <TbSmartHome style={{ width: "24px", height: "24px" }} />
        </button>
        <button className="bottom_menu_item">
          <TbSquareRoundedPlus style={{ width: "24px", height: "24px" }} />
        </button>
        <button className="bottom_menu_item">
          <IoNotificationsOutline style={{ width: "24px", height: "24px" }} />
        </button>
        <button className="bottom_menu_item">
          <FiUser style={{ width: "24px", height: "24px" }} />
        </button>
      </div>
    </div>
  );
}
