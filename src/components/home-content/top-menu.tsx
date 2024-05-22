import { useState } from "react";

const menuItems: string[] = [
  "推荐",
  "电子公园",
  "全套服装",
  "美味佳肴",
  "化妆品",
  "电影和电视",
  "工作场所",
  "家",
  "游戏",
  "旅行",
  "健康",
];

export default function TopMenu() {
  const [activeOption, setActiveOption] = useState("推荐");
  return (
    <div className="w-full overflow-hidden">
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
