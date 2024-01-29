import React, { useState } from "react";
import styles from "./Group.module.css";
// import ProfilePicture from "../ProfilePicture/ProfilePicture";

const Group = () => {
  const [currentID, setCurrentID] = useState(2);
  const [dynamicClass, setDynamicClass] = useState(styles.groupContainer);
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
    {
      id: 2,
      name: "Allah Ka Banda",
      backgroundColor: "#56a289",
      textColor: "#fff",
      fontSize: "1.5rem",
      selected: false,
    },
    {
      id: 3,
      name: "Marendra Nodi",
      backgroundColor: "#a69e84",
      textColor: "#fff",
      fontSize: "1.5rem",
      selected: false,
    },
  ]);

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

      const groupSelector = (id) => {
        console.log(id);
      
        // Create a new array with updated classes based on the condition
        const updatedGroups = groups.map((group) => ({
          ...group,
          className: group.id === id ? styles.selectedGroupContainer : styles.groupContainer,
        }));

        console.log(updatedGroups)
      
        // Set the entire array with updated classes
        // setGroups(updatedGroups);
      };

    return (
      <div className={`${dynamicClass}`} onClick={() => groupSelector(id)}>
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

export default Group;
