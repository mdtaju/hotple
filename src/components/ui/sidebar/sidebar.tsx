import { TbSmartHome } from "react-icons/tb";
import { HiOutlineMenu } from "react-icons/hi";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="fixed hidden md:block left-0 bottom-0 w-[260px] h-[calc(100vh-72px)] bg-white dark:bg-darkThemeColor">
      <div className="h-full w-full p-4 flex flex-col gap-4 justify-between">
        {/* list container start */}
        <div className="w-full flex flex-col items-center gap-3 text-gray-700 dark:text-gray-200">
          {/* discover */}
          <div className="w-full flex items-center gap-4 px-4 py-3 rounded-full hover:bg-lightGray dark:hover:bg-darkSecondary cursor-pointer">
            <TbSmartHome className="w-6 h-6" />
            <span className="text-lg font-medium">发现</span>
          </div>
          {/* release */}
          <div className="w-full flex items-center gap-4 px-4 py-3 rounded-full hover:bg-lightGray dark:hover:bg-darkSecondary cursor-pointer">
            <TbSquareRoundedPlus className="w-6 h-6" />
            <span className="text-lg font-medium">发布</span>
          </div>
          {/* notify */}
          <div className="w-full flex items-center gap-4 px-4 py-3 rounded-full hover:bg-lightGray dark:hover:bg-darkSecondary cursor-pointer">
            <IoNotificationsOutline className="w-6 h-6" />
            <span className="text-lg font-medium">通知</span>
          </div>
        </div>
        {/* list container end */}
        {/* menu start */}
        <div className="px-4 py-3 flex items-center gap-3 hover:bg-lightGray dark:hover:bg-darkSecondary rounded-full cursor-pointer text-gray-700 dark:text-gray-200">
          <HiOutlineMenu className="w-6 h-6" />
          <span className="text-lg font-medium">菜单</span>
        </div>
        {/* menu end */}
      </div>
    </div>
  );
}
