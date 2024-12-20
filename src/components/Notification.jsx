import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNotification } from '../redux/ActionsCreators';
import { IoIosNotifications } from "react-icons/io";
import { IoIosNotificationsOff } from "react-icons/io";


const Notification = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  return (
    <div className='notification'>
        <span onClick={()=>dispatch(toggleNotification())}>
            {notifications ? <IoIosNotifications style={{fontSize: '2rem'}} /> : <IoIosNotificationsOff style={{fontSize: '2rem'}} /> }
        </span>
    </div>
  );
};

export default Notification;