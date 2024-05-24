import { useState } from "react";

const menuItems: string[] = [
  "추천하다",
  "전자 공원",
  "차림새",
  "맛있는 음식",
  "조립",
  "영화와 텔레비전",
  "직장",
  "집",
  "게임",
  "여행하다",
  "적합",
];

export default function TopMenu() {
  const [activeOption, setActiveOption] = useState("추천하다");
  return (
    <div className="top_menu_container_01">
      <div className="top_menu_inner_container_01">
        {menuItems.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setActiveOption(item)}
              className={`top_menu_item_01 ${
                activeOption === item ? "top_menu_item_01_active" : ""
              }`}>
              <span style={{ whiteSpace: "nowrap" }}>{item}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
