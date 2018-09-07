// React
import React from "react";

// Glamorous
import glamorous from "glamorous";

// Material UI components
import { Divider } from "material-ui";

const ContentContainer = glamorous.div({
  padding: "10px 2% 20px 2%",
  ':first-child': {
    margin: "64px 0 0 0"
  }
});

class Content extends React.Component {
  render() {
    if (this.props.city !== "inner") {
      const sections = Object.entries(this.props.database[this.props.city]);
      const content = sections.map((item, index) => (
        <ContentContainer key={item[0]}>
          <h2 id={index === 0 ? "top" : null} className={item[0].replace(/\s/g, "")}>{item[0]}</h2>
          <Divider />
          {item[1]}
        </ContentContainer>
      ));
      return <div>{content}</div>;
    } else {
      return <ContentContainer>{this.props.content}</ContentContainer>;
    }
  }
}

export default Content;
