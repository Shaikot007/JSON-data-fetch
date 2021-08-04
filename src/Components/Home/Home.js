import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { fetchUsersAction } from "../../Redux/Action/UsersAction";
import UserList from "../UserList/UserList";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <div className="Home">
      <UserList />
    </div>
  );
};

export default Home;
