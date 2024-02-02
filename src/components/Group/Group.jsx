import React, { useEffect, useRef, useState } from "react";
import styles from "./Group.module.css";
import plusImage from "../../assets/+.png";
import GroupNotes from "../GroupNotes/GroupNotes";
// import ProfilePicture from "../ProfilePicture/ProfilePicture";

const Group = (props) => {

  const [selected, setSelected] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null)
  const [currentID, setCurrentID] = useState(0);
  const [groupName, setGroupName] = useState("");
  const [dynamicClass, setDynamicClass] = useState(styles.groupContainer);
  const [addNoteFlag, setAddNoteFlag] = useState(false);
  const addNoteBoxRef = useRef(null);
  const inputRef = useRef(null);
  const colorRef = useRef(null);
  const [colorArray, setColorArray] = useState([
    {
      id: 1,
      name: "violet",
      backgroundColor: "#B38BFA",
      selected: false,
    },
    {
      id: 2,
      name: "pink",
      backgroundColor: "#FF79F2",
      selected: false,
    },
    {
      id: 3,
      name: "lightBlue",
      backgroundColor: "#43E6FC",
      selected: false,
    },
    {
      id: 4,
      name: "orange",
      backgroundColor: "#F19576",
      selected: false,
    },
    {
      id: 5,
      name: "darkBlue",
      backgroundColor: "#0047FF",
      selected: false,
    },
    {
      id: 6,
      name: "indigo",
      backgroundColor: "#6691FF",
      selected: false,
    },
  ]);

  const colorArrayRef = useRef(colorArray);

  const [groups, setGroups] = useState([
    
  ]);

  useEffect(() => {
    const groupDetailArray = localStorage.getItem('groupArray')
    if(groupDetailArray){
      setGroups(JSON.parse(groupDetailArray))

    }
  
    
  }, [])
  


  const GroupProfile = ({
    id,
    name,
    backgroundColor = "black",
    selected,
    setGroups,
    NSectionVisible, setNSectionVisible
  }) => {

    const initials = name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("").toUpperCase();

    const groupSelector = (id) => {
      console.log(id);

      // Create a new array with updated classes based on the condition
      const updatedGroups = groups.map((group) => ({
        ...group,
        className:
          group.id === id
            ? styles.selectedGroupContainer
            : styles.groupContainer,
      }));
      console.log(updatedGroups);
      {setNSectionVisible(!NSectionVisible)}
      <GroupNotes id={id} />
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

  const handleClick = () => {
    console.log("Clicked the button");
    setAddNoteFlag(!addNoteFlag);
    props.setPopupOpen(!props.popupOpen);
  };

  const newGroup = () => {
    console.log(inputRef.current.value);
    // console.log(colorRef.current.style.backgroundColor);
    const newItem = {
      id: currentID,
      name: inputRef.current.value,
      backgroundColor: selectedColor,
      selected: false,
    }
    const updatedArray = [...groups, newItem]
    console.log(updatedArray)
    setGroups(updatedArray)
    setCurrentID(currentID + 1)
    localStorage.setItem('groupArray', JSON.stringify(updatedArray));
  };

  const selectColor = (event) => {
    console.log(event.target.style.backgroundColor)
    setSelectedColor(event.target.style.backgroundColor)
  }

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
          NSectionVisible={props.NSectionVisible} setNSectionVisible={props.setNSectionVisible}
        />
      ))}
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
              ref={inputRef}
              name="groupName"
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
                  ref={colorRef}
                  key={color.id}
                  id={color.id}
                  className={`${styles.groupColor} ${
                    color.selected ? styles.selectedBorder : styles.noBorder
                  }`}
                  style={{ backgroundColor: `${color.backgroundColor}` }}
                  onClick={(event) => selectColor(event)}
                ></div>
              ))}
            </div>
          </div>
          <button className={styles.addNoteButton} onClick={newGroup}>
            Create
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Group;
