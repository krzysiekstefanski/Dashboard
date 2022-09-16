import styled from "vue3-styled-components";
import ButtonVariants from "./ButtonVariants";
import { color } from "../../colors";

const Button = styled.button`
  font-family: Inter, sans-serif;
  width: ${ (props) => props.width ? props.width : "" };
  max-width: ${ (props) => props.max ? props.max : "" };
  height: ${ (props) => props.height ? props.height : "" };
  color: ${ (props) => props.variant && ButtonVariants[props.variant].color
    ? ButtonVariants[props.variant].color
    : `${color.white}`
  };
  padding: ${ (props) => props.padding ? props.padding : "9px 32px" };
  border: ${ (props) => props.variant && ButtonVariants[props.variant].border
    ? ButtonVariants[props.variant].border
    : "none"
  };
  background-color: ${ (props) => props.variant && ButtonVariants[props.variant].backgroundColor
    ? ButtonVariants[props.variant].backgroundColor
    : `${color.primary700}`
  };
  border-radius: ${ (props) => props.borderRadius ? props.borderRadius : "8px" };
  font-size: ${ (props) => props.fontSize ? props.fontSize : "16px" };
  font-weight: ${ (props) => props.fontWeight ? props.fontWeight : "700" };
  line-height: ${ (props) => props.lineHeight ? props.lineHeight : "22px" };
  letter-spacing: ${ (props) => props.letterSpacing ? props.letterSpacing : "-0.1px" };
  transition: ${ (props) => props.variant && ButtonVariants[props.variant].transition
    ? ButtonVariants[props.variant].transition
    : "0.3s ease all"
  };
  cursor: pointer;
  //background-image: ${ (props) => props.variant && ButtonVariants[props.variant].backgroundImage
    ? ButtonVariants[props.variant].backgroundImage
    : `linear-gradient(#0E0E0E, #0E0E0E)`
  };
  //background-position: ${ (props) => props.variant && ButtonVariants[props.variant].backgroundPosition
    ? ButtonVariants[props.variant].backgroundPosition
    : "50% 50%"
  };
  //background-repeat: ${ (props) => props.variant && ButtonVariants[props.variant].backgroundRepeat
    ? ButtonVariants[props.variant].backgroundRepeat
    : "no-repeat"
  };
  //background-size: ${ (props) => props.variant && ButtonVariants[props.variant].backgroundSize
    ? ButtonVariants[props.variant].backgroundSize
    : "0% 100%" };
  margin: ${ (props) => props.margin ? props.margin : "" };
  
  :hover {
    color: ${ (props) => props.variant && ButtonVariants[props.variant].hoverColor
      ? ButtonVariants[props.variant].hoverColor
      : `${color.white}`
    };
    background-color: ${ (props) => props.variant && ButtonVariants[props.variant].hoverBackgroundColor
      ? ButtonVariants[props.variant].hoverBackgroundColor
      : `${color.primary600}`
    };
    border: ${ (props) => props.variant && ButtonVariants[props.variant].hoverBorder
      ? ButtonVariants[props.variant].hoverBorder
      : "none"
    };
    //background-size: ${ (props) => props.variant && ButtonVariants[props.variant].hoverBackgroundSize
      ? ButtonVariants[props.variant].hoverBackgroundSize
      : "100% 100%"
    };
  };
  
  :focus {
    color: ${ (props) => props.variant && ButtonVariants[props.variant].focusColor
      ? ButtonVariants[props.variant].focusColor
      : `${color.white}`
    };
    background-color: ${ (props) => props.variant && ButtonVariants[props.variant].focusBackgroundColor
      ? ButtonVariants[props.variant].focusBackgroundColor
      : `${color.primary700}`
    };
    border: ${ (props) => props.variant && ButtonVariants[props.variant].focusBorder
      ? ButtonVariants[props.variant].focusBorder
      : "none"
    };
    outline: ${ (props) => props.variant && ButtonVariants[props.variant].focusOutline
      ? ButtonVariants[props.variant].focusOutline
      : "none"
    };
  };

  :focus-visible {
    color: ${ (props) => props.variant && ButtonVariants[props.variant].focusColor
      ? ButtonVariants[props.variant].focusColor
      : `${color.white}`
    };
    background-color: ${ (props) => props.variant && ButtonVariants[props.variant].focusBackgroundColor
      ? ButtonVariants[props.variant].focusBackgroundColor
      : `${color.primary700}`
    };
    border: ${ (props) => props.variant && ButtonVariants[props.variant].focusBorder
      ? ButtonVariants[props.variant].focusBorder
      : "none"
    };
    outline: ${ (props) => props.variant && ButtonVariants[props.variant].focusOutline
      ? ButtonVariants[props.variant].focusOutline
      : "none"
    };
  };
`;

export default Button;
