import React, { useState } from "react";
import "../assets/css/AddConfessionPost.css";
import { FaLock } from "react-icons/fa";
import { database as db, set, ref, onValue } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";

const AddConfessionPost = () => {
  const [text, setText] = useState("");
  const addConfession = () => {
    //query..
    if (text) {
      //add to db.

      set(ref(db, "confessions/" + uuidv4()), {
        note: text,
        createdAt: Date.now(),
      }).then((err) => {
        if (!err) {
          toast.success("Confession Added");

          setText("");

          //check data;

          onValue(ref(db, "confessions"), (snapshot) => {
            let _data = snapshot.val();

            for (let key in _data) {
              let createdAt = new Date(_data[key].createdAt);
              createdAt.setDate(createdAt.getDate() + 1); // 24hrs.

              if (new Date() >= createdAt) {
                set(ref(db, "confessions/" + key), null);
                console.log("execeded 24 hrs; it has to be deleted from db.. ");
              }
            }
          });
        } else toast.error("Couldnot add Confession Note.");
      });
    }
  };
  return (
    <center>
      <div className="add-confession-post">
        <textarea
          rows="8"
          cols="85"
          placeholder="Write your Confession here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <button className="confess-btn" onClick={() => addConfession()}>
          Confess
        </button>
      </div>

      <FaLock size="8" />
      <small style={{ fontSize: "8px", marginLeft: "5px" }}>
        Confessed Note will remain for 24 hrs.
      </small>
      <ToastContainer delay={2500} />
    </center>
  );
};

export default AddConfessionPost;
