/* eslint-disable react/prop-types */

import {
    AiOutlineCheckCircle,
    AiOutlineClose,
    AiOutlineCloseCircle,
    AiOutlineInfoCircle,
    AiOutlineWarning,
  } from "react-icons/ai";
  import "/src/styles/skya_noti.scss";
  
// this part is used for making this icon into the toast

  const iconStyles = {marginRight: "10px"};
  const icons = {
    success: <AiOutlineCheckCircle style={iconStyles} />,
    info: <AiOutlineInfoCircle style={iconStyles} />,
    warning: <AiOutlineWarning style={iconStyles} />,
    error: <AiOutlineCloseCircle style={iconStyles} />,
  };
  
  const Notification = ({type = "info", message, onClose = () => {}}) => {
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
  
  export default Notification;
  