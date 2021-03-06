// React
import React from "react";

// Jump
import jump from "jump.js";

// Glamorous
import glamorous from "glamorous";

const ArrowContainer = glamorous.div({
  backgroundColor: "lightgrey",
  borderRadius: "100%",
  maxWidth: "50px",
  padding: "9px 9px 5px 9px",
  position: "fixed",
  bottom: "5vw",
  right: "5vw",
  color: "black",
  boxShadow: "0px 4px 13px -6px rgba(0, 0, 0, 0.75)",
  cursor: "pointer"
});

class Arrow extends React.Component {
  render() {
    return (
      <ArrowContainer
        onClick={() =>
          jump("#top", {
            offset: -90
          })
        }
      >
        <i className="material-icons">keyboard_arrow_up</i>
      </ArrowContainer>
    );
  }
}

export default Arrow;
