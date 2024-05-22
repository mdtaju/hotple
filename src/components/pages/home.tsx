import ThemeSwitcher from "../common/theme-switcher/theme-switcher";
import HomeContent from "../home-content/home-content";
import Header from "../ui/header/header";
import Sidebar from "../ui/sidebar/sidebar";

const HomeHero = () => {
  return (
    <div>
      <Header />
      {/* main container */}
      <div className="w-full max-w-[1440px] mx-auto flex items-start">
        <Sidebar />
        {/* content container */}
        <div className="w-full md:w-[calc(100%-260px)] mr-0 md:ml-[260px] min-h-screen">
          <div className="w-full">
            <HomeContent />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
