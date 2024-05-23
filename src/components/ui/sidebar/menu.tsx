"use client";
import { Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

export default function Menu() {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "menu-popover" : undefined;
  return (
    <>
      <div
        aria-describedby={id}
        onClick={handleClick}
        className="px-4 py-3 flex items-center gap-3 hover:bg-lightGray dark:hover:bg-darkSecondary rounded-full cursor-pointer text-gray-700 dark:text-gray-200">
        <HiOutlineMenu className="w-6 h-6" />
        <span className="text-lg font-medium">메뉴</span>
      </div>
      {/* popover */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );
}
