import React, { useState } from "react";
import styles from "./Group.module.css";
// import ProfilePicture from "../ProfilePicture/ProfilePicture";

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
  ]);

  return (
    <div className={styles.container}>
      {groups?.map((group) => (
        <GroupProfile
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

const GroupProfile = ({
  id,
  name,
  backgroundColor = "black",
  textColor = "#fff",
  fontSize = "1.2rem",
  selected,
  setGroups,
}) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  const [isSelected, setIsSelected] = useState(false);

  const groupSelector = (id) => {
    setGroups((current) => {
      if (current[id]) {
        console.log(current[id].name);
      }
    });

    setIsSelected(!isSelected);
  };

  return (
    <div
      className={
        isSelected ? styles.selectedGroupContainer : styles.groupContainer
      }
      onClick={() => groupSelector(id)}
    >
      <div
        className={styles.baseProfileIcon}
        style={{
          backgroundColor,
        }}
      >
        {initials}
      </div>
      <p className={styles.groupName}>{name}</p>
    </div>
  );
};

export default Group;
