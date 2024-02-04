import React, { useEffect, useRef, useState } from "react";
import styles from "./GroupNotes.module.css";
import middleDot from "../../assets/middleDot.svg";
import sendImg from "../../assets/sendButton.svg";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const hours = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const GroupNotes = ({ id }) => {
  const inputRef = useRef(null);
  const [currentNoteID, setCurrentNoteID] = useState(0);
  const [notes, setNotes] = useState([]);

  const sendHandler = (note) => {
    const date = new Date();
    const timeString = date.getHours() >= 12 ? " PM" : " AM";
    console.log(date.getMonth());
    const newItem = {
      noteID: currentNoteID,
      note: note,
      date:
        date.getDate() +
        " " +
        months[date.getMonth()] +
        " " +
        date.getFullYear(),
      time:
        hours[(date.getHours() % 12) - 1] +
        ":" +
        String(date.getMinutes()).padStart(2, "0") +
        timeString,
    };
    const updatedArray = [...notes, newItem];
    setNotes(updatedArray);
    setCurrentNoteID(currentNoteID + 1);
    localStorage.setItem("notes", JSON.stringify(updatedArray));
    inputRef.current.value = "";
  };

  useEffect(() => {
    const notesArray = localStorage.getItem("notes");
    if (notesArray) {
      setNotes(JSON.parse(notesArray));
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}></div>
      <div className={styles.notesArea}>
        {notes.map((item) => (
          <div className={styles.note} key={item.noteID}>
            <p className={styles.noteText}>{item.note}</p>
            <div className={styles.details}>
              <p className={styles.noteDate}>{item.date}</p>
              <img
                src={middleDot}
                className={styles.middleDot}
                style={{ height: `7.5px`, width: `7.5px` }}
                alt=""
              />
              <p className={styles.noteTime}>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.createNotesArea}>
        <input
          ref={inputRef}
          type="text"
          name="notes"
          placeholder="Enter your text here..........."
          className={styles.noteInput}
        />
        <img
          className={styles.sendImgButton}
          src={sendImg}
          alt=""
          onClick={() => sendHandler(inputRef.current.value)}
        />
      </div>
    </div>
  );
};

export default GroupNotes;
