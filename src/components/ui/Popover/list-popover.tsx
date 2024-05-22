"use client";

import { Popover } from "@mui/material";
import { useState } from "react";

type propsType = {
  name: string;
  path: string;
};

export default function ListPopover({ list }: { list: propsType[] }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus>
        <div>
          {list.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
      </Popover>
    </>
  );
}
