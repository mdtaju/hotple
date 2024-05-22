import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

export default function MenuMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <button
        className="p-2 bg-lightGray rounded-full"
        onClick={() => setMenuOpen(true)}>
        <HiOutlineMenu className="w-5 h-5" />
      </button>
    </div>
  );
}
