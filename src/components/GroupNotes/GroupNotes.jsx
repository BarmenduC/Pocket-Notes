import React from "react";
import styles from "./GroupNotes.module.css";
import middleDot from '../../assets/middleDot.svg'

const GroupNotes = ({id}) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}></div>
      <div className={styles.notesArea}>
        <div className={styles.note}>
          <p className={styles.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            aperiam dolor, itaque quos molestiae quaerat laboriosam accusamus
            numquam veritatis! Quo, dolorem sint quidem iste incidunt inventore
            pariatur esse non accusamus rerum voluptatum alias impedit id
            consequatur nam possimus, sit deserunt at. Molestias tenetur labore
            consequuntur placeat, vero sapiente totam cum.
          </p>
          <div className={styles.details}>
            <p className={styles.noteDate}>9 March 2023</p>
            <img src={middleDot} className={styles.middleDot} style={{height: `7.5px`, width: `7.5px`}} alt="" />
            <p className={styles.noteTime}>10:10 AM</p>
          </div>
        </div>
        <div className={styles.note}>
          <p className={styles.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            aperiam dolor, itaque quos molestiae quaerat laboriosam accusamus
            numquam veritatis! Quo, dolorem sint quidem iste incidunt inventore
            pariatur esse non accusamus rerum voluptatum alias impedit id
            consequatur nam possimus, sit deserunt at. Molestias tenetur labore
            consequuntur placeat, vero sapiente totam cum.
          </p>
          <div className={styles.details}>
            <p className={styles.noteDate}>9 March 2023</p>
            <img src={middleDot} className={styles.middleDot} style={{height: `7.5px`, width: `7.5px`}} alt="" />
            <p className={styles.noteTime}>10:10 AM</p>
          </div>
        </div>
        <div className={styles.note}>
          <p className={styles.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            aperiam dolor, itaque quos molestiae quaerat laboriosam accusamus
            numquam veritatis! Quo, dolorem sint quidem iste incidunt inventore
            pariatur esse non accusamus rerum voluptatum alias impedit id
            consequatur nam possimus, sit deserunt at. Molestias tenetur labore
            consequuntur placeat, vero sapiente totam cum.
          </p>
          <div className={styles.details}>
            <p className={styles.noteDate}>9 March 2023</p>
            <img src={middleDot} className={styles.middleDot} style={{height: `7.5px`, width: `7.5px`}} alt="" />
            <p className={styles.noteTime}>10:10 AM</p>
          </div>
        </div>
        <div className={styles.note}>
          <p className={styles.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            aperiam dolor, itaque quos molestiae quaerat laboriosam accusamus
            numquam veritatis! Quo, dolorem sint quidem iste incidunt inventore
            pariatur esse non accusamus rerum voluptatum alias impedit id
            consequatur nam possimus, sit deserunt at. Molestias tenetur labore
            consequuntur placeat, vero sapiente totam cum.
          </p>
          <div className={styles.details}>
            <p className={styles.noteDate}>9 March 2023</p>
            <img src={middleDot} className={styles.middleDot} style={{height: `7.5px`, width: `7.5px`}} alt="" />
            <p className={styles.noteTime}>10:10 AM</p>
          </div>
        </div>
        <div className={styles.note}>
          <p className={styles.noteText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            aperiam dolor, itaque quos molestiae quaerat laboriosam accusamus
            numquam veritatis! Quo, dolorem sint quidem iste incidunt inventore
            pariatur esse non accusamus rerum voluptatum alias impedit id
            consequatur nam possimus, sit deserunt at. Molestias tenetur labore
            consequuntur placeat, vero sapiente totam cum.
          </p>
          <div className={styles.details}>
            <p className={styles.noteDate}>9 March 2023</p>
            <img src={middleDot} className={styles.middleDot} style={{height: `7.5px`, width: `7.5px`}} alt="" />
            <p className={styles.noteTime}>10:10 AM</p>
          </div>
        </div>
      </div>
      <div className={styles.createNotesArea}>
        <input
          type="text"
          name="notes"
          placeholder="Enter your text here..........."
          className={styles.noteInput}
        />
      </div>
    </div>
  );
};

export default GroupNotes;
