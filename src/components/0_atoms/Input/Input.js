import styled from "vue3-styled-components"
import { color } from "../../colors";
import SearchClear from "../../../assets/images/clear-search.svg"

const Input = styled.input`
  font-family: Inter, sans-serif;
  width: ${ (props) => props.width ? props.width : "100%" };
  max-width: ${ (props) => props.max ? props.max : "" };
  height: ${ (props) => props.height ? props.height : "auto" };
  padding: ${ (props) => props.padding ? props.padding : "8px 16px" };
  border: ${ (props) => props.border ? props.border : `1px solid ${color.gray400}` };
  border-radius: ${ (props) => props.borderRadius ? props.borderRadius : "8px" };
  font-size: ${ (props) => props.fontSize ? props.fontSize : "16px" };
  font-weight: ${ (props) => props.fontWeight ? props.fontWeight : "500" };
  line-height: ${ (props) => props.lineHeight ? props.lineHeight : "24px" };
  font-style: ${ (props) => props.fontStyle ? props.fontStyle : "normal" };
  letter-spacing: ${ (props) => props.letterSpacing ? props.letterSpacing : "-0.1px" };

  &[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background: url(${SearchClear}) no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
    margin: 0 0 0 14px;
  }

  &[type="search"]:focus::-webkit-search-cancel-button {
    opacity: 1;
    pointer-events: all;
  }

  :hover {
    border: 1px solid transparent;
    box-shadow: 0 0 0 4px ${color.gray100};
  };

  :focus {
    border: 1px solid ${color.black};
    outline: none;
    box-shadow: none;
  };

  :focus-visible {
    border: 1px solid ${color.black};
    outline: none;
    box-shadow: none;
  };

  :active {
    border: 1px solid ${color.gray400};
  };

  ::placeholder {
    color: ${color.gray500};
  };

  &.error {
    border-color: ${color.error700};

    :hover {
      outline: none;
      box-shadow: none;
    };
  };
`;

export default Input;
