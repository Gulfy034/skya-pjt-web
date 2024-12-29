import React from "react";
import gsap from "gsap";

import '@hooks/use-notification';

import {
    AiOutlineCheckCircle,
    AiOutlineClose,
    AiOutlineCloseCircle,
    AiOutlineInfoCircle,
    AiOutlineWarning,
  } from "react-icons/ai";

  const iconStyles = {marginRight: '10px'};
  const icons = {
    success: <AiOutlineCheckCircle style={iconStyles} />,
    info: <AiOutlineInfoCircle style={iconStyles} />,
    warning: <AiOutlineWarning style={iconStyles} />,
    error: <AiOutlineCloseCircle style={iconStyles} />,
  };
  
  export const Notification = ({type = 'info', message, onClose = () => {}}) => {
    return (
      <div className={`notification ${type}`}>
        {/* icon */}
        {icons[type]}
        {/* message */}
        {message}
        {/* close button */}
        <AiOutlineClose
          color="white"
          className="closeBtn"
          onClick={() => onClose()}
        />
      </div>
    );
  };