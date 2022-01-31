import React, { useState, useEffect } from "react";
import { database as db, ref, onValue } from "../config/firebase";
import "../assets/css/ConfessionList.css";
import Moment from "react-moment";
import {
  ShimmerSimpleGallery,
  ShimmerSectionHeader,
} from "react-shimmer-effects";

const ConfessionList = () => {
  const [confessionList, setConfessionList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    onValue(ref(db, "confessions"), (snapshot) => {
      let _data = snapshot.val();
      let _confessionList = [];

      for (let key in _data) {
        _confessionList.push(_data[key]);
      }
      setConfessionList(_confessionList);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="confession-list">
      {isLoading ? (
        <div style={{ width: "65%" }}>
          <center>
            <ShimmerSimpleGallery
              card
              imageHeight={300}
              row={2}
              col={2}
              caption
            />
          </center>
        </div>
      ) : confessionList ? (
        confessionList.map((confession, index) => {
          let _date = new Date(confession.createdAt);
          return (
            <div key={index} className="confession-card">
              <div>{`${_date.getFullYear()} ${
                monthList[_date.getMonth()]
              } ${_date.getDate()}`}</div>
              <br />

              <big>{confession.note}</big>
              <div className="time-ago">
                <small>
                  <Moment fromNow>{confession.createdAt}</Moment>
                </small>
              </div>
            </div>
          );
        })
      ) : (
        "No Confession List"
      )}
    </div>
  );
};

export default ConfessionList;
