import React from "react";
import ProfileStyled from "./ProfileStyled";

import UserInformationStyled from "./UserInformationStyled";
import { AiOutlineUser } from "react-icons/ai";
import { GiHeartKey } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";

const Profile = () => {
  return (
    <ProfileStyled>
      <UserInformationStyled>
        <div className="user-information user-name">
          <AiOutlineUser className="user-name__icon" />
          <div className="title-description">
            <label>نام کاربری </label>
            <span>محمد خداقلی</span>
          </div>
          <div className="user-informaion__go">{">"}</div>
        </div>
        <div className="user-information user-password">
          <GiHeartKey className="user-password__icon" />
          <div className="title-description">
            <label>پسورد </label>
            <span>آخرین تغییر ۲ سال پیش</span>
          </div>
          <div className="user-informaion__go">{">"}</div>
        </div>
        <div className="user-information user-email">
          <MdOutlineMail className="user-email__icon" />
          <div className="title-description">
            <label>ایمیل </label>
            <span>mdkhoda****@gmail.com</span>
          </div>
          <div className="user-informaion__go">{">"}</div>
        </div>
        <div className="user-information user-phone">
          <MdOutlineMail className="user-phone__icon" />
          <div className="title-description">
            <label>موبایل </label>
            <span dir="ltr">+۹۸ ۹۹۰ ۹۲۱ ۹۸۳۵ </span>
          </div>
          <div className="user-informaion__go">{">"}</div>
        </div>
      </UserInformationStyled>
    </ProfileStyled>
  );
};

export default Profile;
