import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { loginActions } from "./loginSlice";

export const fetchUsers = () => {
  return (dispatch) => {
    const fetchUsersHandler = () => {
      const userDocRef = query(collection(db, "users"));
      onSnapshot(userDocRef, (snapShot) => {
        dispatch(
          loginActions.setUsers(
            snapShot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      });
    };
    fetchUsersHandler();
  };
};
