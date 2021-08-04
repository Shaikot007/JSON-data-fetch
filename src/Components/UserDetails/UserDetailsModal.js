import React, { useState, useEffect } from 'react';
import "./UserDetailsModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchUserDetailsAction } from "../../Redux/Action/UsersAction";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UserImage from "../../Images/user.png";

const UserDetailsModal = (props) => {

  const { className } = props;

  let history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetailsAction(id));
  }, [id, dispatch]);

  const [userModal, setUserModal] = useState(true);

  const toggle = () => {
    setUserModal(!userModal);
    history.goBack();
  };

  const userDetailsData = useSelector(state => state.users.user_details);

  return (
    <div>
      <Modal isOpen={userModal} toggle={toggle} className={className} size="lg">
      <ModalHeader className="ModalHeader" toggle={toggle}>{userDetailsData.title}</ModalHeader>
        <ModalBody className="ModalBody">
          <div className="ModalBodyInfo">
            <div className="InfoItemImage">
              <img src={UserImage} alt="User_image" />
            </div>
            <div className="InfoItem">
              <div className="InfoItemText">
              </div>
              <div className="InfoItemText">
                <p>User id: {userDetailsData.userId}</p>
              </div>
              <div className="InfoItemText">
                <p>Id: {userDetailsData.id}</p>
              </div>
              <div className="InfoItemText">
              </div>
            </div>
          </div>
          <div className="ModalBodyDetails">
            {userDetailsData.body}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Go back</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UserDetailsModal;
