import React, { useState } from "react";
import styles from "./Group.module.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const Group = () => {

  const [groups, setGroups] = useState([
    {
      id: 0,
      name: "Python Notes",
      backgroundColor: "#FFCOCO",
      textColor: "#fff",
      fontSize: "1.5rem",
      selected: false,
    },
    {
      id: 1,
      name: "Nishant Gawar Singh",
      backgroundColor: "#4CAF50",
      textColor: "#fff",
      fontSize: "1.5rem",
      selected: false,
    },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Gawar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Gawar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Gawar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
    // {
    //   name: "Nishant Kumar Singh",
    //   backgroundColor: "#4CAF50",
    //   textColor: "#fff",
    //   fontSize: "1.5rem",
    // },
  ])

  return (
    <div className={styles.container} >
      {groups?.map((group) => (
        <ProfilePicture
          id={group.id}
          key={group.id}
          name={group.name}
          backgroundColor={group.backgroundColor}
          textColor={group.textColor}
          fontSize={group.fontSize}
          selected={group.selected}
          setGroups={setGroups}
        />
      ))}
    </div>
  );
};

export default Group;
