"use client";

import BottomMenuMobile from "../ui/bottom-menu/bottom-menu-mobile";
import ContentBody from "./content-body";
import TopMenu from "./top-menu";

export default function HomeContent() {
  return (
    <div className="home_content_main_container">
      <TopMenu />
      <ContentBody />
      <BottomMenuMobile />
    </div>
  );
}
