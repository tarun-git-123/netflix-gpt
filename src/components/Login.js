import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const isValidate = checkValidate(
      email.current.value,
      password.current.value
    );
    setErrorMessage(isValidate);
    if (isValidate) return;
    // sign in/ sign up operation
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="brightness-[0.4] h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
        <div className="absolute flex justify-center items-center top-[15%] left-[35%] bg-opacity-[0.65] bg-black w-[30%] pt-10 pb-10 max-md:top-0 max-md:left-0 max-md:absolute max-md:flex max-md:justify-center max-md:items-center max-md:w-full max-md:bg-opacity-[1] max-lg:top-[5%] max-lg:left-[20%] max-lg:bg-opacity-[0.65] max-lg:bg-black max-lg:absolute max-lg:flex max-lg:justify-center max-lg:items-center max-lg:w-[60%]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-2 w-[70%] max-md:w-[90%] max-lg:w-[90%]"
          >
            <h1 className="text-white font-bold text-3xl max-md:text-md mb-5">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <div>
                <input
                  ref={name}
                  type="text"
                  placeholder="Enter Name"
                  className="w-full my-2 p-2 rounded-md bg-transparent border border-gray-400 text-white py-3 px-4 bg-gray-800 bg-opacity-75"
                />
              </div>
            )}
            <div>
              <input
                ref={email}
                type="text"
                placeholder="Enter Email"
                className="w-full my-2 p-2 rounded-md bg-transparent border border-gray-400 text-white py-3 px-4 bg-gray-800 bg-opacity-75"
              />
            </div>
            <div>
              <input
                ref={password}
                type="password"
                placeholder="Enter Password"
                className="w-full p-2 rounded-md my-2 px-4 bg-transparent border text-white border-gray-400 bg-gray-800 bg-opacity-75"
              />
            </div>
            <div>
              <button
                className="bg-red-600 text-white w-full my-2 p-2 rounded-md"
                onClick={handleButtonClick}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </div>
            {errorMessage && (
              <h1 className="text-red-600 text-md font-normal">
                {errorMessage}
              </h1>
            )}
            <h1 className="text-white font-normal text-md py-3 text-center">
              Forgot Password?
            </h1>
            <h1 className="mt-10 text-gray-300 font-normal text-md">
              {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
              <span
                className="font-medium text-white cursor-pointer"
                onClick={toggleSignInForm}
              >
                {!isSignInForm ? "Sign In" : "Sign Up"} now.
              </span>
            </h1>
            <h1 className="mt-3 text-gray-400 font-normal text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
