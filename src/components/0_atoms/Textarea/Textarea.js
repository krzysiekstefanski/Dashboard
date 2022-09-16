import styled from "vue3-styled-components";
import { color } from "../../colors";

const Textarea = styled.textarea`
    width: ${ (props) => props.width ? props.width : "100%" };
    max-width: ${ (props) => props.max ? props.max : "480px" };
    font-family: inherit;
    font-size: ${ (props) => props.size ? props.size : "16px" };
    line-height: ${ (props) => props.interline ? props.interline : "24px" };
    font-weight: ${ (props) => props.weight ? props.weight : "500" };
    letter-spacing: ${ (props) => props.spacing ? props.spacing : "-0.1px" };
    color: ${ (props) => props.color ? props.color : color.black };
    padding: ${ (props) => props.padding ? props.padding : "12px 16px" };
    margin: ${ (props) => props.margin ? props.margin : "" };
    border-color: ${ (props) => props.borderColor ? props.borderColor : color.gray200 };
    border-radius: ${ (props) => props.borderColor ? props.borderColor : "8px" };
    resize: ${ (props) => props.resize ? props.resize : "none" };

    @media(min-width: 769px) {
        margin: ${ (props) => props.marginMD ? props.marginMD : "" };
    }

    :hover {
        border-color: transparent;
        box-shadow: 0 0 0 4px ${color.gray100};
    };

    &:focus,
    &:focus-visible {
        border-color: ${ (props) => props.hover ? props.hover : color.black };
        outline: none;
        box-shadow: none;
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${color.gray500};
    }

    &:-ms-input-placeholder {
        color: ${color.gray500};
    }
`;

export default Textarea;