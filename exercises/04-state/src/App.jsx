import React from "react";
import "./App.css";
import LessText from "./components/LessText";
import CharacterCount from "./components/CharacterCount";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        {<LessText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium lorem sit amet arcu suscipit, et fringilla diam pretium. Mauris ut massa ipsum. Mauris quis enim scelerisque risus porttitor venenatis sit amet nec mi. Pellentesque auctor viverra tempus. Etiam porttitor sollicitudin odio, et ultricies ipsum aliquam vitae. Aliquam faucibus erat vel sollicitudin ullamcorper. Nulla efficitur ligula et neque malesuada, iaculis consequat leo gravida. Suspendisse viverra sed turpis eu cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent lacus diam, rhoncus ac elementum et, dapibus id sapien. Nulla in enim ultrices, lobortis purus a, consequat tellus. Fusce risus urna, luctus sed dui eget, maximus porta neque. Maecenas luctus nunc id sapien lacinia aliquet. Proin interdum, orci et dictum dignissim, nisl elit efficitur neque, id commodo leo dui nec leo." maxLength="20" />}
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {<CharacterCount />}
        </div>
      </div>
    </>
  );
}

export default App;
