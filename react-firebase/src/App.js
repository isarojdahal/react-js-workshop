import React, { useState } from "react";
import { database, ref, set, update, onValue } from "./config/firebase";

const App = () => {
  const [userData, setUserData] = useState({});
  const [status, setStatus] = useState("");
  const [fetchedUserList, setFetchedUserList] = useState([]);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  //   const insertUser = () => {
  //     setStatus("Inserting....");
  //     set(ref(database, "users/" + Date.now()), {
  //       ...userData,
  //     }).then((error) => {
  //       if (error) setStatus("Error occured during insertion to DB");
  //       else setStatus("Successfully inserted to DB");
  //     });
  //   };

  //   const updateUser = () => {
  //     setStatus("Updating....");
  //     update(ref(database, "users/" + userData.userID), {
  //       ...userData,
  //     }).then((error) => {
  //       if (error) setStatus("Error occured during update to DB");
  //       else setStatus("Successfully updated to DB");
  //     });
  //   };

  //   const deleteUser = () => {
  //     setStatus("Deleting....");
  //     set(ref(database, "users/" + userData.userID), null).then((error) => {
  //       if (error) setStatus("Error occured during deletion");
  //       else setStatus("Successfully deleted from DB");
  //     });
  //   };

  const fetchUsers = () => {
    let _data = [];
    setStatus("Fetching user list....");
    onValue(ref(database, "users"), (snapshot) => {
      if (snapshot) {
        //code..

        let _userList = snapshot.val();

        for (let i in _userList) {
          _data.push(_userList[i]);
        }

        setFetchedUserList(_data);
        setStatus("Data Fetched successfully..");
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          //   insertUser();
          //   updateUser();
          //   deleteUser();
          fetchUsers();
        }}
        autoComplete="off"
      >
        {/* <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={(event) => handleChange(event)}
        /> */}
        {/* <button type="submit">Insert User</button> */}

        {/* <button type="submit">Update User</button> */}
        {/* <button type="submit">Delete User</button> */}
        <button type="submit">Fetch Users</button>
      </form>

      {fetchedUserList.map((user, index) => {
        return (
          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px dashed blue",
              marginTop: "12px",
            }}
          >
            {user.fullname}
            <br />
            {user.address}
          </div>
        );
      })}
      <div
        style={{
          height: "20px",
          width: "100vw",
          backgroundColor: "blue",
          color: "white",
          textAlign: "center",
          position: "fixed",
          bottom: "0px",
          left: "0px",
        }}
      >
        {status}
      </div>
    </div>
  );
};

export default App;
