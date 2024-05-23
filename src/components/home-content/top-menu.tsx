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
    <div className="w-full overflow-hidden px-0 sm:px-4">
      <div className="flex items-center gap-2 overflow-x-auto">
        {menuItems.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setActiveOption(item)}
              className={`px-4 py-2 hover:bg-lightGray dark:hover:bg-darkSecondary text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full whitespace-nowrap ${
                activeOption === item
                  ? "bg-lightGray dark:bg-darkSecondary"
                  : ""
              }`}>
              <span className="whitespace-nowrap">{item}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
