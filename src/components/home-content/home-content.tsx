"use client";

import ContentBody from "./content-body";
import TopMenu from "./top-menu";

export default function HomeContent() {
  return (
    <div className="w-full px-4 md:px-0 space-y-4 mt-4">
      <TopMenu />
      <ContentBody />
    </div>
  );
}
