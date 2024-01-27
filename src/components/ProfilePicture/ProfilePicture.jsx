import React, { useState } from "react";
import styles from "./ProfilePicture.module.css";

const ProfilePicture = ({
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

    const [isSelected, setIsSelected] = useState(false)

  const groupSelector = (id) => {
    setGroups((current) => {
      if (current[id]) {
        console.log(current[id].name);
      }
    });
    
    setIsSelected(!isSelected)
  };

  return (
    <div className={ isSelected ? styles.selectedContainer : styles.container} onClick={() => groupSelector(id)}>
      <div
        className={styles.baseProfileIcon}
        style={{
          //     borderRadius: '50%',
          backgroundColor,
          //     display: 'flex',
          //     alignItems: 'center',
          //     justifyContent: 'center',
          //     color: textColor,
          //     fontSize,
          //     fontWeight: 'bold',
        }}
      >
        {initials}
      </div>
      <p className={styles.groupName}>{name}</p>
    </div>
  );
};

export default ProfilePicture;