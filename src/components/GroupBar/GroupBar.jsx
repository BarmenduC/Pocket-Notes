import React, { useEffect, useRef, useState } from "react";
import styles from "./GroupBar.module.css";
import plusImage from "../../assets/+.png";
import Group from "../Group/Group";

const GroupBar = (props) => {
  const [addNoteFlag, setAddNoteFlag] = useState(false);
  const addNoteBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        addNoteBoxRef.current &&
        !addNoteBoxRef.current.contains(event.target)
      ) {
        setAddNoteFlag(false);
        props.setPopupOpen(!props.popupOpen);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    console.log("Clicked the button");
    setAddNoteFlag(!addNoteFlag);
    props.setPopupOpen(!props.popupOpen);
  };

  const colorArray = [
    {
      name: "violet",
      backgroundColor: "#B38BFA",
    },
    {
      name: "pink",
      backgroundColor: "#FF79F2",
    },
    {
      name: "lightBlue",
      backgroundColor: "#43E6FC",
    },
    {
      name: "orange",
      backgroundColor: "#F19576",
    },
    {
      name: "darkBlue",
      backgroundColor: "#0047FF",
    },
    {
      name: "indigo",
      backgroundColor: "#6691FF",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.headingText}>Pocket Notes</h1>
        </div>
        <div className={styles.notes}>
          <Group />
        </div>
        <div className={styles.addNote} onClick={() => handleClick()}>
          <img src={plusImage} className={styles.plusImage} alt="Add Note" />
        </div>
        {addNoteFlag ? (
          <div
            ref={addNoteBoxRef}
            className={styles.addNoteBox}
            style={{ zIndex: `3` }}
          >
            <div className={styles.addNoteHeading}>
              <p>Create New Group</p>
            </div>
            <div className={styles.addNoteSubHeading}>
              <p>Group Name</p>
              <input
                className={styles.groupNameInput}
                type="text"
                placeholder="Enter group name"
              />
            </div>
            <div className={styles.addNoteSubHeading}>
              <p>Choose color</p>
              <div className={styles.colorSet}>
                {colorArray.map((color) => (
                  <div
                    key={color.name}
                    className={styles.groupColor}
                    style={{ backgroundColor: `${color.backgroundColor}` }}
                  ></div>
                ))}
              </div>
            </div>
            <button className={styles.addNoteButton}>Create</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default GroupBar;
