import styled from "vue3-styled-components";
import ButtonVariants from "./ButtonVariants";

const Button = styled.button`
  width: ${ (props) => props.width ? props.width : "auto" };
  height: ${ (props) => props.height ? props.height : "auto" };
  color: ${ (props) => ButtonVariants[props.variant].color };
  padding: ${ (props) => props.padding ? props.padding : "8px 16px" };
  border: ${ (props) => props.border ? props.border : "1px solid" };
  background-color: ${ (props) => ButtonVariants[props.variant].backgroundColor };
  border-color: ${ (props) => ButtonVariants[props.variant].borderColor };
  border-radius: ${ (props) => props.borderRadius ? props.borderRadius : "4px" };
  font-size: ${ (props) => props.fontSize ? props.fontSize : "14px" };
  font-weight: ${ (props) => props.fontWeight ? props.fontWeight : "600" };
  font-family: ${ (props) => props.fontFamily ? props.fontFamily : "Arial" };
  line-height: ${ (props) => props.lineHeight ? props.lineHeight : "24px" };
  transition: ${ (props) => ButtonVariants[props.variant].transition };
  
  :hover {
    color: ${ (props) => ButtonVariants[props.variant].hoverColor };
    background-color: ${ (props) => ButtonVariants[props.variant].hoverBackgroundColor };
    border-color: ${ (props) => ButtonVariants[props.variant].hoverBorderColor };
  };
  
  :focus {
    color: ${ (props) => ButtonVariants[props.variant].focusColor };
    background-color: ${ (props) => ButtonVariants[props.variant].focusBackgroundColor };
    border-color: ${ (props) => ButtonVariants[props.variant].focusBorderColor };
    outline: ${ (props) => ButtonVariants[props.variant].focusOutline };
  };
`;

export default Button;
