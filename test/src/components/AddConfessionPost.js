import React, { useState } from "react";
import "../assets/css/AddConfessionPost.css";
import { FaLock } from "react-icons/fa";
import { database as db, set, ref, onValue } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";

const AddConfessionPost = () => {
  const [text, setText] = useState("");
  const addConfession = () => {
    if (text) {
      set(ref(db, "confessions/" + uuidv4()), {
        note: text,
        createdAt: Date.now(),
      }).then((err) => {
        if (!err) {
          setText("");
          toast.success("Confession Added");

          onValue(ref(db, "confessions"), (snapshot) => {
            let _data = snapshot.val();

            for (let key in _data) {
              let createdAt = new Date(_data[key].createdAt);
              createdAt.setDate(createdAt.getDate() + 1);

              if (new Date() >= createdAt) {
                set(ref(db, "confessions/" + key), null);
              }
            }
          });
        } else {
          toast.error(err);
        }
      });
    }
  };
  return (
    <center>
      <div className="confession-post-div">
        <textarea
          className="confession-post-field"
          cols="65"
          rows="9"
          placeholder="Write your Confession here.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <button className="confess-button" onClick={() => addConfession()}>
          Confess
        </button>
      </div>

      <FaLock size="8" />
      <small style={{ marginLeft: "12px", fontSize: "8px" }}>
        Confessed Note will remain for 24 hours
      </small>
      <ToastContainer delay={2500} />
    </center>
  );
};

export default AddConfessionPost;
