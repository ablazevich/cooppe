// React
import React from "react";

// Theme
import muiTheme from "../muiTheme";

// Images
// import logo from "../assets/logoBlackAndWhite.png";

// Glamorous
import glamorous from "glamorous";

const FooterContainer = glamorous.div({
  height: "64px",
  background:
    "linear-gradient(" +
    muiTheme.palette.primary1Color +
    "," +
    muiTheme.palette.secondary1Color +
    ")"
});

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer />
    );
  }
}

export default Footer;
