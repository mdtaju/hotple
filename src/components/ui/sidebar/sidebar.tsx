import { TbSmartHome } from "react-icons/tb";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoThumbsup } from "react-icons/go";
import { PiLinktreeLogo } from "react-icons/pi";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <div className="fixed hidden md:block left-0 bottom-0 w-[260px] h-[calc(100vh-72px)] bg-white dark:bg-darkThemeColor">
      <div className="h-full w-full p-4 flex flex-col gap-4 justify-between">
        {/* list container start */}
        <div className="w-full flex flex-col items-center gap-3 text-gray-700 dark:text-gray-200">
          {/* discover */}
          <div className="w-full flex items-center gap-4 px-4 py-3 rounded-full hover:bg-lightGray dark:hover:bg-darkSecondary cursor-pointer">
            <TbSmartHome className="w-6 h-6" />
            <span className="text-lg font-medium">발견하다</span>
          </div>
          {/* release */}
          <div className="w-full flex items-center gap-4 px-4 py-3 rounded-full hover:bg-lightGray dark:hover:bg-darkSecondary cursor-pointer">
            <TbSquareRoundedPlus className="w-6 h-6" />
            <span className="text-lg font-medium">풀어 주다</span>
          </div>
          {/* notify */}
          <div className="w-full flex items-center gap-4 px-4 py-3 rounded-full hover:bg-lightGray dark:hover:bg-darkSecondary cursor-pointer">
            <IoNotificationsOutline className="w-6 h-6" />
            <span className="text-lg font-medium">통지하다</span>
          </div>
          {/* login button */}
          <button className="w-full bg-primary text-white text-lg font-medium outline-none py-2 rounded-full hover:brightness-110 duration-150 transition-all">
            로그인
          </button>
          {/* login info banner */}
          <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-[16px] w-full">
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">
              지금 로그인하십시오
            </p>
            <div className="space-y-2 text-[10px] font-medium mt-4">
              {/* point 1 */}
              <div className="flex items-start gap-2 text-gray-400">
                <GoThumbsup className="w-4 h-4" />
                <span>귀하를 더 잘 이해하는 고품질 콘텐츠를 얻으세요</span>
              </div>
              {/* point 1 */}
              <div className="flex items-start gap-2 text-gray-400">
                <PiLinktreeLogo className="w-4 h-4" />
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
