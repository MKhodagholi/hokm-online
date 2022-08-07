import React from "react";
import ProfilePageStyled from "./ProfilePageStyled";

import { AiOutlineUser, AiOutlinePhone, AiOutlineKey } from "react-icons/ai";
import { MdOutlineMail, MdOutlinePrivacyTip } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { IoHelpOutline } from "react-icons/io5";

const ProfilePage = () => {
  return (
    <ProfilePageStyled>
      <div className="options user">
        <div className="option user-name">
          <AiOutlineUser className="user-name__icon" />
          <div className="option-title">
            <label>نام کاربری </label>
            <span>محمد خداقلی</span>
          </div>
          <div className="option-go">{">"}</div>
        </div>
        <div className="option user-password">
          <AiOutlineKey className="option-icon" />
          <div className="option-title">
            <label>پسورد </label>
            <span>آخرین تغییر ۲ سال پیش</span>
          </div>
          <div className="option-go">{">"}</div>
        </div>
        <div className="option user-email">
          <MdOutlineMail className="option-icon" />
          <div className="option-title">
            <label>ایمیل </label>
            <span>mdkhoda****@gmail.com</span>
          </div>
          <div className="option-go">{">"}</div>
        </div>
        <div className="option user-phone">
          <AiOutlinePhone className="option-icon" />
          <div className="option-title">
            <label>موبایل </label>
            <span dir="ltr">+۹۸ ۹۹۰ ۹۲۱ ۹۸۳۵ </span>
          </div>
          <div className="option-go">{">"}</div>
        </div>
      </div>
      <div className="options app">
        <div className="option tutorial">
          <IoHelpOutline className="option-icon" />
          <div className="option-title">
            <label>آموزش </label>
          </div>
          <div className="option-go">{">"}</div>
        </div>
        <div className="option privacy">
          <MdOutlinePrivacyTip className="option-icon" />
          <div className="option-title">
            <label>حریم خصوصی و شرایط </label>
          </div>
          <div className="option-go">{">"}</div>
        </div>
        <div className="option privacy">
          <SiMinutemailer className="option-icon" />
          <div className="option-title">
            <label>ارتباط با ما </label>
          </div>
          <div className="option-go">{">"}</div>
        </div>
      </div>
    </ProfilePageStyled>
  );
};

export default ProfilePage;
