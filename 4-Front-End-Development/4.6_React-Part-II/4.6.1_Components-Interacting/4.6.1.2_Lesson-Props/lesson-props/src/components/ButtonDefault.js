import React from "react";

function Button(props) {
  const { text = "Default Text of Big Button" } = props;
  return <button>{props.text ? props.text : text}</button>;
}

Button.defaultProps = {
  text: "Default Text of Big Button",
};

export default Button;
