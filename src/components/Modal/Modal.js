import React from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice";
import "./Modal.css";

const Modal = (props) => {
  const dispatch = useDispatch();
  const handleClose = (event) => {
    if (event.target.className === "modalContainer") {
      dispatch(loginActions.showHideModal());
    }
  };
  return (
    <div className="modalContainer" onClick={handleClose}>
      <div className="modal">
        <div className="modal__head">
          <h2>{props.label}</h2>
          <span
            className="modal__close"
            onClick={() => dispatch(loginActions.showHideModal())}
          >
            x
          </span>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
