// React
import React, { Component } from "react";

// Theme
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "../muiTheme";

// Custom components
import Navigation from "./Navigation";
import Arrow from "./Arrow";
import Footer from "./Footer";
// import Title from "./Title";
import Content from "./Content";
import Meta from "./Meta";

class Article extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Meta
            titleTag={this.props.titleTag}
            descriptionTag={this.props.descriptionTag}
          />
          <Navigation
            city={this.props.identifier}
            back={this.props.decrease}
            database={this.props.database}
          />
          <Content
            city={this.props.identifier}
            database={this.props.database}
            content={this.props.component}
          />
          {this.props.identifier !== "inner" ? <Arrow /> : null}
          {this.props.identifier !== "inner" ? <Footer/> : null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Article;
