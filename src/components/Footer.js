// React
import React from "react";

// Theme
import muiTheme from "../muiTheme";

// Images
import logo from "../assets/logoBlackAndWhite.png";

// Glamorous
import glamorous from "glamorous";

const FooterContainer = glamorous.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 2%",
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
      <FooterContainer>
        <img src={logo} alt="Cooppe logo" height="35" width="35" />
      </FooterContainer>
    );
  }
}

export default Footer;
