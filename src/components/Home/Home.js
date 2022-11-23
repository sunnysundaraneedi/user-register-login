import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../../store/loginSlice";
import EditProfile from "../EditProfile/EditProfile";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.login.currentUser);
  console.log(user);

  const showHideModal = useSelector((state) => state.login.showModal);

  const logoutHandler = () => {
    navigate("/");
    dispatch(loginActions.logUserOut());
  };

  const modalHandler = () => {
    dispatch(loginActions.showHideModal());
  };
  const userRole = user.data.role.toLowerCase();

  const userLeftStyles =
    userRole === "admin" ? { backgroundColor: "black", color: "white" } : {};

  const userRightStyles =
    userRole === "admin"
      ? { backgroundColor: "white", color: "black" }
      : { color: "white" };
  const btnStyle = userRole === "guest" ? { padding: "9px 18px" } : {};
  return (
    <Fragment>
      <div className="home-container">
        <div className="admin">{userRole.toUpperCase()}</div>
        <div className="left" style={userLeftStyles}>
          <div className="image-container">
            <img
              src={
                userRole === "admin"
                  ? "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  : "https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
              }
              alt="user avatar"
            />
          </div>
          <div className="profile-description">
            <div className="title-edit">
              <p>Name</p>
              {userRole === "admin" && (
                <i className="uil uil-edit" onClick={modalHandler}></i>
              )}
            </div>
            <h3>{user.data.fullname}</h3>
            <div className="title-edit">
              <p>Email</p>
              {userRole === "admin" && (
                <i className="uil uil-edit" onClick={modalHandler}></i>
              )}
            </div>
            <h3>{user.data.email}</h3>
          </div>
        </div>
        <div className="right" style={userRightStyles}>
          <div className="right-container">
            <div className="profile-description">
              <div className="title-edit">
                <p>Name</p>
                {userRole === "admin" && (
                  <i className="uil uil-edit" onClick={modalHandler}></i>
                )}
              </div>
              <h3>{user.data.fullname}</h3>
              <div className="title-edit">
                <p>Email</p>
                {userRole === "admin" && (
                  <i className="uil uil-edit" onClick={modalHandler}></i>
                )}
              </div>
              <h3>{user.data.email}</h3>
              <div className="title-edit">
                <p>Contact Number</p>
                {userRole === "admin" && (
                  <i className="uil uil-edit" onClick={modalHandler}></i>
                )}
              </div>
              <h3>{user.data.phNumber}</h3>
              <div className="title-edit">
                <p>Address</p>
                {userRole === "admin" && (
                  <i className="uil uil-edit" onClick={modalHandler}></i>
                )}
              </div>
              <h3>{user.data.address}</h3>
            </div>
          </div>
        </div>
        <div className="action-btns">
          <button
            className="action-btn"
            style={btnStyle}
            onClick={logoutHandler}
          >
            Logout
          </button>
          {userRole === "admin" && (
            <button className="action-btn" onClick={modalHandler}>
              Update Profile
            </button>
          )}
        </div>
      </div>
      {showHideModal && <EditProfile />}
    </Fragment>
  );
};

export default Home;
