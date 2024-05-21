import ThemeSwitcher from "@/components/common/theme-switcher/theme-switcher";
import HomeHero from "@/components/pages/home";

export default function HomePage() {
  return (
    <main className="">
      <HomeHero />
      <ThemeSwitcher />
    </main>
  );
}
