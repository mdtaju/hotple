"use client";
import { Backdrop } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import QRImage from "/public/demo-qr.png";
import Image from "next/image";
import { PiWechatLogoBold } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { HiPause } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const AuthWindow = ({
  open,
  setOpen,
  backDropColor,
}: {
  open: boolean;
  setOpen: Function;
  backDropColor: string;
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        // fullScreen={fullScreen}
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: {
            backgroundColor: backDropColor, // Change the color as needed
            // backdropFilter: "blur(2px)", // Optional: Apply additional styles like blur
          },
        }}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "800px", // Set your width here
              borderRadius: "16px",
            },
          },
        }}
        aria-labelledby="responsive-dialog-title">
        <div className="login_dialog_main_container">
          {/* left container start */}
          <div className="login_dialog_inner_container_01">
            {/* login msg */}
            <div className="login_msg_01">
              <span>
                나를 더 잘 이해할 수 있는 노트를 추천하려면 로그인하세요.
              </span>
            </div>
            {/* logo */}
            <div className="dialog_logo">Logo</div>
            {/* qr code */}
            <div className="dialog_qr_code_container">
              <Image src={QRImage} alt="qr-code" className="qr_image" />
            </div>
            {/* available */}
            <div className="dialog_available_options">
              <span>사용 가능</span>
              {/* options */}
              <div className="cc_options">
                <div>
                  <FaBook />
                  <span>작은 빨간 책</span>
                </div>
                <div>
                  <PiWechatLogoBold />
                  <span>위챗</span>
                </div>
              </div>
            </div>
            {/* bottom text */}
            <div className="dialog_bottom_text">
              <FaPlay className="play_btn_01" />
              <HiPause className="pause_btn_01" />
              <span>핫플에서 코드를 스캔하는 방법</span>
            </div>
          </div>
          {/* left container end */}
          {/* right container start */}
          <div className="login_dialog_inner_container_02">
            {/* close btn */}
            <button onClick={handleClose} className="close_btn">
              <IoMdClose style={{ width: "20px", height: "20px" }} />
            </button>
            {/* auth container */}
            <div className="auth_container_01">
              <p>휴대폰번호로 로그인</p>
              {/* phone number container */}
              <div className="number_box_container">
                <span>+86</span>
                <input
                  type="phone"
                  name=""
                  id=""
                  placeholder="휴대폰번호 입력"
                />
              </div>
              {/* otp container */}
              <div className="otp_box_container">
                <input type="text" name="" id="" placeholder="확인 입력" />
                <span>인증 코드 받기</span>
              </div>
              {/* login button */}
              <button
                style={{ marginTop: "50px" }}
                className="sidebar_login_button">
                로그인
              </button>
              {/* policy */}
              <label className="policy_container">
                <input type="checkbox" name="" id="" />
                <span>
                  이용약관, 개인정보취급방침, 아동·청소년 개인정보 보호 규정을
                  읽었으며 이에 동의합니다
                </span>
              </label>
              {/* msg */}
              <p className="user_login_msg">
                새로운 사용자는 직접 로그인할 수 있습니다
              </p>
            </div>
          </div>
          {/* right container end */}
        </div>
      </Dialog>
    </>
  );
};

export default AuthWindow;
