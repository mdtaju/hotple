import HomeContent from "../home-content/home-content";
import Header from "../ui/header/header";
import Sidebar from "../ui/sidebar/sidebar";

const HomeHero = () => {
  return (
    <div>
      <Header />
      {/* main container */}
      <section className="home_hero_main_section">
        <Sidebar />
        {/* content container */}
        <div className="home_hero_content_main_container">
          <div style={{ width: "100%" }}>
            <HomeContent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
