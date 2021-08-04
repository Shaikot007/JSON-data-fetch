import React from "react";
import "./UserList.css";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import UserImage from "../../Images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserList = () => {

  //For users list
  const usersData = useSelector(state => state.users.users_list);

  let history = useHistory();

  const gotoUserDetails = (id) => {
    history.push(`/${id}`);
  };

  return (
    <div className="UserInfo">
      {usersData.map(data =>
        <div className="User" key={data.id}>
          <div className="UserImage" onClick={() => gotoUserDetails(data.id)}>
            <img src={UserImage} alt="User_image" />
            <div className="UserImageText">
              <p>Click here for details</p>
            </div>
          </div>
          <div className="UserTitle">
            <p>{data.title}.</p>
          </div>
          <div className="UserDeleteBox">
            <div className="UserDelete">
              <FontAwesomeIcon icon="trash-alt" size="1x" className="Trash" />
              <p>Delete</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
