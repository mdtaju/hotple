"use client";
import { listsDataTypes } from "@/utils/demo-data";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Backdrop } from "@mui/material";

export default function Card({ item }: { item: listsDataTypes }) {
  const { theme } = useTheme();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [backDropColor, setBackDropColor] = useState(
    "rgba(255, 255, 255, 0.4)"
  );

  useEffect(() => {
    if (theme !== "light") {
      setBackDropColor("rgba(0, 0, 0, 0.2)");
    } else {
      setBackDropColor("rgba(0, 0, 0, 0.4)");
    }
  }, [theme]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="home_content_list_item_container"
        ref={anchorRef}
        onClick={handleClickOpen}>
        {/* image container */}
        <div className="list_item_img_container">
          <Image
            src={item.img_url}
            alt={item.title}
            layout="fill"
            placeholder="blur"
            blurDataURL={item.img_url}
            className="list_img"
          />
        </div>
        {/* info container */}
        <div
          style={{ padding: "0.5rem", paddingBottom: "0px" }}
          className="home_content_info_container">
          <h2>{item.title}</h2>
          {item.inclusions.length !== 0 && (
            <div className="content_info_inclusions">
              {item.inclusions.map((inc, i) => (
                <span key={i}>✔ {inc}</span>
              ))}
            </div>
          )}
          <p>가격: {item.price}</p>
        </div>
      </div>
      {/* {!isSmallScreen && ( */}
      <Dialog
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: {
            backgroundColor: backDropColor, // Change the color as needed
            // backdropFilter: "blur(2px)", // Optional: Apply additional styles like blur
          },
        }}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "800px", // Set your width here
              borderRadius: "16px",
            },
          },
        }}
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     position: "absolute",
        //     top: dialogPosition.top,
        //     left: dialogPosition.left,
        //     transformOrigin: "top left",
        //     animation: `${
        //       open ? "dialogOpen" : "dialogClose"
        //     } 0.3s forwards`,
        //   },
        // }}
        PaperProps={{
          style: {
            animation: `${open ? "dialogOpen" : "dialogClose"} 0.3s forwards`,
          },
        }}>
        {/* Dialog content here */}
        <div className="content_details_view_container">
          {/* image container */}
          <div className="content_dialog_img_container">
            <Image
              src={item.img_url}
              alt={item.title}
              layout="fill"
              placeholder="blur"
              blurDataURL={item.img_url}
              className="list_img"
            />
          </div>
          {/* info container */}
          <div className="content_dialog_info_container">
            {/* content container */}
            <div>header</div>
            {/* footer */}
            <div className="">this is footer</div>
          </div>
        </div>
      </Dialog>
      {/* )} */}
    </>
  );
}
