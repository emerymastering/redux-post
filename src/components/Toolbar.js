import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { selectProfile } from "../store/auth/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/slice";

export default function Toolbar() {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const navigate = useNavigate();
  console.log(profile);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <Link to={"/"}>Home</Link>{" "}
      {profile ? (
        <span>
          Hello {profile.name} <button onClick={handleLogout}>Logout</button>
        </span>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}{" "}
    </div>
  );
}
