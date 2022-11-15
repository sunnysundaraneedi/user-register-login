import Modal from "../Modal/Modal";
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/loginSlice";

const EditProfile = () => {
  const user = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState({
    fullname: user.data.fullname,
    email: user.data.email,
    password: user.data.password,
    address: user.data.address,
    phNumber: user.data.phNumber,
    role: user.data.role,
  });
  const changeHandler = (event) => {
    setInputFields((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const taskDocRef = doc(db, "users", user.id);
    console.log(taskDocRef);
    try {
      await updateDoc(taskDocRef, {
        fullname: inputFields.fullname,
        email: inputFields.email,
        password: inputFields.password,
        address: inputFields.address,
        phNumber: inputFields.phNumber,
        role: inputFields.role,
      });
      dispatch(loginActions.setCurrentUser(inputFields.email));
      console.log(inputFields.email);
      dispatch(loginActions.showHideModal());
    } catch (error) {
      console.log("Something went wrong : ", error);
    }
  };
  return (
    <Modal>
      <div className="container">
        <div className="forms">
          <div className="form login">
            <span className="title">Register</span>
            <form onSubmit={submitHandler}>
              {/*Inputs*/}
              <div className="input-field">
                <input
                  value={inputFields.fullname}
                  onChange={changeHandler}
                  name="fullname"
                  type="text"
                  placeholder="Enter your name"
                  className="uil uil-user"
                />
                <i className="uil uil-user icon"></i>
              </div>
              <div className="input-field">
                <input
                  value={inputFields.email}
                  onChange={changeHandler}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  value={inputFields.address}
                  onChange={changeHandler}
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                />
                <i className="uil uil-building icon"></i>
              </div>
              <div className="input-field">
                <input
                  value={inputFields.password}
                  onChange={changeHandler}
                  name="password"
                  type="password"
                  placeholder="Update your password"
                  re
                />
                <i className="uil uil-padlock icon"></i>
              </div>
              <div className="input-field">
                <input
                  value={inputFields.phNumber}
                  onChange={changeHandler}
                  name="phNumber"
                  type="number"
                  placeholder="Enter your phone number"
                />
                <i className="uil uil-phone icon"></i>
              </div>
              <div className="input-field">
                <input
                  value={inputFields.role}
                  onChange={changeHandler}
                  name="role"
                  type="select"
                  placeholder="Enter your role(Admin/Guest)"
                />
                <i className="uil uil-book icon"></i>
              </div>
              <button className="button">Update</button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfile;

// const taskDocRef = doc(db, "users", task.id);
//     console.log(taskDocRef);
//     try {
//       await updateDoc(taskDocRef, {
//         title: newTitle,
//         description: newDescription,
//       });
//     } catch (error) {
//       console.log("Something went wrong : ", error);
//     }
//     closeModal();
