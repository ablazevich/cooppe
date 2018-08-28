/// Glamorous
import glamorous from "glamorous";

const Paragraph = glamorous.div({
  padding: "10px 0",
  lineHeight: "25px"
});

const A = glamorous.a({
  color: "steelblue",
  textDecoration: "none",
  ':hover': {
    textDecoration: "underline",
  }
});

export { Paragraph, A };
