import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component is unmount
    return ()=> unsubscribe();
  },[]);
  
  return (
    <div className="">
      {/* <img
        className="h-14 absolute z-10 left-32 top-1 max-md:left-7 max-md:h-10  max-lg:left-7 max-lg:h-10 "
        src={LOGO}
        alt="logo img"
      /> */}
      <h1 className="h-14 text-red-600 font-bold text-3xl absolute z-10 left-32 top-3 max-md:left-7 max-md:h-10  max-lg:left-7 max-lg:h-10 ">NETLFIX</h1>
      {user && (
        <div className="absolute z-10 right-10 top-3 max-md:right-10 max-md:h-10  max-lg:right-5 max-lg:h-10 flex">
          <img className="h-8" src={user.photoURL} alt="logo img" />
          <button
            className="font-medium text-md ml-2 cursor-pointer text-white bg-red-600 px-4 rounded-md"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
