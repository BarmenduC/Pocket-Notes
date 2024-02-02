import { useEffect, useState } from "react";
import GroupBar from "./components/GroupBar/GroupBar";
import NotesSection from "./components/NotesSection/NotesSection";
import overlay from "./assets/Colorcard-hex_2F2F2F-www.colorbook.io.png";
import GroupNotes from "./components/GroupNotes/GroupNotes";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <div className="mainContainer">
        {/* {useEffect(() => {
        popupOpen ? (
          <img
            src={overlay}
            style={{
              backgroundBlendMode: `lighten`,
              opacity: `0.5`,
              zIndex: `2`,
            }}
            alt=""
            className="overlayImage"
          />
        ) : (
          <></>
        )}
        , [popupOpen])} */}

        {/* {popupOpen ? (
          <div
            // src={overlay}
            style={{
              backgroundColor: `rgb(47,47,47)`,
              backgroundBlendMode: `lighten`,
              opacity: `0.5`,
              zIndex: `2`,
            }}
            alt=""
            className="overlayImage"
          />
        ) : (
          <></>
        )} */}
        <GroupBar popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        <NotesSection popupOpen={popupOpen} setPopupOpen={setPopupOpen} />

        {/* <GroupNotes /> */}
      </div>
    </>
  );
}

export default App;
